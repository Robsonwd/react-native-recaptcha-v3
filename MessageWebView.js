import React from 'react'
import {View } from 'react-native'
import { WebView } from 'react-native-webview'

// fix https://github.com/facebook/react-native/issues/10865
const patchPostMessageJsCode = `(${String(function() {
	const originalPostMessage = window.postMessage;
	const patchedPostMessage = function(message, targetOrigin, transfer) {
		originalPostMessage(message, targetOrigin, transfer)
	};
	patchedPostMessage.toString = function() {
		return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage')
	};
	window.postMessage = patchedPostMessage
})})();`;

export default class MessageWebView extends React.Component {
	constructor(props) {
		super(props);
		this.postMessage = this.postMessage.bind(this);
	}
	postMessage(action) {
		this.WebView.postMessage(JSON.stringify(action));
	}

	getWebViewHandle = () => {
		return this.webview;
	};

	render() {
		const { html, source, url, onMessage, ...props } = this.props;

		return (
			<View style={props.containerStyle}>
				<WebView
					{...props}
					originWhitelist={['*']}
					style={props.containerStyle}
					javaScriptEnabled={true}
					automaticallyAdjustContentInsets
					injectedJavaScript={patchPostMessageJsCode}
					source={source ? source : html ? { html } : url}
					ref={x => {this.webview = x}}
					onMessage={e => onMessage(e.nativeEvent.data)}
					startInLoadingState
					mixedContentMode="always"
				/>
			</View>
		)
	}
}
