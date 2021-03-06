import {SocketIoConfig} from 'ngx-socket-io';
import {environment} from '../../../environments/environment';
import {UserService} from '../../shared/services/user.service';

const token = localStorage.getItem(UserService.TOKEN_KEY);
export const CONFIG: SocketIoConfig = {
  url: environment.urlShort, options: {
    transportOptions: {
      polling: {
        extraHeaders: {
          'Authorization': 'Bearer ' + token
        }
      }
    }
  }
};

export const CONFIG_FOR_USER: SocketIoConfig = {
  url: environment.urlShort + 'user', options: {
    transportOptions: {
      polling: {
        extraHeaders: {
          'Authorization': 'Bearer ' + token
        }
      }
    }
  }
};
