import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import colors from '../styles/colors';
import {shadows} from '../styles/shadows';
import {buttonStyles} from '../styles/button';
import {Realm, useApp} from '@realm/react';

export enum AuthState {
  None,
  Loading,
  LoginError,
  RegisterError,
}

export const LoginScreen = () => {
  const app = useApp();
  const [authState, setAuthState] = useState(AuthState.None);

  // If the user presses "login" from the auth screen, try to log them in
  // with the supplied credentials
  const handleLogin = useCallback(async () => {
    setAuthState(AuthState.Loading);
    const credentials = Realm.Credentials.anonymous();
    try {
      await app.logIn(credentials);
      setAuthState(AuthState.None);
    } catch (e) {
      console.log('Error logging in', e);
      setAuthState(AuthState.LoginError);
    }
  }, [setAuthState, app]);


  return (
    <View style={styles.content}>
      {authState === AuthState.LoginError && (
        <Text style={[styles.error]}>
          There was an error logging in, please try again
        </Text>
      )}

      <View style={styles.buttons}>
        <Pressable
          onPress={handleLogin}
          style={[
            styles.button,
            authState === AuthState.Loading && styles.buttonDisabled,
          ]}
          disabled={authState === AuthState.Loading}>
          <Text style={buttonStyles.text}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkBlue,
  },

  inputContainer: {
    padding: 10,
    alignSelf: 'stretch',
    marginHorizontal: 10,
  },

  error: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 14,
    color: colors.white,
  },

  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 10,
    height: 50,
    marginVertical: 8,
    backgroundColor: colors.white,
    borderRadius: 5,
    ...shadows,
  },

  buttons: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    ...buttonStyles.button,
    ...shadows,
  },

  buttonDisabled: {
    opacity: 0.5,
  },

  registerButton: {
    backgroundColor: colors.purpleDark,
  },
});
