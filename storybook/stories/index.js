import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Welcome from './Welcome';
import Loader from '../../src/Loader';
import newloader from './newloader.svg';

storiesOf('Welcome', module)
  .add('to reacted.io', () => (
    <Welcome showApp={linkTo('Loader')}/>
  ));

storiesOf('Loader', module)
  .add('default', () => (
    <Loader />
  ))
  .add('with custom text for screen reader', () => (
    <Loader displayText="Updating"/>
  ))
  .add('left position', () => (
    <Loader position="left"/>
  ))
  .add('right position', () => (
    <Loader position="right"/>
  ))
  .add('with custom image', () => (
    <Loader displayText="Center" loaderImg={newloader}/>
  ));
