(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z2;
  var interfaceMeta = kotlin_kotlin.$_$.v2;
  var setMetadataFor = kotlin_kotlin.$_$.a3;
  var asList = kotlin_kotlin.$_$.n1;
  var objectCreate = kotlin_kotlin.$_$.x2;
  var StringCompanionObject_instance = kotlin_kotlin.$_$.a1;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var emptyList = kotlin_kotlin.$_$.t1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.e4;
  var classMeta = kotlin_kotlin.$_$.o2;
  var KProperty1 = kotlin_kotlin.$_$.d3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.s2;
  var THROW_CCE = kotlin_kotlin.$_$.s3;
  var Entry = kotlin_kotlin.$_$.l1;
  var isInterface = kotlin_kotlin.$_$.w2;
  var VOID = kotlin_kotlin.$_$.c;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var zip = kotlin_kotlin.$_$.j2;
  var toMap = kotlin_kotlin.$_$.h2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.k;
  var toString = kotlin_kotlin.$_$.b3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.n;
  var mapCapacity = kotlin_kotlin.$_$.b2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var equals = kotlin_kotlin.$_$.q2;
  var getStringHashCode = kotlin_kotlin.$_$.t2;
  var isBlank = kotlin_kotlin.$_$.i3;
  var toList = kotlin_kotlin.$_$.g2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.f;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.i;
  var toHashSet = kotlin_kotlin.$_$.f2;
  var copyToArray = kotlin_kotlin.$_$.s1;
  var toBooleanArray = kotlin_kotlin.$_$.e2;
  var withIndex = kotlin_kotlin.$_$.i2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.o1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.e;
  var to = kotlin_kotlin.$_$.g4;
  var lazy_0 = kotlin_kotlin.$_$.f4;
  var contentEquals = kotlin_kotlin.$_$.p1;
  var until = kotlin_kotlin.$_$.c3;
  var joinToString = kotlin_kotlin.$_$.x1;
  var objectMeta = kotlin_kotlin.$_$.y2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.d4;
  var hashCode = kotlin_kotlin.$_$.u2;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.g;
  var fillArrayVal = kotlin_kotlin.$_$.r2;
  var booleanArray = kotlin_kotlin.$_$.k2;
  var emptyMap = kotlin_kotlin.$_$.u1;
  var contentHashCode = kotlin_kotlin.$_$.q1;
  var Companion_getInstance = kotlin_kotlin.$_$.d1;
  var DoubleCompanionObject_instance = kotlin_kotlin.$_$.w;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.x;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.e1;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.i1;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.y;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.h1;
  var ShortCompanionObject_instance = kotlin_kotlin.$_$.z;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.j1;
  var ByteCompanionObject_instance = kotlin_kotlin.$_$.v;
  var Companion_getInstance_4 = kotlin_kotlin.$_$.g1;
  var BooleanCompanionObject_instance = kotlin_kotlin.$_$.u;
  var trimIndent = kotlin_kotlin.$_$.o3;
  var equals_0 = kotlin_kotlin.$_$.g3;
  var charSequenceLength = kotlin_kotlin.$_$.n2;
  var charSequenceGet = kotlin_kotlin.$_$.m2;
  var toString_0 = kotlin_kotlin.$_$.q;
  var titlecase = kotlin_kotlin.$_$.m3;
  var isLowerCase = kotlin_kotlin.$_$.j3;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b1;
  var Char = kotlin_kotlin.$_$.q3;
  var getKClass = kotlin_kotlin.$_$.b;
  var Long = kotlin_kotlin.$_$.r3;
  var ULong = kotlin_kotlin.$_$.y3;
  var ULongArray = kotlin_kotlin.$_$.x3;
  var UInt = kotlin_kotlin.$_$.w3;
  var UIntArray = kotlin_kotlin.$_$.v3;
  var UShort = kotlin_kotlin.$_$.a4;
  var UShortArray = kotlin_kotlin.$_$.z3;
  var UByte = kotlin_kotlin.$_$.u3;
  var UByteArray = kotlin_kotlin.$_$.t3;
  var Unit = kotlin_kotlin.$_$.b4;
  var Duration = kotlin_kotlin.$_$.p3;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.c1;
  var mapOf = kotlin_kotlin.$_$.c2;
  var get_indices = kotlin_kotlin.$_$.w1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KSerializer, 'KSerializer', interfaceMeta);
  setMetadataFor(AbstractPolymorphicSerializer, 'AbstractPolymorphicSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(PolymorphicSerializer, 'PolymorphicSerializer', classMeta, AbstractPolymorphicSerializer);
  setMetadataFor(_no_name_provided__qut3iv, VOID, classMeta);
  setMetadataFor(SealedClassSerializer, 'SealedClassSerializer', classMeta, AbstractPolymorphicSerializer);
  function get_isNullable() {
    return false;
  }
  setMetadataFor(SerialDescriptor, 'SerialDescriptor', interfaceMeta);
  setMetadataFor(ContextDescriptor, 'ContextDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(elementDescriptors$1$1, VOID, classMeta);
  setMetadataFor(_no_name_provided__qut3iv_0, VOID, classMeta);
  setMetadataFor(ClassSerialDescriptorBuilder, 'ClassSerialDescriptorBuilder', classMeta);
  setMetadataFor(CachedNames, 'CachedNames', interfaceMeta);
  setMetadataFor(SerialDescriptorImpl, 'SerialDescriptorImpl', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(SerialKind, 'SerialKind', classMeta);
  setMetadataFor(CONTEXTUAL, 'CONTEXTUAL', objectMeta, SerialKind);
  setMetadataFor(PrimitiveKind, 'PrimitiveKind', classMeta, SerialKind);
  setMetadataFor(BOOLEAN, 'BOOLEAN', objectMeta, PrimitiveKind);
  setMetadataFor(BYTE, 'BYTE', objectMeta, PrimitiveKind);
  setMetadataFor(CHAR, 'CHAR', objectMeta, PrimitiveKind);
  setMetadataFor(SHORT, 'SHORT', objectMeta, PrimitiveKind);
  setMetadataFor(INT, 'INT', objectMeta, PrimitiveKind);
  setMetadataFor(LONG, 'LONG', objectMeta, PrimitiveKind);
  setMetadataFor(FLOAT, 'FLOAT', objectMeta, PrimitiveKind);
  setMetadataFor(DOUBLE, 'DOUBLE', objectMeta, PrimitiveKind);
  setMetadataFor(STRING, 'STRING', objectMeta, PrimitiveKind);
  setMetadataFor(StructureKind, 'StructureKind', classMeta, SerialKind);
  setMetadataFor(CLASS, 'CLASS', objectMeta, StructureKind);
  setMetadataFor(LIST, 'LIST', objectMeta, StructureKind);
  setMetadataFor(OBJECT, 'OBJECT', objectMeta, StructureKind);
  setMetadataFor(PolymorphicKind, 'PolymorphicKind', classMeta, SerialKind);
  setMetadataFor(SEALED, 'SEALED', objectMeta, PolymorphicKind);
  setMetadataFor(OPEN, 'OPEN', objectMeta, PolymorphicKind);
  setMetadataFor(NothingSerializer_0, 'NothingSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DurationSerializer, 'DurationSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ListLikeDescriptor, 'ListLikeDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(PrimitiveArrayDescriptor, 'PrimitiveArrayDescriptor', classMeta, ListLikeDescriptor);
  setMetadataFor(AbstractCollectionSerializer, 'AbstractCollectionSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CollectionLikeSerializer, 'CollectionLikeSerializer', classMeta, AbstractCollectionSerializer);
  setMetadataFor(PrimitiveArraySerializer, 'PrimitiveArraySerializer', classMeta, CollectionLikeSerializer);
  setMetadataFor(PluginGeneratedSerialDescriptor, 'PluginGeneratedSerialDescriptor', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(InlineClassDescriptor, 'InlineClassDescriptor', classMeta, PluginGeneratedSerialDescriptor);
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  setMetadataFor(GeneratedSerializer, 'GeneratedSerializer', interfaceMeta, VOID, [KSerializer]);
  setMetadataFor(InlinePrimitiveDescriptor$1, VOID, classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(NothingSerialDescriptor, 'NothingSerialDescriptor', objectMeta, VOID, [SerialDescriptor]);
  setMetadataFor(NullableSerializer, 'NullableSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(SerialDescriptorForNullable, 'SerialDescriptorForNullable', classMeta, VOID, [SerialDescriptor, CachedNames]);
  setMetadataFor(ObjectSerializer, 'ObjectSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(CharArraySerializer_0, 'CharArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(DoubleArraySerializer_0, 'DoubleArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(FloatArraySerializer_0, 'FloatArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(LongArraySerializer_0, 'LongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ULongArraySerializer_0, 'ULongArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(IntArraySerializer_0, 'IntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UIntArraySerializer_0, 'UIntArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ShortArraySerializer_0, 'ShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UShortArraySerializer_0, 'UShortArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(ByteArraySerializer_0, 'ByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(UByteArraySerializer_0, 'UByteArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(BooleanArraySerializer_0, 'BooleanArraySerializer', objectMeta, PrimitiveArraySerializer, [KSerializer, PrimitiveArraySerializer]);
  setMetadataFor(StringSerializer, 'StringSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(CharSerializer, 'CharSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(DoubleSerializer, 'DoubleSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(FloatSerializer, 'FloatSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(LongSerializer, 'LongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(IntSerializer, 'IntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ShortSerializer, 'ShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(ByteSerializer, 'ByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(BooleanSerializer, 'BooleanSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UnitSerializer, 'UnitSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(PrimitiveSerialDescriptor_0, 'PrimitiveSerialDescriptor', classMeta, VOID, [SerialDescriptor]);
  setMetadataFor(ULongSerializer, 'ULongSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UIntSerializer, 'UIntSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UShortSerializer, 'UShortSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(UByteSerializer, 'UByteSerializer', objectMeta, VOID, [KSerializer]);
  setMetadataFor(SerializableWith, 'SerializableWith', classMeta, VOID, VOID, VOID, 0);
  //endregion
  function KSerializer() {
  }
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.vc_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, objectCreate(protoOf(PolymorphicSerializer)));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.fd('type', serializer(StringCompanionObject_instance).tc());
      $this$buildSerialDescriptor.fd('value', buildSerialDescriptor('kotlinx.serialization.Polymorphic<' + this$0.uc_1.h4() + '>', CONTEXTUAL_getInstance(), []));
      $this$buildSerialDescriptor.zc_1 = this$0.vc_1;
      return Unit_instance;
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0)), this$0.uc_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.uc_1 = baseClass;
    this.vc_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.wc_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  protoOf(PolymorphicSerializer).tc = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.wc_1;
    descriptor$factory();
    return this_0.f4();
  };
  protoOf(PolymorphicSerializer).toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.uc_1 + ')';
  };
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.tc();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.hd_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, objectCreate(protoOf(SealedClassSerializer)));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this$0.kd_1.p1().n();
      while (tmp0_iterator.u()) {
        var element = tmp0_iterator.v();
        // Inline function 'kotlinx.serialization.SealedClassSerializer.descriptor$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var name = element.q2();
        // Inline function 'kotlin.collections.component2' call
        var serializer = element.f4();
        $this$buildSerialDescriptor.fd(name, serializer.tc());
      }
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.fd('type', serializer(StringCompanionObject_instance).tc());
      var tmp = 'kotlinx.serialization.Sealed<' + this$0.gd_1.h4() + '>';
      var tmp_0 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor(tmp, tmp_0, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda(this$0));
      $this$buildSerialDescriptor.fd('value', elementDescriptor);
      $this$buildSerialDescriptor.zc_1 = this$0.hd_1;
      return Unit_instance;
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function _no_name_provided__qut3iv($this) {
    this.ld_1 = $this;
  }
  protoOf(_no_name_provided__qut3iv).md = function () {
    return this.ld_1.n();
  };
  protoOf(_no_name_provided__qut3iv).nd = function (element) {
    // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
    return element.f4().tc().od();
  };
  protoOf(_no_name_provided__qut3iv).pd = function (element) {
    return this.nd((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.gd_1 = baseClass;
    this.hd_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.id_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.gd_1.h4() + ' should be marked @Serializable');
    }
    this.jd_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.aggregate' call
    // Inline function 'kotlin.collections.groupingBy' call
    var this_0 = this.jd_1.p1();
    // Inline function 'kotlin.collections.aggregateTo' call
    var this_1 = new _no_name_provided__qut3iv(this_0);
    // Inline function 'kotlin.collections.mutableMapOf' call
    var destination = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = this_1.md();
    while (tmp0_iterator.u()) {
      var e = tmp0_iterator.v();
      var key = this_1.pd(e);
      var accumulator = destination.o1(key);
      // Inline function 'kotlin.collections.set' call
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      accumulator == null && !destination.m1(key);
      if (!(accumulator == null)) {
        // Inline function 'kotlin.error' call
        var message = "Multiple sealed subclasses of '" + this.gd_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.q2() + "', '" + e.q2() + "'");
        throw IllegalStateException_init_$Create$(toString(message));
      }
      destination.j1(key, e);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_0 = LinkedHashMap_init_$Create$_0(mapCapacity(destination.m()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_0 = destination.p1().n();
    while (tmp0_iterator_0.u()) {
      var element = tmp0_iterator_0.v();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_2 = element.q2();
      // Inline function 'kotlinx.serialization.SealedClassSerializer.<anonymous>' call
      var tmp$ret$7 = element.f4().f4();
      destination_0.j1(tmp_2, tmp$ret$7);
    }
    tmp_1.kd_1 = destination_0;
  }
  protoOf(SealedClassSerializer).tc = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.id_1;
    descriptor$factory_0();
    return this_0.f4();
  };
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.tc();
    }, null);
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.tc().qd()) {
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
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.rd_1 = original;
    this.sd_1 = kClass;
    this.td_1 = this.rd_1.od() + '<' + this.sd_1.h4() + '>';
  }
  protoOf(ContextDescriptor).ud = function () {
    return this.rd_1.ud();
  };
  protoOf(ContextDescriptor).qd = function () {
    return this.rd_1.qd();
  };
  protoOf(ContextDescriptor).vd = function () {
    return this.rd_1.vd();
  };
  protoOf(ContextDescriptor).wd = function (index) {
    return this.rd_1.wd(index);
  };
  protoOf(ContextDescriptor).xd = function (index) {
    return this.rd_1.xd(index);
  };
  protoOf(ContextDescriptor).od = function () {
    return this.td_1;
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
    return equals(this.rd_1, another.rd_1) ? another.sd_1.equals(this.sd_1) : false;
  };
  protoOf(ContextDescriptor).hashCode = function () {
    var result = this.sd_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.td_1) | 0;
    return result;
  };
  protoOf(ContextDescriptor).toString = function () {
    return 'ContextDescriptor(kClass: ' + this.sd_1 + ', original: ' + this.rd_1 + ')';
  };
  function SerialDescriptor() {
  }
  function get_elementDescriptors(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.zd_1 = $this_elementDescriptors;
    this.yd_1 = $this_elementDescriptors.ud();
  }
  protoOf(elementDescriptors$1$1).u = function () {
    return this.yd_1 > 0;
  };
  protoOf(elementDescriptors$1$1).v = function () {
    var tmp = this.zd_1.ud();
    var tmp1 = this.yd_1;
    this.yd_1 = tmp1 - 1 | 0;
    return this.zd_1.wd(tmp - tmp1 | 0);
  };
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.ae_1 = $this_elementDescriptors;
  }
  protoOf(_no_name_provided__qut3iv_0).n = function () {
    // Inline function 'kotlinx.serialization.descriptors.<get-elementDescriptors>.<anonymous>' call
    return new elementDescriptors$1$1(this.ae_1);
  };
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    var tmp;
    if (builder === VOID) {
      tmp = buildSerialDescriptor$lambda;
    } else {
      tmp = builder;
    }
    builder = tmp;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!equals(kind, CLASS_getInstance())) {
      // Inline function 'kotlinx.serialization.descriptors.buildSerialDescriptor.<anonymous>' call
      var message_0 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.ad_1.m(), toList(typeParameters), sdBuilder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.xc_1 = serialName;
    this.yc_1 = false;
    this.zc_1 = emptyList();
    this.ad_1 = ArrayList_init_$Create$();
    this.bd_1 = HashSet_init_$Create$();
    this.cd_1 = ArrayList_init_$Create$();
    this.dd_1 = ArrayList_init_$Create$();
    this.ed_1 = ArrayList_init_$Create$();
  }
  protoOf(ClassSerialDescriptorBuilder).be = function (elementName, descriptor, annotations, isOptional) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.bd_1.k(elementName)) {
      // Inline function 'kotlinx.serialization.descriptors.ClassSerialDescriptorBuilder.element.<anonymous>' call
      var message = "Element with name '" + elementName + "' is already registered in " + this.xc_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.plusAssign' call
    this.ad_1.k(elementName);
    // Inline function 'kotlin.collections.plusAssign' call
    this.cd_1.k(descriptor);
    // Inline function 'kotlin.collections.plusAssign' call
    this.dd_1.k(annotations);
    // Inline function 'kotlin.collections.plusAssign' call
    this.ed_1.k(isOptional);
  };
  protoOf(ClassSerialDescriptorBuilder).fd = function (elementName, descriptor, annotations, isOptional, $super) {
    annotations = annotations === VOID ? emptyList() : annotations;
    isOptional = isOptional === VOID ? false : isOptional;
    var tmp;
    if ($super === VOID) {
      this.be(elementName, descriptor, annotations, isOptional);
      tmp = Unit_instance;
    } else {
      tmp = $super.be.call(this, elementName, descriptor, annotations, isOptional);
    }
    return tmp;
  };
  function _get__hashCode__tgwhef($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.ne_1;
    _hashCode$factory();
    return this_0.f4();
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.me_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.xd(it) + ': ' + this$0.wd(it).od();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ce_1 = serialName;
    this.de_1 = kind;
    this.ee_1 = elementsCount;
    this.fe_1 = builder.zc_1;
    this.ge_1 = toHashSet(builder.ad_1);
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = builder.ad_1;
    tmp.he_1 = copyToArray(this_0);
    this.ie_1 = compactArray(builder.cd_1);
    var tmp_0 = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = builder.dd_1;
    tmp_0.je_1 = copyToArray(this_1);
    this.ke_1 = toBooleanArray(builder.ed_1);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    var this_2 = withIndex(this.he_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.n();
    while (tmp0_iterator.u()) {
      var item = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.name2Index.<anonymous>' call
      var tmp$ret$2 = to(item.f9_1, item.e9_1);
      destination.k(tmp$ret$2);
    }
    tmp_1.le_1 = toMap(destination);
    this.me_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ne_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  protoOf(SerialDescriptorImpl).od = function () {
    return this.ce_1;
  };
  protoOf(SerialDescriptorImpl).vd = function () {
    return this.de_1;
  };
  protoOf(SerialDescriptorImpl).ud = function () {
    return this.ee_1;
  };
  protoOf(SerialDescriptorImpl).oe = function () {
    return this.ge_1;
  };
  protoOf(SerialDescriptorImpl).xd = function (index) {
    return getChecked(this.he_1, index);
  };
  protoOf(SerialDescriptorImpl).wd = function (index) {
    return getChecked(this.ie_1, index);
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
      if (!(this.od() === other.od())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.descriptors.SerialDescriptorImpl.equals.<anonymous>' call
      if (!contentEquals(this.me_1, other.me_1)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ud() === other.ud())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ud();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wd(index).od() === other.wd(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wd(index).vd(), other.wd(index).vd())) {
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
    var tmp = until(0, this.ee_1);
    var tmp_0 = this.ce_1 + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, SerialDescriptorImpl$toString$lambda(this));
  };
  function PrimitiveSerialDescriptor(serialName, kind) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.text.isNotBlank' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!isBlank(serialName)) {
      // Inline function 'kotlinx.serialization.descriptors.PrimitiveSerialDescriptor.<anonymous>' call
      var message = 'Blank serial names are prohibited';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda($this$null) {
    return Unit_instance;
  }
  function _hashCode$factory() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef(receiver);
    }, null);
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
    return ensureNotNull(getKClassFromExpression(this).h4());
  };
  protoOf(SerialKind).hashCode = function () {
    return getStringHashCode(this.toString());
  };
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
  function AbstractPolymorphicSerializer() {
  }
  function NothingSerializer_0() {
    NothingSerializer_instance = this;
    this.pe_1 = NothingSerialDescriptor_getInstance();
  }
  protoOf(NothingSerializer_0).tc = function () {
    return this.pe_1;
  };
  var NothingSerializer_instance;
  function NothingSerializer_getInstance() {
    if (NothingSerializer_instance == null)
      new NothingSerializer_0();
    return NothingSerializer_instance;
  }
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.qe_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  protoOf(DurationSerializer).tc = function () {
    return this.qe_1;
  };
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  function ListLikeDescriptor(elementDescriptor) {
    this.re_1 = elementDescriptor;
    this.se_1 = 1;
  }
  protoOf(ListLikeDescriptor).vd = function () {
    return LIST_getInstance();
  };
  protoOf(ListLikeDescriptor).ud = function () {
    return this.se_1;
  };
  protoOf(ListLikeDescriptor).xd = function (index) {
    return index.toString();
  };
  protoOf(ListLikeDescriptor).wd = function (index) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index >= 0)) {
      // Inline function 'kotlinx.serialization.internal.ListLikeDescriptor.getElementDescriptor.<anonymous>' call
      var message = 'Illegal index ' + index + ', ' + this.od() + ' expects only non-negative indices';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.re_1;
  };
  protoOf(ListLikeDescriptor).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.re_1, other.re_1) ? this.od() === other.od() : false)
      return true;
    return false;
  };
  protoOf(ListLikeDescriptor).hashCode = function () {
    return imul(hashCode(this.re_1), 31) + getStringHashCode(this.od()) | 0;
  };
  protoOf(ListLikeDescriptor).toString = function () {
    return this.od() + '(' + this.re_1 + ')';
  };
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.ve_1 = primitive.od() + 'Array';
  }
  protoOf(PrimitiveArrayDescriptor).od = function () {
    return this.ve_1;
  };
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.we_1 = elementSerializer;
  }
  function AbstractCollectionSerializer() {
  }
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.ye_1 = new PrimitiveArrayDescriptor(primitiveSerializer.tc());
  }
  protoOf(PrimitiveArraySerializer).tc = function () {
    return this.ye_1;
  };
  function InlinePrimitiveDescriptor(name, primitiveSerializer) {
    return new InlineClassDescriptor(name, new InlinePrimitiveDescriptor$1(primitiveSerializer));
  }
  function InlineClassDescriptor(name, generatedSerializer) {
    PluginGeneratedSerialDescriptor.call(this, name, generatedSerializer, 1);
    this.lf_1 = true;
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
      if (!(this.od() === other.od())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.InlineClassDescriptor.equals.<anonymous>' call
      if (!(other.lf_1 ? contentEquals(this.yf(), other.yf()) : false)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ud() === other.ud())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ud();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wd(index).od() === other.wd(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wd(index).vd(), other.wd(index).vd())) {
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
    this.ag_1 = $primitiveSerializer;
  }
  protoOf(InlinePrimitiveDescriptor$1).bg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.ag_1];
  };
  protoOf(InlinePrimitiveDescriptor$1).tc = function () {
    var message = 'unsupported';
    throw IllegalStateException_init_$Create$(toString(message));
  };
  function error($this) {
    throw IllegalStateException_init_$Create$('Descriptor for type `kotlin.Nothing` does not have elements');
  }
  function NothingSerialDescriptor() {
    NothingSerialDescriptor_instance = this;
    this.dg_1 = OBJECT_getInstance();
    this.eg_1 = 'kotlin.Nothing';
  }
  protoOf(NothingSerialDescriptor).vd = function () {
    return this.dg_1;
  };
  protoOf(NothingSerialDescriptor).od = function () {
    return this.eg_1;
  };
  protoOf(NothingSerialDescriptor).ud = function () {
    return 0;
  };
  protoOf(NothingSerialDescriptor).xd = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).wd = function (index) {
    error(this);
  };
  protoOf(NothingSerialDescriptor).toString = function () {
    return 'NothingSerialDescriptor';
  };
  protoOf(NothingSerialDescriptor).equals = function (other) {
    return this === other;
  };
  protoOf(NothingSerialDescriptor).hashCode = function () {
    return getStringHashCode(this.eg_1) + imul(31, this.dg_1.hashCode()) | 0;
  };
  var NothingSerialDescriptor_instance;
  function NothingSerialDescriptor_getInstance() {
    if (NothingSerialDescriptor_instance == null)
      new NothingSerialDescriptor();
    return NothingSerialDescriptor_instance;
  }
  function NullableSerializer(serializer) {
    this.fg_1 = serializer;
    this.gg_1 = new SerialDescriptorForNullable(this.fg_1.tc());
  }
  protoOf(NullableSerializer).tc = function () {
    return this.gg_1;
  };
  protoOf(NullableSerializer).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NullableSerializer))
      THROW_CCE();
    if (!equals(this.fg_1, other.fg_1))
      return false;
    return true;
  };
  protoOf(NullableSerializer).hashCode = function () {
    return hashCode(this.fg_1);
  };
  function SerialDescriptorForNullable(original) {
    this.hg_1 = original;
    this.ig_1 = this.hg_1.od() + '?';
    this.jg_1 = cachedSerialNames(this.hg_1);
  }
  protoOf(SerialDescriptorForNullable).ud = function () {
    return this.hg_1.ud();
  };
  protoOf(SerialDescriptorForNullable).vd = function () {
    return this.hg_1.vd();
  };
  protoOf(SerialDescriptorForNullable).wd = function (index) {
    return this.hg_1.wd(index);
  };
  protoOf(SerialDescriptorForNullable).xd = function (index) {
    return this.hg_1.xd(index);
  };
  protoOf(SerialDescriptorForNullable).od = function () {
    return this.ig_1;
  };
  protoOf(SerialDescriptorForNullable).oe = function () {
    return this.jg_1;
  };
  protoOf(SerialDescriptorForNullable).qd = function () {
    return true;
  };
  protoOf(SerialDescriptorForNullable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.hg_1, other.hg_1))
      return false;
    return true;
  };
  protoOf(SerialDescriptorForNullable).toString = function () {
    return '' + this.hg_1 + '?';
  };
  protoOf(SerialDescriptorForNullable).hashCode = function () {
    return imul(hashCode(this.hg_1), 31);
  };
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.zc_1 = this$0.lg_1;
      return Unit_instance;
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0));
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.kg_1 = objectInstance;
    this.lg_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.mg_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  protoOf(ObjectSerializer).tc = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mg_1;
    descriptor$factory_1();
    return this_0.f4();
  };
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.tc();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    _init_properties_Platform_common_kt__3qzecs();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function cachedSerialNames(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.oe();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.ud());
    var inductionVariable = 0;
    var last = _this__u8e3s4.ud();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.plusAssign' call
        var element = _this__u8e3s4.xd(i);
        result.k(element);
      }
       while (inductionVariable < last);
    return result;
  }
  function compactArray(_this__u8e3s4) {
    _init_properties_Platform_common_kt__3qzecs();
    // Inline function 'kotlin.takeUnless' call
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    // Inline function 'kotlinx.serialization.internal.compactArray.<anonymous>' call
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4 == null ? true : _this__u8e3s4.q())) {
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
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.vf_1;
    childSerializers$factory();
    return this_0.f4();
  }
  function _get__hashCode__tgwhef_0($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.xf_1;
    _hashCode$factory_0();
    return this_0.f4();
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.qf_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var key = $this.qf_1[i];
        indices.j1(key, i);
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.nf_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bg();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.nf_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cg();
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
          // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.typeParameterDescriptors$delegate.<anonymous>.<anonymous>' call
          var tmp$ret$0 = item.tc();
          destination.k(tmp$ret$0);
        }
        tmp = destination;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.yf());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.xd(i) + ': ' + this$0.wd(i).od();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    generatedSerializer = generatedSerializer === VOID ? null : generatedSerializer;
    this.mf_1 = serialName;
    this.nf_1 = generatedSerializer;
    this.of_1 = elementsCount;
    this.pf_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.of_1;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = fillArrayVal(Array(tmp_1), null);
    while (tmp_0 < tmp_1) {
      tmp_2[tmp_0] = '[UNINITIALIZED]';
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.qf_1 = tmp_2;
    var tmp_3 = this;
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.of_1;
    tmp_3.rf_1 = fillArrayVal(Array(size), null);
    this.sf_1 = null;
    this.tf_1 = booleanArray(this.of_1);
    this.uf_1 = emptyMap();
    var tmp_4 = this;
    var tmp_5 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_4.vf_1 = lazy(tmp_5, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_6 = this;
    var tmp_7 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_6.wf_1 = lazy(tmp_7, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_8 = this;
    var tmp_9 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_8.xf_1 = lazy(tmp_9, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  protoOf(PluginGeneratedSerialDescriptor).od = function () {
    return this.mf_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).ud = function () {
    return this.of_1;
  };
  protoOf(PluginGeneratedSerialDescriptor).vd = function () {
    return CLASS_getInstance();
  };
  protoOf(PluginGeneratedSerialDescriptor).oe = function () {
    return this.uf_1.i1();
  };
  protoOf(PluginGeneratedSerialDescriptor).yf = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.wf_1;
    typeParameterDescriptors$factory();
    return this_0.f4();
  };
  protoOf(PluginGeneratedSerialDescriptor).zf = function (name, isOptional) {
    this.pf_1 = this.pf_1 + 1 | 0;
    this.qf_1[this.pf_1] = name;
    this.tf_1[this.pf_1] = isOptional;
    this.rf_1[this.pf_1] = null;
    if (this.pf_1 === (this.of_1 - 1 | 0)) {
      this.uf_1 = buildIndices(this);
    }
  };
  protoOf(PluginGeneratedSerialDescriptor).wd = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).tc();
  };
  protoOf(PluginGeneratedSerialDescriptor).xd = function (index) {
    return getChecked(this.qf_1, index);
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
      if (!(this.od() === other.od())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      // Inline function 'kotlinx.serialization.internal.PluginGeneratedSerialDescriptor.equals.<anonymous>' call
      if (!contentEquals(this.yf(), other.yf())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.ud() === other.ud())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.ud();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.wd(index).od() === other.wd(index).od())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.wd(index).vd(), other.wd(index).vd())) {
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
    var tmp = until(0, this.of_1);
    var tmp_0 = this.od() + '(';
    return joinToString(tmp, ', ', tmp_0, ')', VOID, VOID, PluginGeneratedSerialDescriptor$toString$lambda(this));
  };
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.od());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = elementDescriptors.n();
    while (tmp0_iterator.u()) {
      var element = tmp0_iterator.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash = accumulator;
      var tmp = imul(31, hash);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver = element.od();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      accumulator = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    var namesHash = accumulator;
    // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator_0 = 1;
    var tmp0_iterator_0 = elementDescriptors.n();
    while (tmp0_iterator_0.u()) {
      var element_0 = tmp0_iterator_0.v();
      // Inline function 'kotlinx.serialization.internal.elementsHashCodeBy.<anonymous>' call
      var hash_0 = accumulator_0;
      var tmp_0 = imul(31, hash_0);
      // Inline function 'kotlin.hashCode' call
      // Inline function 'kotlinx.serialization.internal.hashCodeImpl.<anonymous>' call
      var tmp0_safe_receiver_0 = element_0.vd();
      var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
      accumulator_0 = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    }
    var kindHash = accumulator_0;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.yf();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
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
    this.ng_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  protoOf(StringSerializer).tc = function () {
    return this.ng_1;
  };
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.og_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  protoOf(CharSerializer).tc = function () {
    return this.og_1;
  };
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.pg_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  protoOf(DoubleSerializer).tc = function () {
    return this.pg_1;
  };
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.qg_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  protoOf(FloatSerializer).tc = function () {
    return this.qg_1;
  };
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.rg_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  protoOf(LongSerializer).tc = function () {
    return this.rg_1;
  };
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.sg_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  protoOf(IntSerializer).tc = function () {
    return this.sg_1;
  };
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.tg_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  protoOf(ShortSerializer).tc = function () {
    return this.tg_1;
  };
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.ug_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  protoOf(ByteSerializer).tc = function () {
    return this.ug_1;
  };
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.vg_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  protoOf(BooleanSerializer).tc = function () {
    return this.vg_1;
  };
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.wg_1 = new ObjectSerializer('kotlin.Unit', Unit_instance);
  }
  protoOf(UnitSerializer).tc = function () {
    return this.wg_1.tc();
  };
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error_0($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.xg_1 = serialName;
    this.yg_1 = kind;
  }
  protoOf(PrimitiveSerialDescriptor_0).od = function () {
    return this.xg_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).vd = function () {
    return this.yg_1;
  };
  protoOf(PrimitiveSerialDescriptor_0).ud = function () {
    return 0;
  };
  protoOf(PrimitiveSerialDescriptor_0).xd = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).wd = function (index) {
    error_0(this);
  };
  protoOf(PrimitiveSerialDescriptor_0).toString = function () {
    return 'PrimitiveDescriptor(' + this.xg_1 + ')';
  };
  protoOf(PrimitiveSerialDescriptor_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PrimitiveSerialDescriptor_0))
      return false;
    if (this.xg_1 === other.xg_1 ? equals(this.yg_1, other.yg_1) : false)
      return true;
    return false;
  };
  protoOf(PrimitiveSerialDescriptor_0).hashCode = function () {
    return getStringHashCode(this.xg_1) + imul(31, this.yg_1.hashCode()) | 0;
  };
  function PrimitiveDescriptorSafe(serialName, kind) {
    _init_properties_Primitives_kt__k0eto4();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    _init_properties_Primitives_kt__k0eto4();
    var keys = get_BUILTIN_SERIALIZERS().i1();
    var tmp0_iterator = keys.n();
    while (tmp0_iterator.u()) {
      var primitive = tmp0_iterator.v();
      var simpleName = capitalize(ensureNotNull(primitive.h4()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    _init_properties_Primitives_kt__k0eto4();
    // Inline function 'kotlin.text.replaceFirstChar' call
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      // Inline function 'kotlinx.serialization.internal.capitalize.<anonymous>' call
      var it = charSequenceGet(_this__u8e3s4, 0);
      var tmp$ret$1 = isLowerCase(it) ? titlecase(it) : toString_0(it);
      var tmp_0 = toString(tmp$ret$1);
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp_0 + _this__u8e3s4.substring(1);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function _init_properties_Primitives_kt__k0eto4() {
    if (!properties_initialized_Primitives_kt_6dpii6) {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().b5(), serializer(StringCompanionObject_instance)), to(getKClass(Char), serializer_0(Companion_getInstance())), to(PrimitiveClasses_getInstance().e5(), CharArraySerializer()), to(PrimitiveClasses_getInstance().z4(), serializer_1(DoubleCompanionObject_instance)), to(PrimitiveClasses_getInstance().k5(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().y4(), serializer_2(FloatCompanionObject_instance)), to(PrimitiveClasses_getInstance().j5(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().i5(), LongArraySerializer()), to(getKClass(ULong), serializer_4(Companion_getInstance_1())), to(getKClass(ULongArray), ULongArraySerializer()), to(PrimitiveClasses_getInstance().x4(), serializer_5(IntCompanionObject_instance)), to(PrimitiveClasses_getInstance().h5(), IntArraySerializer()), to(getKClass(UInt), serializer_6(Companion_getInstance_2())), to(getKClass(UIntArray), UIntArraySerializer()), to(PrimitiveClasses_getInstance().w4(), serializer_7(ShortCompanionObject_instance)), to(PrimitiveClasses_getInstance().g5(), ShortArraySerializer()), to(getKClass(UShort), serializer_8(Companion_getInstance_3())), to(getKClass(UShortArray), UShortArraySerializer()), to(PrimitiveClasses_getInstance().v4(), serializer_9(ByteCompanionObject_instance)), to(PrimitiveClasses_getInstance().f5(), ByteArraySerializer()), to(getKClass(UByte), serializer_10(Companion_getInstance_4())), to(getKClass(UByteArray), UByteArraySerializer()), to(PrimitiveClasses_getInstance().u4(), serializer_11(BooleanCompanionObject_instance)), to(PrimitiveClasses_getInstance().d5(), BooleanArraySerializer()), to(getKClass(Unit), serializer_12(Unit_instance)), to(PrimitiveClasses_getInstance().t4(), NothingSerializer()), to(getKClass(Duration), serializer_13(Companion_getInstance_5()))]);
    }
  }
  function ULongSerializer() {
    ULongSerializer_instance = this;
    this.zg_1 = InlinePrimitiveDescriptor('kotlin.ULong', serializer_3(Companion_getInstance_0()));
  }
  protoOf(ULongSerializer).tc = function () {
    return this.zg_1;
  };
  var ULongSerializer_instance;
  function ULongSerializer_getInstance() {
    if (ULongSerializer_instance == null)
      new ULongSerializer();
    return ULongSerializer_instance;
  }
  function UIntSerializer() {
    UIntSerializer_instance = this;
    this.ah_1 = InlinePrimitiveDescriptor('kotlin.UInt', serializer_5(IntCompanionObject_instance));
  }
  protoOf(UIntSerializer).tc = function () {
    return this.ah_1;
  };
  var UIntSerializer_instance;
  function UIntSerializer_getInstance() {
    if (UIntSerializer_instance == null)
      new UIntSerializer();
    return UIntSerializer_instance;
  }
  function UShortSerializer() {
    UShortSerializer_instance = this;
    this.bh_1 = InlinePrimitiveDescriptor('kotlin.UShort', serializer_7(ShortCompanionObject_instance));
  }
  protoOf(UShortSerializer).tc = function () {
    return this.bh_1;
  };
  var UShortSerializer_instance;
  function UShortSerializer_getInstance() {
    if (UShortSerializer_instance == null)
      new UShortSerializer();
    return UShortSerializer_instance;
  }
  function UByteSerializer() {
    UByteSerializer_instance = this;
    this.ch_1 = InlinePrimitiveDescriptor('kotlin.UByte', serializer_9(ByteCompanionObject_instance));
  }
  protoOf(UByteSerializer).tc = function () {
    return this.ch_1;
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
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  protoOf(SerialDescriptorImpl).qd = get_isNullable;
  protoOf(ListLikeDescriptor).qd = get_isNullable;
  protoOf(PluginGeneratedSerialDescriptor).qd = get_isNullable;
  protoOf(InlinePrimitiveDescriptor$1).cg = typeParametersSerializers;
  protoOf(NothingSerialDescriptor).qd = get_isNullable;
  protoOf(PrimitiveSerialDescriptor_0).qd = get_isNullable;
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
