import { Component, PropsWithChildren } from "react";
import { View, Button } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";

import "./index.less";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Button onClick={() => navigateTo({ url: "/pages/test/index" })}>
          {" "}
          goto Test page
        </Button>
      </View>
    );
  }
}
