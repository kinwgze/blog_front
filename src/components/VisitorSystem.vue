<template>
  <el-form
    :model="form"
    label-width="120px"
    :rules="rules"
  >
    <el-form-item label="用户名" prop="guestName">
      <el-input v-model.trim="form.guestName" style="width:300px">
      </el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phoneNumber">
      <el-input v-model="form.phoneNumber" style="width:300px" maxlength="60">
      </el-input>
    </el-form-item>
    <el-form-item  label="申请时间">
        <el-date-picker
          style="width: 300px"
          v-model="form.startTime"
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
      <el-button type="primary" @click="submit()">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue'
import { post } from '@/util/axios'
import { ElMessageBox } from 'element-plus';

export default {
  name: 'VisitorSystem',
  setup () {
    const form = reactive({
      guestName: '',
      phoneNumber: '',
      startTime: '',
      note: '',
      timeDefaultShow: new Date()
    })

    const rules = reactive({
      guestName: [
        { required: true, message: '请输入你的姓名', trigger: ['blur', 'change'] },
        { min: 2, max: 10, message: '长度要求为2-10', trigger: ['blur', 'change'] },
        { pattern: '^[a-zA-Z\u4e00-\u9fa5]+$', message: '只允许输入中文和英文', trigger: ['blur', 'change'] }
      ],
      phoneNumber: [
        { required: true, message: '请输入你的手机号', trigger: ['blur', 'change'] },
        { pattern: '^1[3-9]\\d{9}$', message: '手机号格式错误', trigger: ['blur', 'change'] }
      ]
    })

    // post提交&结果处理
    const submitForm = data => post('/guard/system/requestForPermit', data).then((result) => {
      if (result.state === 0) {
        const message = '您的申请码为<strong>' + result.data.checkCode + '</strong>，请仔细保管！';
        ElMessageBox.alert(message, '申请成功', {
          dangerouslyUseHTMLString: true
        });
      } else if (result.state === 1) {
        ElMessageBox.alert('请稍后重试', '申请失败');
      }
    }).catch(() => {
      ElMessageBox.alert('请稍后重试', '申请失败');
    })

    // 提交前处理
    const submit = async () => {
      const data = {};
      data.guestName = form.guestName;
      data.phoneNumber = parseInt(form.phoneNumber);
      data.startTime = form.startTime;
      data.note = form.note;
      await submitForm(data);
    }
    return { form, submit, rules }
  }
}
</script>

<style scoped>

</style>
