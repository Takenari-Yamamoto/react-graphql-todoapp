import { STATUS, Status } from '../config/enum';

export const formatStatus = (type: Status) => {
  switch (type) {
    case STATUS.TODO:
      return '未着手';
    case STATUS.DOING:
      return '処理中';
    case STATUS.DONE:
      return '完了';
    case STATUS.PENDING:
      return '保留';
    default:
      return '未設定';
  }
};
