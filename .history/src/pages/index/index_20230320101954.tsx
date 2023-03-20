import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import { navigateTo } from "@tarojs/router";

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
        <Text onClick={() => navigateTo({ url: "pages/test/index" })}>
          Hello world!
        </Text>
      </View>
    );
  }
}
