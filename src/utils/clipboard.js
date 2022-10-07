import i18n from '@/locale'
import { ElMessage } from 'element-plus'
import Clipboard from 'clipboard'

function clipboardSuccess() {
  ElMessage({
    message: i18n.global.t('Copy Successfully'),
    type: 'success',
    duration: 1500,
  })
}

function clipboardFailure() {
  ElMessage({
    message: i18n.global.t('Copy failed'),
    type: 'error',
    duration: 1500,
  })
}

export default function handleClipboard(text, event) {
  const clipboard = new Clipboard(event.target, {
    text: () => text,
  })
  clipboard.on('success', () => {
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', () => {
    clipboardFailure()
    clipboard.destroy()
  })
  clipboard.onClick(event)
}
