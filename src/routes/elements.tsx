import { Suspense, lazy, ElementType } from 'react';
// components
import LoadingScreen from '../components/loading-screen';

// ----------------------------------------------------------------------

const Loadable = (Component: ElementType) => (props: any) =>
(
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// ----------------------------------------------------------------------

// AUTH
export const LoginPage = Loadable(lazy(() => import('../pages/auth/LoginPage')));
export const RegisterPage = Loadable(lazy(() => import('../pages/auth/RegisterPage')));
export const VerifyCodePage = Loadable(lazy(() => import('../pages/auth/VerifyCodePage')));
export const NewPasswordPage = Loadable(lazy(() => import('../pages/auth/NewPasswordPage')));
export const ResetPasswordPage = Loadable(lazy(() => import('../pages/auth/ResetPasswordPage')));

// DASHBOARD: GENERAL
export const GeneralAppPage = Loadable(lazy(() => import('../pages/dashboard/GeneralAppPage')));
export const GeneralEcommercePage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralEcommercePage'))
);
export const GeneralAnalyticsPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralAnalyticsPage'))
);
export const GeneralBankingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBankingPage'))
);
export const GeneralBookingPage = Loadable(
  lazy(() => import('../pages/dashboard/GeneralBookingPage'))
);
export const GeneralFilePage = Loadable(lazy(() => import('../pages/dashboard/GeneralFilePage')));

// DASHBOARD: ECOMMERCE
export const EcommerceShopPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceShopPage'))
);
export const EcommerceProductDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductDetailsPage'))
);
export const EcommerceProductListPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductListPage'))
);
export const EcommerceProductCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductCreatePage'))
);

export const EcommerceCheckoutPage = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceCheckoutPage'))
);

// DASHBOARD: INVOICE
export const InvoiceListPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceListPage')));
export const OrderListPage = Loadable(lazy(() => import('../pages/dashboard/OrderListPage')));
export const InvoiceDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceDetailsPage'))
);
export const OrderDetailsPage = Loadable(
  lazy(() => import('../pages/dashboard/OrderDetailsPage'))
);
export const InvoiceCreatePage = Loadable(
  lazy(() => import('../pages/dashboard/InvoiceCreatePage'))
);
export const InvoiceEditPage = Loadable(lazy(() => import('../pages/dashboard/InvoiceEditPage')));

// DASHBOARD: USER
export const UserProfilePage = Loadable(lazy(() => import('../pages/dashboard/UserProfilePage')));
export const UserCardsPage = Loadable(lazy(() => import('../pages/dashboard/UserCardsPage')));
export const UserListPage = Loadable(lazy(() => import('../pages/dashboard/UserListPage')));
export const UserAccountPage = Loadable(lazy(() => import('../pages/dashboard/UserAccountPage')));
export const UserCreatePage = Loadable(lazy(() => import('../pages/dashboard/UserCreatePage')));
export const UserEditPage = Loadable(lazy(() => import('../pages/dashboard/UserEditPage')));







// MAIN
export const Page500 = Loadable(lazy(() => import('../pages/Page500')));
export const Page403 = Loadable(lazy(() => import('../pages/Page403')));
export const Page404 = Loadable(lazy(() => import('../pages/Page404')));

export const ComingSoonPage = Loadable(lazy(() => import('../pages/ComingSoonPage')));
export const MaintenancePage = Loadable(lazy(() => import('../pages/MaintenancePage')));

// DEMO COMPONENTS
// ----------------------------------------------------------------------


