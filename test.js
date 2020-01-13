const proto = require('./demo_pb')

const fromHexString = hexString =>
  new Uint8Array(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)));

const b1 = '0a060a0131120131181e';
const u1 = fromHexString(b1)
const m1 = proto.A.deserializeBinary(u1);
console.log(m1.toObject());

const b2 = '0a060a0131120131181e10a3c6ad8dcdeed0a274';
const u2 = fromHexString(b2)
const m2 = proto.A.deserializeBinary(u2);
console.log(m2.toObject());