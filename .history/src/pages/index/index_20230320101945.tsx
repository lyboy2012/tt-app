import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.less";
import { navigateTo } from "@tarojs/router";

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
