import { memo } from "react";

type Props = {
  selected: string;
};

const StatusSelect = (props: Props) => {
  const { selected } = props;
  return (
    <select name='status-select'>
      <option defaultValue={selected}>{selected}</option>
      <option value='未着手'>未着手</option>
      <option value='処理中'>処理中</option>
      <option value='完了'>完了</option>
      <option value='保留'>保留</option>
    </select>
  );
};

export default memo(StatusSelect);
