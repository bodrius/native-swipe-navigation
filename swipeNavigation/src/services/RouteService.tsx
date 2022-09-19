import {
  StackActions,
  CommonActions,
  DrawerActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef();

const navigate = (name: string, params?: object) => {
  if (navigationRef.isReady()) {
    navigationRef.current?.dispatch(CommonActions.navigate({name, params}));
  }
};

const openDrawer = () => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(DrawerActions.openDrawer());
  }
};

const closeDrawer = () => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(DrawerActions.closeDrawer());
  }
};

const goBack = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(CommonActions.goBack());
  }
};

const pop = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.pop());
  }
};

const popToTop = () => {
  if (navigationRef?.current && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

const push = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
};

const reset = (name: string, params?: object) => {
  if (navigationRef?.current) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{name, params}],
      }),
    );
  }
};

export const RouteService = {
  navigationRef,
  navigate,
  openDrawer,
  closeDrawer,
  goBack,
  pop,
  popToTop,
  push,
  reset,
};
