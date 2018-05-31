import React, { Component } from "react";

import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Button from "react-native-button";
import { styles as theme } from "react-native-theme";

import withLnd from "./withLnd";

class ScreenAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getDev();
  }

  getDev = async () => {
    try {
      const httpsCert = await this.props.getWalletFile("tls.cert");
      const adminMacaroon = await this.props.getWalletMacaroon(
        "admin.macaroon"
      );
      const readonlyMacaroon = await this.props.getWalletMacaroon(
        "readonly.macaroon"
      );
      const invoiceMacaroon = await this.props.getWalletMacaroon(
        "invoice.macaroon"
      );
      this.setState({
        httpsCert,
        adminMacaroon,
        readonlyMacaroon,
        invoiceMacaroon
      });
    } catch (e) {}
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.paragraph}>
            <Text style={theme.boldText}>rawtx</Text> - v0.1 - lightning network
            wallet, copyrighted:
            <Text style={theme.boldText}>Copyright (C) 2018 rawtx</Text>
          </Text>
          <View style={styles.spacer} />
          <Text style={styles.paragraph}>
            <Text style={theme.boldText}>lnd</Text> - v0.4.1 - commit:
            9017d18f14d9cb07256dfa9c2927cb6d6431dbeb
          </Text>
          <View style={styles.spacer} />
          <Text style={styles.paragraph}>
            <Text>
              This app runs lnd(<Text style={theme.boldText} selectable>
                https://github.com/lightningnetwork/lnd
              </Text>) under the hood, it's copyrighted:
            </Text>
            <Text style={theme.boldText}>
              Copyright (C) 2015-2018 The Lightning Network Developers
            </Text>
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.paragraph}>
            <Text style={theme.boldText}>Support:</Text>
            you can reach us at{" "}
            <Text style={theme.boldText} selectable>
              twitter.com/rawtxapp
            </Text>, reddit:{" "}
            <Text style={theme.boldText} selectable>
              /u/rawtxapp
            </Text>{" "}
            or on{" "}
            <Text style={theme.boldText} selectable>
              lightningcommunity.slack.com
            </Text>{" "}
            under rawtxapp username. Our email address is{" "}
            <Text style={theme.boldText}>rawtxapp@gmail.com</Text>. The support
            you will receive will be as fast as the payments you will make on
            this app :) Our webpage is still wip, will be available at
            https://rawtx.com.
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.paragraph}>
            If you're interested in talking to the lnd server that's running on
            your phone, here are the certs and macaroons:
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.boldText}>Https cert:</Text>
          <Text style={theme.selectableText} multiline={true} selectable>
            {this.state.httpsCert}
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.boldText}>admin macaroon:</Text>
          <Text style={theme.selectableText} multiline={true} selectable>
            {this.state.adminMacaroon}
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.boldText}>readonly macaroon:</Text>
          <Text style={theme.selectableText} multiline={true} selectable>
            {this.state.readonlyMacaroon}
          </Text>
          <View style={styles.spacer} />
          <Text style={theme.boldText}>invoice macaroon:</Text>
          <Text style={theme.selectableText} multiline={true} selectable>
            {this.state.invoiceMacaroon}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default withLnd(ScreenAbout);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  spacer: {
    height: 20
  }
});
