import  {Injectable} from "@angular/core";
import {HttpUtil} from "../../../../utils/http.util";
import {MeetingType} from "./meeting.type";

@Injectable()
export class MeetingService {
  private prefix: string = '/v1/jzyMeeting';
  constructor(private httpUtil: HttpUtil){}
  searchMeetings(param: MeetingType) {
    const url = this.prefix + '/meeting/list';
    return this.httpUtil.post(url,param);
  }
}
