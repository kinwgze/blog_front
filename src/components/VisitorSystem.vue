<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model.trim="form.guestName" style="width:300px" maxlength="120">
      </el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.phoneNumber" style="width:300px" maxlength="60">
      </el-input>
    </el-form-item>
    <el-form-item  label="申请时间">
        <el-date-picker
          style="width: 300px"
          v-model="form.startTimeStamp"
          placeholder="Pick a date"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm"
          format="YYYY-MM-DD HH:mm"
          :default-value="form.timeDefaultShow"
        />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model.lazy="form.note" type="textarea" style="width: 300px" maxlength="1024" >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue'
import { post } from '@/util/axios'

export default {
  name: 'VisitorSystem',
  setup () {
    const form = reactive({
      guestName: '',
      phoneNumber: '',
      startTimeStamp: '',
      note: '',
      timeDefaultShow: new Date()
    })

    const submit = async () => {
      const data = [];
      data.guestName = form.guestName;
      data.phoneNumber = form.phoneNumber;
      data.startTimeStamp = form.startTimeStamp;
      data.note = form.note;

      const submitForm = data => post('/guard/system/requestForPermit', data).then((result) => {
        console.log(result);
      }).catch(() => {
        console.log('error');
      })
      await submitForm(data)
    }
    return { form, submit }
  }
}
</script>

<style scoped>

</style>
