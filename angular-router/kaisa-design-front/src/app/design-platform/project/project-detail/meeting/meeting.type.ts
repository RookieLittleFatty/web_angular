export class MeetingType {
  id: number;                  //会议id
  name: string;                //会议名称
  projectId: number;           //项目id
  projectName: string;         //项目名称
  marker: string;              //会议纪要人Id
  markerName: string;          //会议纪要人姓名
  meetingDate: Date;            //会议日期
  startTime: Date;              //开始时间
  endTime: Date;                //结束时间
  hours: number;               //会议时长
  memberIds: string;           //会议成员id组成的字符串
  memberNames: string;         //会议成员名称组成的字符串
  createUser: string;          //当前用户id
  promoter: string;            //发起人id
  promoterName: string;        //发起人名称
  pageNum: number;             //页码
  pageSize: number;            //每页条数
}
