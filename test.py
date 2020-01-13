import binascii
import demo_pb2

bs1 = binascii.unhexlify('0a060a0131120131181e')
u1 = demo_pb2.A()
u1.ParseFromString(bs1)
print(u1)

bs2 = binascii.unhexlify('0a060a0131120131181e10a3c6ad8dcdeed0a274')
u2 = demo_pb2.A()
u2.ParseFromString(bs2)
print(u2)