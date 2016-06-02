/*
* Seed models
*/

'use strict';

import fakeSeed from './fake-seed';
import { generateHash } from '../../backend/helpers/bycrypt-helper';
import objectID from 'bson-objectid';

export const auth = {
  _id: '54495ad94c934721ede76d90',
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwiaW5zZXJ0aW5nIjp0cnVlLCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsidXNlcm5hbWUiOiJyZXF1aXJlIiwicGFzc3dvcmQiOiJyZXF1aXJlIn0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6e30sIm1vZGlmeSI6e30sInJlcXVpcmUiOnsidXNlcm5hbWUiOnRydWUsInBhc3N3b3JkIjp0cnVlfX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJlbWl0dGVyIjp7ImRvbWFpbiI6bnVsbCwiX2V2ZW50cyI6e30sIl9ldmVudHNDb3VudCI6MCwiX21heExpc3RlbmVycyI6MH19LCJpc05ldyI6ZmFsc2UsIl9kb2MiOnsicm9sZXMiOlsidXNlciJdLCJ1cGRhdGVkIjoiMjAxNi0wNS0zMVQxOToyODowOS4yNjNaIiwiX2lkIjoiNTc0ZGU1Yzk2YWRiNWViYTc2ZDI1MDU3IiwicGFzc3dvcmQiOiIkMmEkMDgkcWNrcEpVNkttak1jNlpzU2t0UjQ5dTZMbno4THpSUy4yUUtESEJMY3l0ZkVndHlkWHZjcmEiLCJ1c2VybmFtZSI6ImFuaWEiLCJfX3YiOjB9LCJfcHJlcyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbbnVsbCxudWxsXX0sIl9wb3N0cyI6eyIkX19vcmlnaW5hbF9zYXZlIjpbXX0sImlhdCI6MTQ2NDcyMjg4OX0.jvfzOAyWfskGE4b-T4hKm_AL3ZgzzoSm9sPfnoziFGw'
};

export const userUpdateId = objectID('574ee7ffd21b7c5321ea697a');
export const userDeleteId = objectID('574ee46a37a1ae286619a04a');

export const users = [
  {
    ...fakeSeed()['users'],
    firstName: 'ania',
    username: 'ania',
    password: generateHash('xyz')
  },
  {
    _id: objectID(auth._id),
    email: 'a@hotmail.com',
    firstName: 'a',
    lastLogin: '2016-02-02T00:29:17.889Z',
    lastName: 'Zeyer',
    roles: [ 'user' ],
    username: 'a',
    password: generateHash('a')
  },
  {
    ...fakeSeed()['users'],
    _id: objectID(userUpdateId),
    firstName: 'meyou',
    username: 'meyou',
    password: generateHash('xyz')
  },
  {
    ...fakeSeed()['users'],
    _id: objectID(userDeleteId),
    firstName: 'bob',
    username: 'builder',
    password: generateHash('xyz')
  }
];