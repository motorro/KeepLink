(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x2;
  var initMetadataForInterface = kotlin_kotlin.$_$.t2;
  var asList = kotlin_kotlin.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.w2;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.x;
  var Unit_instance = kotlin_kotlin.$_$.j1;
  var emptyList = kotlin_kotlin.$_$.r1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.b;
  var lazy = kotlin_kotlin.$_$.f4;
  var KProperty1 = kotlin_kotlin.$_$.c3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.o2;
  var toString = kotlin_kotlin.$_$.y2;
  var initMetadataForClass = kotlin_kotlin.$_$.r2;
  var VOID = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.t3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var zip = kotlin_kotlin.$_$.h2;
  var toMap = kotlin_kotlin.$_$.f2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.i;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.l;
  var mapCapacity = kotlin_kotlin.$_$.z1;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var isInterface = kotlin_kotlin.$_$.v2;
  var equals = kotlin_kotlin.$_$.n2;
  var getStringHashCode = kotlin_kotlin.$_$.p2;
  var isBlank = kotlin_kotlin.$_$.h3;
  var toList = kotlin_kotlin.$_$.e2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.g;
  var toHashSet = kotlin_kotlin.$_$.d2;
  var copyToArray = kotlin_kotlin.$_$.q1;
  var toBooleanArray = kotlin_kotlin.$_$.c2;
  var withIndex = kotlin_kotlin.$_$.g2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.m1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.c;
  var to = kotlin_kotlin.$_$.h4;
  var lazy_0 = kotlin_kotlin.$_$.g4;
  var contentEquals = kotlin_kotlin.$_$.n1;
  var initMetadataForObject = kotlin_kotlin.$_$.u2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a3;
  var ensureNotNull = kotlin_kotlin.$_$.e4;
  var hashCode = kotlin_kotlin.$_$.q2;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.f;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var booleanArray = kotlin_kotlin.$_$.j2;
  var emptyMap = kotlin_kotlin.$_$.s1;
  var contentHashCode = kotlin_kotlin.$_$.o1;
  var until = kotlin_kotlin.$_$.z2;
  var joinToString = kotlin_kotlin.$_$.v1;
  var Companion_getInstance = kotlin_kotlin.$_$.c1;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.t;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.u;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.d1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.v;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.g1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.w;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.i1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.s;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.f1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.r;
  var trimIndent = kotlin_kotlin.$_$.n3;
  var get_indices = kotlin_kotlin.$_$.u1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.y;
  var Char = kotlin_kotlin.$_$.r3;
  var getKClass = kotlin_kotlin.$_$.b3;
  var Long = kotlin_kotlin.$_$.s3;
  var ULong = kotlin_kotlin.$_$.z3;
  var ULongArray = kotlin_kotlin.$_$.y3;
  var UInt = kotlin_kotlin.$_$.x3;
  var UIntArray = kotlin_kotlin.$_$.w3;
  var UShort = kotlin_kotlin.$_$.b4;
  var UShortArray = kotlin_kotlin.$_$.a4;
  var UByte = kotlin_kotlin.$_$.v3;
  var UByteArray = kotlin_kotlin.$_$.u3;
  var Unit = kotlin_kotlin.$_$.c4;
  var Duration = kotlin_kotlin.$_$.o3;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.z;
  var Instant = kotlin_kotlin.$_$.p3;
  var Companion_getInstance_6 = kotlin_kotlin.$_$.a1;
  var Uuid = kotlin_kotlin.$_$.q3;
  var Companion_getInstance_7 = kotlin_kotlin.$_$.b1;
  var mapOf = kotlin_kotlin.$_$.a2;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(KSerializer, 'KSerializer');
  initMetadataForClass(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PolymorphicSerializer, 'PolymorphicSerializer', VOID, AbstractPolymorphicSerializer);
  initMetadataForClass(SealedClassSerializer$$inlined$groupingBy$1);
  initMetadataForClass(SealedClassSerializer, 'SealedClassSerializer', VOID, AbstractPolymorphicSerializer);
  function get_isNullable() {
    return false;
  }
  initMetadataForInterface(SerialDescriptor, 'SerialDescriptor');
  initMetadataForClass(ContextDescriptor, 'ContextDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(elementDescriptors$1);
  initMetadataForClass(elementDescriptors$$inlined$Iterable$1);
  initMetadataForClass(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder');
  initMetadataForInterface(CachedNames, 'CachedNames');
  initMetadataForClass(SerialDescriptorImpl, 'SerialDescriptorImpl', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(SerialKind, 'SerialKind');
  initMetadataForClass(PrimitiveKind, 'PrimitiveKind', VOID, SerialKind);
  initMetadataForObject(BOOLEAN, 'BOOLEAN', VOID, PrimitiveKind);
  initMetadataForObject(BYTE, 'BYTE', VOID, PrimitiveKind);
  initMetadataForObject(CHAR, 'CHAR', VOID, PrimitiveKind);
  initMetadataForObject(SHORT, 'SHORT', VOID, PrimitiveKind);
  initMetadataForObject(INT, 'INT', VOID, PrimitiveKind);
  initMetadataForObject(LONG, 'LONG', VOID, PrimitiveKind);
  initMetadataForObject(FLOAT, 'FLOAT', VOID, PrimitiveKind);
  initMetadataForObject(DOUBLE, 'DOUBLE', VOID, PrimitiveKind);
  initMetadataForObject(STRING, 'STRING', VOID, PrimitiveKind);
  initMetadataForClass(PolymorphicKind, 'PolymorphicKind', VOID, SerialKind);
  initMetadataForObject(SEALED, 'SEALED', VOID, PolymorphicKind);
  initMetadataForObject(OPEN, 'OPEN', VOID, PolymorphicKind);
  initMetadataForObject(CONTEXTUAL, 'CONTEXTUAL', VOID, SerialKind);
  initMetadataForClass(StructureKind, 'StructureKind', VOID, SerialKind);
  initMetadataForObject(CLASS, 'CLASS', VOID, StructureKind);
  initMetadataForObject(LIST, 'LIST', VOID, StructureKind);
  initMetadataForObject(OBJECT, 'OBJECT', VOID, StructureKind);
  initMetadataForObject(NothingSerializer_0, 'NothingSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DurationSerializer, 'DurationSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(InstantSerializer, 'InstantSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UuidSerializer, 'UuidSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(ListLikeDescriptor, 'ListLikeDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', VOID, ListLikeDescriptor);
  initMetadataForClass(AbstractCollectionSerializer, 'AbstractCollectionSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(CollectionLikeSerializer, 'CollectionLikeSerializer', VOID, AbstractCollectionSerializer);
  initMetadataForClass(PrimitiveArraySerializer, 'PrimitiveArraySerializer', VOID, CollectionLikeSerializer);
  initMetadataForClass(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(InlineClassDescriptor, 'InlineClassDescriptor', VOID, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  initMetadataForInterface(GeneratedSerializer, 'GeneratedSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(InlinePrimitiveDescriptor$1, VOID, VOID, VOID, [GeneratedSerializer]);
  initMetadataForObject(NothingSerialDescriptor, 'NothingSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForClass(NullableSerializer, 'NullableSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerialDescriptorForNullable, 'SerialDescriptorForNullable', VOID, VOID, [SerialDescriptor, CachedNames]);
  initMetadataForClass(ObjectSerializer, 'ObjectSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(CharArraySerializer_0, 'CharArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(DoubleArraySerializer_0, 'DoubleArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(FloatArraySerializer_0, 'FloatArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(LongArraySerializer_0, 'LongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ULongArraySerializer_0, 'ULongArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(IntArraySerializer_0, 'IntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UIntArraySerializer_0, 'UIntArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ShortArraySerializer_0, 'ShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UShortArraySerializer_0, 'UShortArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(ByteArraySerializer_0, 'ByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(UByteArraySerializer_0, 'UByteArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(BooleanArraySerializer_0, 'BooleanArraySerializer', VOID, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  initMetadataForObject(StringSerializer, 'StringSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', VOID, VOID, [SerialDescriptor]);
  initMetadataForObject(CharSerializer, 'CharSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(DoubleSerializer, 'DoubleSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(FloatSerializer, 'FloatSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(LongSerializer, 'LongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(IntSerializer, 'IntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ShortSerializer, 'ShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ByteSerializer, 'ByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(BooleanSerializer, 'BooleanSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UnitSerializer, 'UnitSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(ULongSerializer, 'ULongSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UIntSerializer, 'UIntSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UShortSerializer, 'UShortSerializer', VOID, VOID, [KSerializer]);
  initMetadataForObject(UByteSerializer, 'UByteSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(SerializableWith, 'SerializableWith', VOID, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.rd_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.be('type', serializer(StringCompanionObject_instance).pd());
      $this$buildSerialDescriptor.be('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.qd_1.f6() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.vd_1 = this$0.rd_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.qd_1);
    };
  }
  function PolymorphicSerializer$_get_descriptor_$ref_8tw9if() {
    return function (p0) {
      return p0.pd();
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.qd_1 = baseClass;
    this.rd_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.sd_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).pd = function () {
    var tmp0 = this.sd_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, PolymorphicSerializer$_get_descriptor_$ref_8tw9if(), null);
    return tmp0.l1();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + toString(this.qd_1) + ')';
  };
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.de_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = this$0.ge_1.r1().l();
      while (_iterator__ex2g4s.m()) {
        var element = _iterator__ex2g4s.n();
        // Inline function 'kotlin.collections.component1' call
        var name = element.k1();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.l1();
        $this$buildSerialDescriptor.be(name, serializer.pd());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.be('type', serializer(StringCompanionObject_instance).pd());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.ce_1.f6() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.be('value', elementDescriptor);
      $this$buildSerialDescriptor.vd_1 = this$0.de_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function SealedClassSerializer$_get_descriptor_$ref_m511rz() {
    return function (p0) {
      return p0.pd();
    };
  }
  function SealedClassSerializer$$inlined$groupingBy$1($this) {
    this.he_1 = $this;
  }
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).ie = function () {
    return this.he_1.l();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).je = function (element) {
    return element.l1().pd().ke();
  };
  protoOf(SealedClassSerializer$$inlined$groupingBy$1).le = function (element) {
    return this.je((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.ce_1 = baseClass;
    this.de_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ee_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.ce_1.f6() + ' should be marked @Serializable');
    }
    this.fe_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.fe_1.r1();
    // Inline function 'kotlin.collections.aggregate' call
    var tmp0 = new SealedClassSerializer$$inlined$groupingBy$1(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    // Inline function 'kotlin.collections.aggregateTo' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = tmp0.ie();
    while (_iterator__ex2g4s.m()) {
      var e = _iterator__ex2g4s.n();
      var key = tmp0.le(e);
      var accumulator = destination.o1(key);
      accumulator == null && !destination.m1(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + toString(this.ce_1) + "' have the same serial name '" + key + "':" + (" '" + toString(accumulator.k1()) + "', '" + toString(e.k1()) + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.collections.set' call
      destination.d3(key, e);
    }
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.o()));
    // Inline function 'kotlin.collections.associateByTo' call
    var _iterator__ex2g4s_0 = destination.r1().l();
    while (_iterator__ex2g4s_0.m()) {
      var element = _iterator__ex2g4s_0.n();
      var tmp_2 = element.k1();
      var tmp$ret$8 = element.l1().l1();
      destination_0.d3(tmp_2, tmp$ret$8);
    }
    tmp_1.ge_1 = destination_0;
  }
  protoOf(SealedClassSerializer).pd = function () {
    var tmp0 = this.ee_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, SealedClassSerializer$_get_descriptor_$ref_m511rz(), null);
    return tmp0.l1();
  };
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.pd().me()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function serializer(_this__u8e3s4) {
    return StringSerializer_getInstance();
  }
  function serializer_0(_this__u8e3s4) {
    return CharSerializer_getInstance();
  }
  function CharArraySerializer() {
    return CharArraySerializer_getInstance();
  }
  function serializer_1(_this__u8e3s4) {
    return DoubleSerializer_getInstance();
  }
  function DoubleArraySerializer() {
    return DoubleArraySerializer_getInstance();
  }
  function serializer_2(_this__u8e3s4) {
    return FloatSerializer_getInstance();
  }
  function FloatArraySerializer() {
    return FloatArraySerializer_getInstance();
  }
  function serializer_3(_this__u8e3s4) {
    return LongSerializer_getInstance();
  }
  function LongArraySerializer() {
    return LongArraySerializer_getInstance();
  }
  function serializer_4(_this__u8e3s4) {
    return ULongSerializer_getInstance();
  }
  function ULongArraySerializer() {
    return ULongArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return UIntSerializer_getInstance();
  }
  function UIntArraySerializer() {
    return UIntArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UShortSerializer_getInstance();
  }
  function UShortArraySerializer() {
    return UShortArraySerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_10(_this__u8e3s4) {
    return UByteSerializer_getInstance();
  }
  function UByteArraySerializer() {
    return UByteArraySerializer_getInstance();
  }
  function serializer_11(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_12(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function NothingSerializer() {
    return NothingSerializer_getInstance();
  }
  function serializer_13(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function serializer_14(_this__u8e3s4) {
    return InstantSerializer_getInstance();
  }
  function serializer_15(_this__u8e3s4) {
    return UuidSerializer_getInstance();
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.ne_1 = original;
    this.oe_1 = kClass;
    this.pe_1 = this.ne_1.ke() + '<' + this.oe_1.f6() + '>';
  }
  protoOf(ContextDescriptor).ke = function () {
    return this.pe_1;
  };
  protoOf(ContextDescriptor).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.ne_1, another.ne_1) && another.oe_1.equals(this.oe_1);
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.oe_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.pe_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + toString(this.oe_1) + ', original: ' + toString(this.ne_1) + ')';
  };
  protoOf(ContextDescriptor).qe = function () {
    return this.ne_1.qe();
  };
  protoOf(ContextDescriptor).me = function () {
    return this.ne_1.me();
  };
  protoOf(ContextDescriptor).re = function () {
    return this.ne_1.re();
  };
  protoOf(ContextDescriptor).se = function (index) {
    return this.ne_1.se(index);
  };
  protoOf(ContextDescriptor).te = function (index) {
    return this.ne_1.te(index);
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new elementDescriptors$$inlined$Iterable$1(_this__u8e3s4);
  }
  function elementDescriptors$1($this_elementDescriptors) {
    this.ve_1 = $this_elementDescriptors;
    this.ue_1 = $this_elementDescriptors.re();
  }
  protoOf(elementDescriptors$1).m = function () {
    return this.ue_1 > 0;
  };
  protoOf(elementDescriptors$1).n = function () {
    var tmp = this.ve_1.re();
    var _unary__edvuaz = this.ue_1;
    this.ue_1 = _unary__edvuaz - 1 | 0;
    return this.ve_1.te(tmp - _unary__edvuaz | 0);
  };
  function elementDescriptors$$inlined$Iterable$1($this_elementDescriptors) {
    this.we_1 = $this_elementDescriptors;
  }
  protoOf(elementDescriptors$$inlined$Iterable$1).l = function () {
    return new elementDescriptors$1(this.we_1);
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.require' call
    if (!!isBlank(serialName)) {
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!!equals(kind, CLASS_getInstance())) {
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.wd_1.o(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.td_1 = serialName;
    this.ud_1 = false;
    this.vd_1 = emptyList();
    this.wd_1 = ArrayList_init_$Create$();
    this.xd_1 = HashSet_init_$Create$();
    this.yd_1 = ArrayList_init_$Create$();
    this.zd_1 = ArrayList_init_$Create$();
    this.ae_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).xe = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    if (!this.xd_1.g(elementName)) {
      var message = "Element with name '" + elementName + "' is already registered in " + this.td_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.wd_1.g(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.yd_1.g(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.zd_1.g(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ae_1.g(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).be = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.xe(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.xe.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    var tmp0 = $this.jf_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp(), null);
    return tmp0.l1();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.if_1);
    };
  }
  function SerialDescriptorImpl$_get__hashCode_$ref_2v7wzp() {
    return function (p0) {
      return _get__hashCode__tgwhef(p0);
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ye_1 = serialName;
    this.ze_1 = kind;
    this.af_1 = elementsCount;
    this.bf_1 = builder.vd_1;
    this.cf_1 = toHashSet(builder.wd_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.wd_1;
    tmp.df_1 = copyToArray(this_0);
    this.ef_1 = compactArray(builder.yd_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.zd_1;
    tmp_0.ff_1 = copyToArray(this_1);
    this.gf_1 = toBooleanArray(builder.ae_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.df_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.l();
    while (_iterator__ex2g4s.m()) {
      var item = _iterator__ex2g4s.n();
      var tmp$ret$2 = to(item.b9_1, item.a9_1);
      destination.g(tmp$ret$2);
    }
    tmp_1.hf_1 = toMap(destination);
    this.if_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.jf_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).ke = function () {
    return this.ye_1;
  };
  protoOf(SerialDescriptorImpl).qe = function () {
    return this.ze_1;
  };
  protoOf(SerialDescriptorImpl).re = function () {
    return this.af_1;
  };
  protoOf(SerialDescriptorImpl).kf = function () {
    return this.cf_1;
  };
  protoOf(SerialDescriptorImpl).se = function (index) {
    return getChecked(this.df_1, index);
  };
  protoOf(SerialDescriptorImpl).te = function (index) {
    return getChecked(this.ef_1, index);
  };
  protoOf(SerialDescriptorImpl).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ke() === other.ke())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.if_1, other.if_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.re() === other.re())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.re();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.te(index).ke() === other.te(index).ke())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.te(index).qe(), other.te(index).qe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(SerialDescriptorImpl).hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  protoOf(SerialDescriptorImpl).toString = function () {
    return toStringImpl(this);
  };
  function buildSerialDescriptor$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  var BOOLEAN_instance;
  function BOOLEAN_getInstance() {
    if (BOOLEAN_instance == null)
      new BOOLEAN();
    return BOOLEAN_instance;
  }
  function BYTE() {
    BYTE_instance = this;
    PrimitiveKind.call(this);
  }
  var BYTE_instance;
  function BYTE_getInstance() {
    if (BYTE_instance == null)
      new BYTE();
    return BYTE_instance;
  }
  function CHAR() {
    CHAR_instance = this;
    PrimitiveKind.call(this);
  }
  var CHAR_instance;
  function CHAR_getInstance() {
    if (CHAR_instance == null)
      new CHAR();
    return CHAR_instance;
  }
  function SHORT() {
    SHORT_instance = this;
    PrimitiveKind.call(this);
  }
  var SHORT_instance;
  function SHORT_getInstance() {
    if (SHORT_instance == null)
      new SHORT();
    return SHORT_instance;
  }
  function INT() {
    INT_instance = this;
    PrimitiveKind.call(this);
  }
  var INT_instance;
  function INT_getInstance() {
    if (INT_instance == null)
      new INT();
    return INT_instance;
  }
  function LONG() {
    LONG_instance = this;
    PrimitiveKind.call(this);
  }
  var LONG_instance;
  function LONG_getInstance() {
    if (LONG_instance == null)
      new LONG();
    return LONG_instance;
  }
  function FLOAT() {
    FLOAT_instance = this;
    PrimitiveKind.call(this);
  }
  var FLOAT_instance;
  function FLOAT_getInstance() {
    if (FLOAT_instance == null)
      new FLOAT();
    return FLOAT_instance;
  }
  function DOUBLE() {
    DOUBLE_instance = this;
    PrimitiveKind.call(this);
  }
  var DOUBLE_instance;
  function DOUBLE_getInstance() {
    if (DOUBLE_instance == null)
      new DOUBLE();
    return DOUBLE_instance;
  }
  function STRING() {
    STRING_instance = this;
    PrimitiveKind.call(this);
  }
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  var SEALED_instance;
  function SEALED_getInstance() {
    if (SEALED_instance == null)
      new SEALED();
    return SEALED_instance;
  }
  function OPEN() {
    OPEN_instance = this;
    PolymorphicKind.call(this);
  }
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  function CONTEXTUAL() {
    CONTEXTUAL_instance = this;
    SerialKind.call(this);
  }
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  protoOf(SerialKind).toString = function () {
    return ensureNotNull(getKClassFromExpression(this).f6());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  var CLASS_instance;
  function CLASS_getInstance() {
    if (CLASS_instance == null)
      new CLASS();
    return CLASS_instance;
  }
  function LIST() {
    LIST_instance = this;
    StructureKind.call(this);
  }
  var LIST_instance;
  function LIST_getInstance() {
    if (LIST_instance == null)
      new LIST();
    return LIST_instance;
  }
  function OBJECT() {
    OBJECT_instance = this;
    StructureKind.call(this);
  }
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  function AbstractPolymorphicSerializer() {
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.lf_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).pd = function () {
    return this.lf_1;
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.mf_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).pd = function () {
    return this.mf_1;
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function InstantSerializer() {
    InstantSerializer_instance = this;
    this.nf_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Instant', STRING_getInstance());
  }
  protoOf(InstantSerializer).pd = function () {
    return this.nf_1;
  };
  var InstantSerializer_instance;
  function InstantSerializer_getInstance() {
    if (InstantSerializer_instance == null)
      new InstantSerializer();
    return InstantSerializer_instance;
  }
  function UuidSerializer() {
    UuidSerializer_instance = this;
    this.of_1 = new PrimitiveSerialDescriptor_0('kotlin.uuid.Uuid', STRING_getInstance());
  }
  protoOf(UuidSerializer).pd = function () {
    return this.of_1;
  };
  var UuidSerializer_instance;
  function UuidSerializer_getInstance() {
    if (UuidSerializer_instance == null)
      new UuidSerializer();
    return UuidSerializer_instance;
  }
  function CachedNames() {
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.pf_1 = elementDescriptor;
    this.qf_1 = 1;
  }
  protoOf(ListLikeDescriptor).qe = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).re = function () {
    return this.qf_1;
  };
  protoOf(ListLikeDescriptor).se = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).te = function (index) {
    // Inline function 'kotlin.require' call
    if (!(index >= 0)) {
      var message = 'Illegal index ' + index + ', ' + this.ke() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.pf_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.pf_1, other.pf_1) && this.ke() === other.ke())
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.pf_1), 31) + getStringHashCode(this.ke()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.ke() + '(' + toString(this.pf_1) + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.tf_1 = primitive.ke() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).ke = function () {
    return this.tf_1;
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.uf_1 = elementSerializer;
  }
  function AbstractCollectionSerializer() {
  }
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.wf_1 = new PrimitiveArrayDescriptor(primitiveSerializer.pd());
  }
  protoOf(PrimitiveArraySerializer).pd = function () {
    return this.wf_1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.jg_1 = true;
  }
  protoOf(InlineClassDescriptor).hashCode = function () {
    return imul(protoOf(PluginGeneratedSerialDescriptor).hashCode.call(this), 31);
  };
  protoOf(InlineClassDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof InlineClassDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ke() === other.ke())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(other.jg_1 && contentEquals(this.wg(), other.wg()))) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.re() === other.re())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.re();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.te(index).ke() === other.te(index).ke())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.te(index).qe(), other.te(index).qe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  function InlinePrimitiveDescriptor$1($primitiveSerializer) {
    this.yg_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).zg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.yg_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).pd = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.bh_1 = OBJECT_getInstance();
    this.ch_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).qe = function () {
    return this.bh_1;
  };
  protoOf(NothingSerialDescriptor).ke = function () {
    return this.ch_1;
  };
  protoOf(NothingSerialDescriptor).re = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).se = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).te = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.ch_1) + imul(31, this.bh_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.dh_1 = serializer;
    this.eh_1 = new SerialDescriptorForNullable(this.dh_1.pd());
  }
  protoOf(NullableSerializer).pd = function () {
    return this.eh_1;
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.dh_1, other.dh_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.dh_1);
  };
  function SerialDescriptorForNullable(original) {
    this.fh_1 = original;
    this.gh_1 = this.fh_1.ke() + '?';
    this.hh_1 = cachedSerialNames(this.fh_1);
  }
  protoOf(SerialDescriptorForNullable).ke = function () {
    return this.gh_1;
  };
  protoOf(SerialDescriptorForNullable).kf = function () {
    return this.hh_1;
  };
  protoOf(SerialDescriptorForNullable).me = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.fh_1, other.fh_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return toString(this.fh_1) + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.fh_1), 31);
  };
  protoOf(SerialDescriptorForNullable).qe = function () {
    return this.fh_1.qe();
  };
  protoOf(SerialDescriptorForNullable).re = function () {
    return this.fh_1.re();
  };
  protoOf(SerialDescriptorForNullable).se = function (index) {
    return this.fh_1.se(index);
  };
  protoOf(SerialDescriptorForNullable).te = function (index) {
    return this.fh_1.te(index);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.vd_1 = this$0.jh_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer$_get_descriptor_$ref_7z4xb6() {
    return function (p0) {
      return p0.pd();
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.ih_1 = objectInstance;
    this.jh_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.kh_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).pd = function () {
    var tmp0 = this.kh_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('descriptor', 1, tmp, ObjectSerializer$_get_descriptor_$ref_7z4xb6(), null);
    return tmp0.l1();
  };
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(_this__u8e3s4 == null || _this__u8e3s4.h1())) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.kf();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.re());
    var inductionVariable = 0;
    var last = _this__u8e3s4.re();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.se(i);
        result.g(element);
      }
       while (inductionVariable < last);
    return result;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function _init_properties_Platform_common_kt__3qzecs() {
    if (!properties_initialized_Platform_common_kt_i7q4ty) {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_DESCRIPTOR_ARRAY = [];
    }
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp0 = $this.tg_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('childSerializers', 1, tmp, PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca(), null);
    return tmp0.l1();
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp0 = $this.vg_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('_hashCode', 1, tmp, PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz(), null);
    return tmp0.l1();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.og_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.og_1[i];
        indices.d3(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lg_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zg();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$_get_childSerializers_$ref_e7suca() {
    return function (p0) {
      return _get_childSerializers__7vnyfa(p0);
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.lg_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ah();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
        var inductionVariable = 0;
        var last = tmp1_safe_receiver.length;
        while (inductionVariable < last) {
          var item = tmp1_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          var tmp$ret$0 = item.pd();
          destination.g(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka() {
    return function (p0) {
      return p0.wg();
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.wg());
    };
  }
  function PluginGeneratedSerialDescriptor$_get__hashCode_$ref_cmj4vz() {
    return function (p0) {
      return _get__hashCode__tgwhef_0(p0);
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.kg_1 = serialName;
    this.lg_1 = generatedSerializer;
    this.mg_1 = elementsCount;
    this.ng_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.mg_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.og_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.mg_1;
    tmp_3.pg_1 = Array(size);
    this.qg_1 = null;
    this.rg_1 = booleanArray(this.mg_1);
    this.sg_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.tg_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.ug_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.vg_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).ke = function () {
    return this.kg_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).re = function () {
    return this.mg_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).qe = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).kf = function () {
    return this.sg_1.p1();
  };
  protoOf(PluginGeneratedSerialDescriptor).wg = function () {
    var tmp0 = this.ug_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('typeParameterDescriptors', 1, tmp, PluginGeneratedSerialDescriptor$_get_typeParameterDescriptors_$ref_jk3pka(), null);
    return tmp0.l1();
  };
  protoOf(PluginGeneratedSerialDescriptor).xg = function (name, isOptional) {
    this.ng_1 = this.ng_1 + 1 | 0;
    this.og_1[this.ng_1] = name;
    this.rg_1[this.ng_1] = isOptional;
    this.pg_1[this.ng_1] = null;
    if (this.ng_1 === (this.mg_1 - 1 | 0)) {
      this.sg_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).te = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).pd();
  };
  protoOf(PluginGeneratedSerialDescriptor).se = function (index) {
    return getChecked(this.og_1, index);
  };
  protoOf(PluginGeneratedSerialDescriptor).equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.serialization.internal.equalsImpl' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ke() === other.ke())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!contentEquals(this.wg(), other.wg())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.re() === other.re())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.re();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.te(index).ke() === other.te(index).ke())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.te(index).qe(), other.te(index).qe())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(PluginGeneratedSerialDescriptor).hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  protoOf(PluginGeneratedSerialDescriptor).toString = function () {
    return toStringImpl(this);
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.ke());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var _iterator__ex2g4s = elementDescriptors.l();
    while (_iterator__ex2g4s.m()) {
      var element = _iterator__ex2g4s.n();
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = element.ke();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var _iterator__ex2g4s_0 = elementDescriptors.l();
    while (_iterator__ex2g4s_0.m()) {
      var element_0 = _iterator__ex2g4s_0.n();
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver_0 = element_0.qe();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function toStringImpl(_this__u8e3s4) {
    var tmp = until(0, _this__u8e3s4.re());
    var tmp_0 = _this__u8e3s4.ke() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, toStringImpl$lambda(_this__u8e3s4));
  }
  function toStringImpl$lambda($this_toStringImpl) {
    return function (i) {
      return $this_toStringImpl.se(i) + ': ' + $this_toStringImpl.te(i).ke();
    };
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    _init_properties_PluginHelperInterfaces_kt__xgvzfp();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function _init_properties_PluginHelperInterfaces_kt__xgvzfp() {
    if (!properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      EMPTY_SERIALIZER_ARRAY = [];
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(Companion_getInstance()));
  }
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(DoubleCompanionObject_instance));
  }
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(FloatCompanionObject_instance));
  }
  var FloatArraySerializer_instance;
  function FloatArraySerializer_getInstance() {
    if (FloatArraySerializer_instance == null)
      new FloatArraySerializer_0();
    return FloatArraySerializer_instance;
  }
  function LongArraySerializer_0() {
    LongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_3(Companion_getInstance_0()));
  }
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function ULongArraySerializer_0() {
    ULongArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(Companion_getInstance_1()));
  }
  var ULongArraySerializer_instance;
  function ULongArraySerializer_getInstance() {
    if (ULongArraySerializer_instance == null)
      new ULongArraySerializer_0();
    return ULongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(IntCompanionObject_instance));
  }
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function UIntArraySerializer_0() {
    UIntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(Companion_getInstance_2()));
  }
  var UIntArraySerializer_instance;
  function UIntArraySerializer_getInstance() {
    if (UIntArraySerializer_instance == null)
      new UIntArraySerializer_0();
    return UIntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(ShortCompanionObject_instance));
  }
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function UShortArraySerializer_0() {
    UShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_8(Companion_getInstance_3()));
  }
  var UShortArraySerializer_instance;
  function UShortArraySerializer_getInstance() {
    if (UShortArraySerializer_instance == null)
      new UShortArraySerializer_0();
    return UShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_9(ByteCompanionObject_instance));
  }
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function UByteArraySerializer_0() {
    UByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_10(Companion_getInstance_4()));
  }
  var UByteArraySerializer_instance;
  function UByteArraySerializer_getInstance() {
    if (UByteArraySerializer_instance == null)
      new UByteArraySerializer_0();
    return UByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_11(BooleanCompanionObject_instance));
  }
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function get_BUILTIN_SERIALIZERS() {
    _init_properties_Primitives_kt__k0eto4();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.lh_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).pd = function () {
    return this.lh_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkNameIsNotAPrimitive(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor ' + $this.mh_1 + ' does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.mh_1 = serialName;
    this.nh_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).ke = function () {
    return this.mh_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).qe = function () {
    return this.nh_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).re = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).se = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).te = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.mh_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.mh_1 === other.mh_1 && equals(this.nh_1, other.nh_1))
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.mh_1) + imul(31, this.nh_1.hashCode()) | 0;
  };
  function checkNameIsNotAPrimitive(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var values = get_BUILTIN_SERIALIZERS().q1();
    var _iterator__ex2g4s = values.l();
    while (_iterator__ex2g4s.m()) {
      var primitive = _iterator__ex2g4s.n();
      var primitiveName = primitive.pd().ke();
      if (serialName === primitiveName) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exists ' + getKClassFromExpression(primitive).f6() + '.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.oh_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).pd = function () {
    return this.oh_1;
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.ph_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).pd = function () {
    return this.ph_1;
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.qh_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).pd = function () {
    return this.qh_1;
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.rh_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).pd = function () {
    return this.rh_1;
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.sh_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).pd = function () {
    return this.sh_1;
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.th_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).pd = function () {
    return this.th_1;
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.uh_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).pd = function () {
    return this.uh_1;
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.vh_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).pd = function () {
    return this.vh_1;
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.wh_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).pd = function () {
    return this.wh_1.pd();
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = initBuiltins();
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.xh_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_3(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).pd = function () {
    return this.xh_1;
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.yh_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).pd = function () {
    return this.yh_1;
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.zh_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).pd = function () {
    return this.zh_1;
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.ai_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_9(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).pd = function () {
    return this.ai_1;
  };
  var UByteSerializer_instance;
  function UByteSerializer_getInstance() {
    if (UByteSerializer_instance == null)
      new UByteSerializer();
    return UByteSerializer_instance;
  }
  function SerializableWith() {
  }
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4).toString());
    return _this__u8e3s4[index];
  }
  function initBuiltins() {
    return mapOf([to(PrimitiveClasses_getInstance().y6(), serializer(StringCompanionObject_instance)), to(getKClass(Char), serializer_0(Companion_getInstance())), to(PrimitiveClasses_getInstance().b7(), CharArraySerializer()), to(PrimitiveClasses_getInstance().w6(), serializer_1(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().h7(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().v6(), serializer_2(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().g7(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().f7(), LongArraySerializer()), to(getKClass(ULong), serializer_4(Companion_getInstance_1())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().t6(), serializer_5(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().e7(), IntArraySerializer()), to(getKClass(UInt), serializer_6(Companion_getInstance_2())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().s6(), serializer_7(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().d7(), ShortArraySerializer()), to(getKClass(UShort), serializer_8(Companion_getInstance_3())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().r6(), serializer_9(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().c7(), ByteArraySerializer()), to(getKClass(UByte), serializer_10(Companion_getInstance_4())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().q6(), serializer_11(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().a7(), BooleanArraySerializer()), to(getKClass(Unit), serializer_12(Unit_instance)), to(PrimitiveClasses_getInstance().p6(), NothingSerializer()), to(getKClass(Duration), serializer_13(Companion_getInstance_5())), to(getKClass(Instant), serializer_14(Companion_getInstance_6())), to(getKClass(Uuid), serializer_15(Companion_getInstance_7()))]);
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).me = get_isNullable;
  protoOf(ListLikeDescriptor).me = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).me = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).ah = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).me = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).me = get_isNullable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PolymorphicSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = STRING_getInstance;
  _.$_$.d = StringSerializer_getInstance;
  _.$_$.e = get_nullable;
  _.$_$.f = PrimitiveSerialDescriptor;
  _.$_$.g = typeParametersSerializers;
  _.$_$.h = GeneratedSerializer;
  _.$_$.i = PluginGeneratedSerialDescriptor;
  _.$_$.j = KSerializer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core.js.map
