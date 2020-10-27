# Tutorial: Build Text to Voice over using React Native

## Overview
In this tutorial, we will use [**React Native**](https://reactnative.dev/) to build Text to Voice over app. It enables Deaf users to type a text and click speak button. The app speaks a voice for them.

![Speaking]()

## Prerequisties
* Basic knowledge of Javascript language
* Basic understanding of [**React Native**](https://reactnative.dev/) and [**Expo**](https://expo.io)
* Download and install [**Visual Studio Code**](https://code.visualstudio.com/)
* Download [**Node.js and npm**](https://nodejs.org/en/)
* Download and install **Expo client** app on your iOS or Android phone
* Install [yarn](https://yarnpkg.com/getting-started/install)
* Install **Expo CLI]** via yarn

## Getting Started

### Step 1: Download and install Node.js and npm
1. Go to [https://nodejs.org/en/](https://nodejs.org/en/) and click on Download that says *Recommended For Most Users*.
2. To Check if you have **Node.js** installed, run this command in your terminal:
```
node -v
```
3. To confirm that you have **npm** installed, run this command in your terminal:
```
npm -v
```
4. To install yarn, run this command in your terminal:
```
npm install -g yarn
```
5. You can install the **Expo CLI** using **yarn**. 

    To download and install the **Expo CLI**, run the following command: `$ yarn global add expo-cli`

### Step 2: Create a new React Native Project

1. Open a terminal window and navigate to the directory for your code

	To create a new project called "TextToVoiceOver" `$ expo init TextToVoiceOver`
	
2. Select **blank** under Managed workflow
  
  After executing the command, a folder is created with the following files:- 
  
  ![Files](https://github.com/deafelimuplus/text-to-voice-over-tutorial/blob/main/images/files.png)
        
3. To navigate to **TextToVoiceOver** folder using this command:

`cd TextToVoiceOver`

4. To run **TextToVoiceOver** project, run the following yarn commands:-

`yarn start`

### Step 3: Download and install Expo client app

After you download and install **Expo** client app on your iOS or Android phone, following the steps:-

1. Open **Expo** client app
2. To run the app on your iOS or Android phone, scan the QR code with Expo app (Android) or the Camera app (iOS).

![Scan QR code](https://github.com/deafelimuplus/text-to-voice-over-tutorial/blob/main/images/scanQR.png)

3. `expo-speech` provides an API that allows you to utilize Text-to-speech functionality in your app. To install **expo-speech**, run the following command:-

`expo install expo-speech`

4. Open **App.js** file to add the following functions:-

	* textToSpeech
		```node.js
		textToSpeech = (speech) => {
		    Speech.speak(speech, {
		      voice:'com.apple.ttsbundle.siri_female_en-US_compact',
		      rate:.95,
		      onStart:onStartSpeech,
		      onDone:onDoneSpeech
		    });
		  };
		```
	* onStartSpeech
		```node.js
		onStartSpeech = () => {
		    setCurrentSpeech({...currentSpeech, isStartSpeech:true});
		  };
		
		```
	* onDoneSpeech
		```node.js
		onDoneSpeech = () => {
		    const index = currentSpeech.index+1 < speechs.length ? currentSpeech.index+1 : 0;
		    console.log('speaking is done.');
		    setCurrentSpeech({
		      index,
		      speaking:speechs[index],
		      isStartSpeech:false
		    });
		  };
		```





	
### Congratulations!! You have finished building your first Text to Voice over using React Native!
