import { memo } from 'react';
import { Status } from '../../../config/enum';
import { formatStatus } from '../../../utils/util';

type Props = {
  selected: Status;
  id: number;
  onSelect: (id: number, status: number) => void;
};

const StatusSelect = (props: Props) => {
  const { selected, id, onSelect } = props;

  return (
    <select
      name="status-select"
      onClick={(e) => e.stopPropagation()}
      onChange={(e) => onSelect(id, Number(e.target.value))}
    >
      <option defaultValue={selected}>{formatStatus(selected)}</option>
      <option value={0}>未着手</option>
      <option value={1}>処理中</option>
      <option value={2}>完了</option>
      <option value={3}>保留</option>
    </select>
  );
};

export default memo(StatusSelect);
