export interface IActivityListProps {
  list: IActivityItem[];
}

export interface IActivityItem {
  /** 列表名称 */
  title: string;

  /** 活动外链 */
  iframe: string;

  /** 活动描述 */
  desc: string;
}
