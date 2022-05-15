import { lazy } from 'react';

import NftSelection from '@/pages/home/nft-selection';
import TradingRecord from '@/pages/trading-record';
import Landing from '@/pages/user/landing';
import Login from '@/pages/user/login';
// import VerificationCode from '@/pages/user/verification-code';
const Register = lazy(() => import('@/pages/user/register'));
const Field = lazy(() => import('@/pages/field'));
const ChangePassword = lazy(() => import('@/pages/user/change-password')); // 忘记密码获取邮箱验证码
const VerificationCode = lazy(() => import('@/pages/user/verification-code')); // 输入邮箱验证码
const Index = lazy(() => import('@/pages/home/index'));
const My = lazy(() => import('@/pages/my/index'));
const Setting = lazy(() => import('@/pages/setting/index'));
const Message = lazy(() => import('@/pages/my/message/index'));
const MessageDetail = lazy(() => import('@/pages/my/message-detail/index'));
const Account = lazy(() => import('@/pages/my/account/index'));
const Notice = lazy(() => import('@/pages/my/notice/index'));
const Service = lazy(() => import('@/pages/my/service/index'));
const About = lazy(() => import('@/pages/my/about/index'));
const TermsService = lazy(() => import('@/pages/my/about/terms-service/index'));
const Privacy = lazy(() => import('@/pages/my/about/privacy-agreement/index'));
const SecurityCenter = lazy(() => import('@/pages/my/security-center')); // 安全中心
const ChangeTransactionPassword = lazy(
  () => import('@/pages/my/change-transaction-password'),
); // 修改交易密码
const ResetPassword = lazy(() => import('@/pages/user/reset-password')); // 修改登录密码
const BindSuperiorID = lazy(() => import('@/pages/home/bind-superior-id')); // 绑定上级ID
const UpdateNickname = lazy(() => import('@/pages/home/update-nickname')); // 修改昵称
const TransactionDetail = lazy(() => import('@/pages/home/transaction-details')); // 修改昵称
const NftAccountSelection = lazy(() => import('@/pages/field/nft-account-selection'));
const FieldHome = lazy(() => import('@/pages/field/home'));
const AddNft = lazy(() => import('@/pages/home/add-nft'));
const Transfer = lazy(() => import('@/pages/home/transfer'));
const Order = lazy(() => import('@/pages/home/order'));
const NftDetail = lazy(() => import('@/pages/home/nft-detail'));
const Download = lazy(() => import('@/pages/home/download-nft'));
const Share = lazy(() => import('@/pages/home/share'));


/* 领域相关页面 */
const FieldDetail = lazy(() => import('@/pages/field/index/detail'));
const FieldPurchase = lazy(() => import('@/pages/field/index/purchase'));
const FieldPurchaseSuccess = lazy(() => import('@/pages/field/index/purchase-success'));
const FieldOrders = lazy(() => import('@/pages/field/orders'));
const FieldOrdersDetail = lazy(() => import('@/pages/field/orders/detail'));

export interface RouteConfig {
  path: string;
  component?: any;
  exact?: boolean;
}

export const routes: RouteConfig[] = [
  {
    path: '/landing',
    component: Landing,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/verification/email',
    component: ChangePassword,
    exact: true,
  },
  {
    path: '/verification/code',
    component: VerificationCode,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    path: '/index',
    component: Index,
    exact: true,
  },
  {
    path: '/nft/selection',
    component: NftSelection,
    exact: true,
  },
  {
    path: '/nft/transaction/detail',
    component: TransactionDetail,
    exact: true,
  },
  {
    path: '/my',
    component: My,
    exact: true,
  },
  {
    path: '/my/account',
    component: Account,
    exact: true,
  },
  {
    path: '/index/addNft',
    component: AddNft,
    exact: true,
  },
  {
    path: '/index/transfer',
    component: Transfer,
    exact: true,
  },
  {
    path: '/index/order',
    component: Order,
    exact: true,
  },
  {
    path: '/index/nftDetail',
    component: NftDetail,
    exact: true,
  },
   {
    path: '/index/share',
    component: Share,
    exact: true,
  },
  {
    path: '/index/download',
    component: Download,
    exact: true,
  },
  {
    path: '/my/message',
    component: Message,
    exact: true,
  },
  {
    path: '/my/message/detail',
    component: MessageDetail,
    exact: true,
  },
  {
    path: '/setting',
    component: Setting,
    exact: true,
  },
  {
    path: '/notice',
    component: Notice,
    exact: true,
  },
  {
    path: '/service',
    component: Service,
    exact: true,
  },
  {
    path: '/about',
    component: About,
    exact: true,
  },
  {
    path: '/about/service',
    component: TermsService,
    exact: true,
  },
  {
    path: '/about/privacy',
    component: Privacy,
    exact: true,
  },
  {
    path: '/trading/record',
    component: TradingRecord,
    exact: true,
  },
  {
    path: '/security',
    component: SecurityCenter,
    exact: true,
  },
  {
    path: '/reset',
    component: ResetPassword,
    exact: true,
  },
  {
    path: '/setting/transaction/password',
    component: ChangeTransactionPassword,
    exact: true,
  },
  {
    path: '/field',
    component: Field,
    exact: true,
  },
  {
    path: '/field/home',
    component: FieldHome,
    exact: true,
  },
  {
    path: '/field/account/selection',
    component: NftAccountSelection,
    exact: true,
  },
  {
    path: '/bind/superior',
    component: BindSuperiorID,
    exact: true,
  },
  {
    path: '/update/nickname',
    component: UpdateNickname,
    exact: true,
  },
  // 领域相关页面
  {
    path: '/field/detail',
    component: FieldDetail,
    exact: true,
  },
  {
    path: '/field/purchase',
    component: FieldPurchase,
    exact: true,
  },
  {
    path: '/field/purchase/success',
    component: FieldPurchaseSuccess,
    exact: true,
  },
  {
    path: '/field/orders',
    component: FieldOrders,
    exact: true,
  },
  {
    path: '/field/orders/detail',
    component: FieldOrdersDetail,
    exact: true,
  },
];
