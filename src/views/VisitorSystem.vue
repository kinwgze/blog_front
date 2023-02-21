<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="用户名">
      <el-input v-model.trim="form.guestName" style="width:50%" maxlength="120">
      </el-input>
    </el-form-item>
    <el-form-item label="手机号">
      <el-input v-model="form.phoneNumber" style="width:50%" maxlength="60">
      </el-input>
    </el-form-item>
    <el-form-item label="申请时间">
      <el-col :span="12">
        <el-date-picker
          v-model="form.date1"
          placeholder="Pick a date"
          style="width: 100%"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm"
          format="YYYY-MM-DD HH:mm"
          :default-value="form.timeDefaultShow"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model.lazy="form.note" type="textarea" style="width: 50%" maxlength="1024" >
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'VisitorSystem',
  setup () {
    const form = reactive({
      guestName: '',
      phoneNumber: '',
      date1: '',
      date2: '',
      note: '',
      timeDefaultShow: new Date()
    })

    const submit = async () => {
      console.log(form)

      // 在这里进行上传（axios、ajax）
    }
    return { form, submit }
  }
}
</script>

<style scoped>

</style>
