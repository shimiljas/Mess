import { Toast } from 'native-base';

const toast = ({
  text = '',
  position = 'bottom',
  type = 'success',
  duration = 5000
}) => {
  Toast.show({
    text,
    position,
    buttonText: 'ok',
    type,
    duration,
    style: {
      backgroundColor: type === 'danger' ? 'red' : 'green'
    }
  });
};

export default toast;
