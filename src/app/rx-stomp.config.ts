import { InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from 'src/environments/environment';

export const myRxStompConfig: InjectableRxStompConfig = {
  //endereco do servidor
  brokerURL: environment.WEBSOCKET_URL+'gameplay',
  webSocketFactory: () => new SockJS(environment.API_URL+'gameplay'),


};
