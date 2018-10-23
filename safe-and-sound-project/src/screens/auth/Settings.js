import React from 'react';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

export default ({ router }) => (
  <Screen backgroundColor="#ffffff" title="Settings">
    <Button
      onPress={() => {
        router.pop();
      }}
      text="back"
    />
  </Screen>
);
