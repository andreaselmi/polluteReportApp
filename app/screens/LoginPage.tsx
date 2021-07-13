import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

//components
import Screen from '../components/Screen';
import Text from '../components/Text';
import TextInput from '../components/form/TextInput';
import ErrorText from '../components/form/ErrorText';

let validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(5),
});

interface Values {
  email: string;
  password: string;
}

//TODO estrarre axios
const LoginPage = () => {
  const login = async ({email, password}: Values) => {
    const res = await axios.post('http://localhost:3000/auth', {
      email,
      password,
    });

    console.log(res);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text>Log in and start to report polluting</Text>
      </View>
      <View style={styles.formContainer}>
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={(values: Values) => login(values)}
          validationSchema={validationSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <View>
              <TextInput
                placeholder="email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <ErrorText text={errors.email} />
              )}

              <TextInput
                placeholder="password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

              {touched.password && errors.password && (
                <ErrorText text={errors.password} />
              )}

              <Button onPress={handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </View>
    </Screen>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },
  formContainer: {
    paddingHorizontal: 30,
    flex: 3,
  },
});
