import request from '../request';

class MarketApi {
  // 获取市场首页
  static marketHome = (params: {}): Promise<any> =>
    request('/market', 'GET', params, true);
  // 市场首页我的团队
  static marketTeamsMy = (params: {}): Promise<any> =>
    request('/teams/my', 'GET', params, true);
}

export default MarketApi;
