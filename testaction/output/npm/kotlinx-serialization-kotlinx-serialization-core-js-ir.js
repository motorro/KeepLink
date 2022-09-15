(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var interfaceMeta = kotlin_kotlin.$_$.z2;
  var asList = kotlin_kotlin.$_$.r1;
  var StringCompanionObject_getInstance = kotlin_kotlin.$_$.f1;
  var Unit_getInstance = kotlin_kotlin.$_$.l1;
  var emptyList = kotlin_kotlin.$_$.y1;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.y3;
  var classMeta = kotlin_kotlin.$_$.t2;
  var KProperty1 = kotlin_kotlin.$_$.f3;
  var getPropertyCallableRef = kotlin_kotlin.$_$.w2;
  var distinct = kotlin_kotlin.$_$.x1;
  var THROW_CCE = kotlin_kotlin.$_$.u3;
  var Entry = kotlin_kotlin.$_$.p1;
  var isInterface = kotlin_kotlin.$_$.a3;
  var Grouping = kotlin_kotlin.$_$.m1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var zip = kotlin_kotlin.$_$.m2;
  var toMap = kotlin_kotlin.$_$.k2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.n;
  var toString = kotlin_kotlin.$_$.d3;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.s;
  var mapCapacity = kotlin_kotlin.$_$.e2;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.m;
  var IllegalArgumentException_init_$Init$ = kotlin_kotlin.$_$.p;
  var IllegalArgumentException_init_$Init$_0 = kotlin_kotlin.$_$.r;
  var IllegalArgumentException = kotlin_kotlin.$_$.s3;
  var captureStack = kotlin_kotlin.$_$.p2;
  var equals = kotlin_kotlin.$_$.u2;
  var getStringHashCode = kotlin_kotlin.$_$.x2;
  var Iterator = kotlin_kotlin.$_$.o1;
  var Iterable = kotlin_kotlin.$_$.n1;
  var isBlank = kotlin_kotlin.$_$.j3;
  var toList = kotlin_kotlin.$_$.j2;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.l;
  var toHashSet = kotlin_kotlin.$_$.i2;
  var copyToArray = kotlin_kotlin.$_$.w1;
  var toBooleanArray = kotlin_kotlin.$_$.h2;
  var withIndex = kotlin_kotlin.$_$.l2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s1;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.h;
  var to = kotlin_kotlin.$_$.a4;
  var lazy_0 = kotlin_kotlin.$_$.z3;
  var contentEquals = kotlin_kotlin.$_$.t1;
  var until = kotlin_kotlin.$_$.e3;
  var joinToString$default = kotlin_kotlin.$_$.d;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.x3;
  var hashCode = kotlin_kotlin.$_$.y2;
  var HashSet_init_$Create$_0 = kotlin_kotlin.$_$.k;
  var contentHashCode = kotlin_kotlin.$_$.u1;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.j;
  var arrayIterator = kotlin_kotlin.$_$.n2;
  var fillArrayVal = kotlin_kotlin.$_$.v2;
  var booleanArray = kotlin_kotlin.$_$.o2;
  var emptyMap = kotlin_kotlin.$_$.z1;
  var Companion_getInstance = kotlin_kotlin.$_$.i1;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.b1;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.c1;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.j1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.d1;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.e1;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.a1;
  var BooleanCompanionObject_getInstance = kotlin_kotlin.$_$.z;
  var trimIndent = kotlin_kotlin.$_$.o3;
  var equals_0 = kotlin_kotlin.$_$.i3;
  var charSequenceLength = kotlin_kotlin.$_$.s2;
  var charSequenceGet = kotlin_kotlin.$_$.r2;
  var toString_0 = kotlin_kotlin.$_$.v;
  var titlecase = kotlin_kotlin.$_$.m3;
  var isLowerCase = kotlin_kotlin.$_$.k3;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.g1;
  var Char = kotlin_kotlin.$_$.r3;
  var getKClass = kotlin_kotlin.$_$.b;
  var Long = kotlin_kotlin.$_$.t3;
  var Unit = kotlin_kotlin.$_$.v3;
  var Duration = kotlin_kotlin.$_$.p3;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.h1;
  var mapOf = kotlin_kotlin.$_$.f2;
  var Annotation = kotlin_kotlin.$_$.q3;
  var get_indices = kotlin_kotlin.$_$.b2;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t;
  //endregion
  //region block: pre-declaration
  PolymorphicSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  PolymorphicSerializer.prototype.constructor = PolymorphicSerializer;
  SealedClassSerializer.prototype = Object.create(AbstractPolymorphicSerializer.prototype);
  SealedClassSerializer.prototype.constructor = SealedClassSerializer;
  SerializationException.prototype = Object.create(IllegalArgumentException.prototype);
  SerializationException.prototype.constructor = SerializationException;
  UnknownFieldException.prototype = Object.create(SerializationException.prototype);
  UnknownFieldException.prototype.constructor = UnknownFieldException;
  MissingFieldException.prototype = Object.create(SerializationException.prototype);
  MissingFieldException.prototype.constructor = MissingFieldException;
  function get_isNullable() {
    return false;
  }
  CONTEXTUAL.prototype = Object.create(SerialKind.prototype);
  CONTEXTUAL.prototype.constructor = CONTEXTUAL;
  PolymorphicKind.prototype = Object.create(SerialKind.prototype);
  PolymorphicKind.prototype.constructor = PolymorphicKind;
  SEALED.prototype = Object.create(PolymorphicKind.prototype);
  SEALED.prototype.constructor = SEALED;
  OPEN.prototype = Object.create(PolymorphicKind.prototype);
  OPEN.prototype.constructor = OPEN;
  PrimitiveKind.prototype = Object.create(SerialKind.prototype);
  PrimitiveKind.prototype.constructor = PrimitiveKind;
  BOOLEAN.prototype = Object.create(PrimitiveKind.prototype);
  BOOLEAN.prototype.constructor = BOOLEAN;
  BYTE.prototype = Object.create(PrimitiveKind.prototype);
  BYTE.prototype.constructor = BYTE;
  CHAR.prototype = Object.create(PrimitiveKind.prototype);
  CHAR.prototype.constructor = CHAR;
  SHORT.prototype = Object.create(PrimitiveKind.prototype);
  SHORT.prototype.constructor = SHORT;
  INT.prototype = Object.create(PrimitiveKind.prototype);
  INT.prototype.constructor = INT;
  LONG.prototype = Object.create(PrimitiveKind.prototype);
  LONG.prototype.constructor = LONG;
  FLOAT.prototype = Object.create(PrimitiveKind.prototype);
  FLOAT.prototype.constructor = FLOAT;
  DOUBLE.prototype = Object.create(PrimitiveKind.prototype);
  DOUBLE.prototype.constructor = DOUBLE;
  STRING.prototype = Object.create(PrimitiveKind.prototype);
  STRING.prototype.constructor = STRING;
  StructureKind.prototype = Object.create(SerialKind.prototype);
  StructureKind.prototype.constructor = StructureKind;
  CLASS.prototype = Object.create(StructureKind.prototype);
  CLASS.prototype.constructor = CLASS;
  LIST.prototype = Object.create(StructureKind.prototype);
  LIST.prototype.constructor = LIST;
  OBJECT.prototype = Object.create(StructureKind.prototype);
  OBJECT.prototype.constructor = OBJECT;
  PrimitiveArrayDescriptor.prototype = Object.create(ListLikeDescriptor.prototype);
  PrimitiveArrayDescriptor.prototype.constructor = PrimitiveArrayDescriptor;
  CollectionLikeSerializer.prototype = Object.create(AbstractCollectionSerializer.prototype);
  CollectionLikeSerializer.prototype.constructor = CollectionLikeSerializer;
  PrimitiveArraySerializer.prototype = Object.create(CollectionLikeSerializer.prototype);
  PrimitiveArraySerializer.prototype.constructor = PrimitiveArraySerializer;
  function typeParametersSerializers() {
    return get_EMPTY_SERIALIZER_ARRAY();
  }
  CharArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  CharArraySerializer_0.prototype.constructor = CharArraySerializer_0;
  DoubleArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  DoubleArraySerializer_0.prototype.constructor = DoubleArraySerializer_0;
  FloatArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  FloatArraySerializer_0.prototype.constructor = FloatArraySerializer_0;
  LongArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  LongArraySerializer_0.prototype.constructor = LongArraySerializer_0;
  IntArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  IntArraySerializer_0.prototype.constructor = IntArraySerializer_0;
  ShortArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ShortArraySerializer_0.prototype.constructor = ShortArraySerializer_0;
  ByteArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  ByteArraySerializer_0.prototype.constructor = ByteArraySerializer_0;
  BooleanArraySerializer_0.prototype = Object.create(PrimitiveArraySerializer.prototype);
  BooleanArraySerializer_0.prototype.constructor = BooleanArraySerializer_0;
  //endregion
  function KSerializer() {
  }
  KSerializer.$metadata$ = interfaceMeta('KSerializer', [SerializationStrategy, DeserializationStrategy]);
  function SerializationStrategy() {
  }
  SerializationStrategy.$metadata$ = interfaceMeta('SerializationStrategy');
  function DeserializationStrategy() {
  }
  DeserializationStrategy.$metadata$ = interfaceMeta('DeserializationStrategy');
  function PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, $this) {
    PolymorphicSerializer.call($this, baseClass);
    $this.nd_1 = asList(classAnnotations);
    return $this;
  }
  function PolymorphicSerializer_init_$Create$(baseClass, classAnnotations) {
    return PolymorphicSerializer_init_$Init$(baseClass, classAnnotations, Object.create(PolymorphicSerializer.prototype));
  }
  function PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer(StringCompanionObject_getInstance()).ld();
      $this$buildSerialDescriptor.xd('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Polymorphic<' + this$0.md_1.f9() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var tmp_2 = buildSerialDescriptor$default(tmp_0, tmp_1, [], null, 12, null);
      $this$buildSerialDescriptor.xd('value', tmp_2, null, false, 12, null);
      $this$buildSerialDescriptor.rd_1 = this$0.nd_1;
      return Unit_getInstance();
    };
  }
  function PolymorphicSerializer$descriptor$delegate$lambda(this$0) {
    return function () {
      var tmp = OPEN_getInstance();
      return withContext(buildSerialDescriptor$default('kotlinx.serialization.Polymorphic', tmp, [], PolymorphicSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null), this$0.md_1);
    };
  }
  function PolymorphicSerializer(baseClass) {
    AbstractPolymorphicSerializer.call(this);
    this.md_1 = baseClass;
    this.nd_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.od_1 = lazy(tmp_0, PolymorphicSerializer$descriptor$delegate$lambda(this));
  }
  PolymorphicSerializer.prototype.ld = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory();
      tmp$ret$0 = this.od_1.n1();
    }
    return tmp$ret$0;
  };
  PolymorphicSerializer.prototype.toString = function () {
    return 'kotlinx.serialization.PolymorphicSerializer(baseClass: ' + this.md_1 + ')';
  };
  PolymorphicSerializer.$metadata$ = classMeta('PolymorphicSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ld();
    }, null);
  }
  function SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, $this) {
    SealedClassSerializer.call($this, serialName, baseClass, subclasses, subclassSerializers);
    $this.zd_1 = asList(classAnnotations);
    return $this;
  }
  function SealedClassSerializer_init_$Create$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations) {
    return SealedClassSerializer_init_$Init$(serialName, baseClass, subclasses, subclassSerializers, classAnnotations, Object.create(SealedClassSerializer.prototype));
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp0_forEach = distinct($subclassSerializers);
      var tmp0_iterator = tmp0_forEach.g();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        {
          var d = element.ld();
          var tmp = d.de();
          $this$buildSerialDescriptor.xd(tmp, d, null, false, 12, null);
        }
      }
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers) {
    return function ($this$buildSerialDescriptor) {
      var tmp = serializer(StringCompanionObject_getInstance()).ld();
      $this$buildSerialDescriptor.xd('type', tmp, null, false, 12, null);
      var tmp_0 = 'kotlinx.serialization.Sealed<' + this$0.yd_1.f9() + '>';
      var tmp_1 = CONTEXTUAL_getInstance();
      var elementDescriptor = buildSerialDescriptor$default(tmp_0, tmp_1, [], SealedClassSerializer$descriptor$delegate$lambda$lambda$lambda($subclassSerializers), 4, null);
      $this$buildSerialDescriptor.xd('value', elementDescriptor, null, false, 12, null);
      $this$buildSerialDescriptor.rd_1 = this$0.zd_1;
      return Unit_getInstance();
    };
  }
  function SealedClassSerializer$descriptor$delegate$lambda($serialName, this$0, $subclassSerializers) {
    return function () {
      var tmp = SEALED_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], SealedClassSerializer$descriptor$delegate$lambda$lambda(this$0, $subclassSerializers), 4, null);
    };
  }
  function _no_name_provided__qut3iv($tmp0_groupingBy) {
    this.ee_1 = $tmp0_groupingBy;
  }
  _no_name_provided__qut3iv.prototype.q = function () {
    return this.ee_1.g();
  };
  _no_name_provided__qut3iv.prototype.fe = function (element) {
    var tmp$ret$0;
    {
      tmp$ret$0 = element.n1().ld().de();
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv.prototype.r = function (element) {
    return this.fe((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  _no_name_provided__qut3iv.$metadata$ = classMeta(undefined, [Grouping]);
  function SealedClassSerializer(serialName, baseClass, subclasses, subclassSerializers) {
    AbstractPolymorphicSerializer.call(this);
    this.yd_1 = baseClass;
    this.zd_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ae_1 = lazy(tmp_0, SealedClassSerializer$descriptor$delegate$lambda(serialName, this, subclassSerializers));
    if (!(subclasses.length === subclassSerializers.length)) {
      throw IllegalArgumentException_init_$Create$('All subclasses of sealed class ' + this.yd_1.f9() + ' should be marked @Serializable');
    }
    this.be_1 = toMap(zip(subclasses, subclassSerializers));
    var tmp_1 = this;
    var tmp$ret$10;
    {
      var tmp$ret$5;
      {
        var tmp$ret$0;
        {
          var tmp0_groupingBy = this.be_1.l1();
          tmp$ret$0 = new _no_name_provided__qut3iv(tmp0_groupingBy);
        }
        var tmp1_aggregate = tmp$ret$0;
        var tmp$ret$4;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = LinkedHashMap_init_$Create$();
          }
          var tmp2_aggregateTo = tmp$ret$1;
          var tmp$ret$2;
          {
            var tmp0_iterator = tmp1_aggregate.q();
            tmp$ret$2 = tmp0_iterator;
          }
          var tmp0_iterator_0 = tmp$ret$2;
          while (tmp0_iterator_0.i()) {
            var e = tmp0_iterator_0.j();
            var key = tmp1_aggregate.r(e);
            var accumulator = tmp2_aggregateTo.x1(key);
            {
              var tmp$ret$3;
              {
                var tmp2__anonymous__z9zvc9 = accumulator == null ? !tmp2_aggregateTo.u1(key) : false;
                if (!(accumulator == null)) {
                  {
                    var tmp0_error = "Multiple sealed subclasses of '" + this.yd_1 + "' have the same serial name '" + key + "':" + (" '" + accumulator.k1() + "', '" + e.k1() + "'");
                    throw IllegalStateException_init_$Create$(toString(tmp0_error));
                  }
                }
                tmp$ret$3 = e;
              }
              var tmp1_set = tmp$ret$3;
              tmp2_aggregateTo.m(key, tmp1_set);
            }
          }
          tmp$ret$4 = tmp2_aggregateTo;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp3_mapValues = tmp$ret$5;
      var tmp$ret$9;
      {
        var tmp1_mapValuesTo = LinkedHashMap_init_$Create$_0(mapCapacity(tmp3_mapValues.h()));
        var tmp$ret$8;
        {
          var tmp0_associateByTo = tmp3_mapValues.l1();
          var tmp0_iterator_1 = tmp0_associateByTo.g();
          while (tmp0_iterator_1.i()) {
            var element = tmp0_iterator_1.j();
            var tmp$ret$6;
            {
              tmp$ret$6 = element.k1();
            }
            var tmp_2 = tmp$ret$6;
            var tmp$ret$7;
            {
              tmp$ret$7 = element.n1().n1();
            }
            tmp1_mapValuesTo.m(tmp_2, tmp$ret$7);
          }
          tmp$ret$8 = tmp1_mapValuesTo;
        }
        tmp$ret$9 = tmp$ret$8;
      }
      tmp$ret$10 = tmp$ret$9;
    }
    tmp_1.ce_1 = tmp$ret$10;
  }
  SealedClassSerializer.prototype.ge = function () {
    return this.yd_1;
  };
  SealedClassSerializer.prototype.ld = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_0();
      tmp$ret$0 = this.ae_1.n1();
    }
    return tmp$ret$0;
  };
  SealedClassSerializer.$metadata$ = classMeta('SealedClassSerializer', undefined, undefined, undefined, undefined, AbstractPolymorphicSerializer.prototype);
  function descriptor$factory_0() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ld();
    }, null);
  }
  function SerializationException_init_$Init$(message, $this) {
    IllegalArgumentException_init_$Init$(message, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException_init_$Init$_0(message, cause, $this) {
    IllegalArgumentException_init_$Init$_0(message, cause, $this);
    SerializationException.call($this);
    return $this;
  }
  function SerializationException() {
    captureStack(this, SerializationException);
  }
  SerializationException.$metadata$ = classMeta('SerializationException', undefined, undefined, undefined, undefined, IllegalArgumentException.prototype);
  function UnknownFieldException_init_$Init$(index, $this) {
    UnknownFieldException.call($this, 'An unknown field for index ' + index);
    return $this;
  }
  function UnknownFieldException_init_$Create$(index) {
    var tmp = UnknownFieldException_init_$Init$(index, Object.create(UnknownFieldException.prototype));
    captureStack(tmp, UnknownFieldException_init_$Create$);
    return tmp;
  }
  function UnknownFieldException(message) {
    SerializationException_init_$Init$(message, this);
    captureStack(this, UnknownFieldException);
  }
  UnknownFieldException.$metadata$ = classMeta('UnknownFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
  function MissingFieldException_init_$Init$(missingFields, serialName, $this) {
    MissingFieldException.call($this, missingFields, missingFields.h() === 1 ? "Field '" + missingFields.l(0) + "' is required for type with serial name '" + serialName + "', but it was missing" : 'Fields ' + missingFields + " are required for type with serial name '" + serialName + "', but they were missing", null);
    return $this;
  }
  function MissingFieldException_init_$Create$(missingFields, serialName) {
    var tmp = MissingFieldException_init_$Init$(missingFields, serialName, Object.create(MissingFieldException.prototype));
    captureStack(tmp, MissingFieldException_init_$Create$);
    return tmp;
  }
  function MissingFieldException(missingFields, message, cause) {
    SerializationException_init_$Init$_0(message, cause, this);
    this.he_1 = missingFields;
    captureStack(this, MissingFieldException);
  }
  MissingFieldException.$metadata$ = classMeta('MissingFieldException', undefined, undefined, undefined, undefined, SerializationException.prototype);
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
    return IntSerializer_getInstance();
  }
  function IntArraySerializer() {
    return IntArraySerializer_getInstance();
  }
  function serializer_5(_this__u8e3s4) {
    return ShortSerializer_getInstance();
  }
  function ShortArraySerializer() {
    return ShortArraySerializer_getInstance();
  }
  function serializer_6(_this__u8e3s4) {
    return ByteSerializer_getInstance();
  }
  function ByteArraySerializer() {
    return ByteArraySerializer_getInstance();
  }
  function serializer_7(_this__u8e3s4) {
    return BooleanSerializer_getInstance();
  }
  function BooleanArraySerializer() {
    return BooleanArraySerializer_getInstance();
  }
  function serializer_8(_this__u8e3s4) {
    return UnitSerializer_getInstance();
  }
  function serializer_9(_this__u8e3s4) {
    return DurationSerializer_getInstance();
  }
  function get_nullable(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4.ld().ie()) {
      tmp = isInterface(_this__u8e3s4, KSerializer) ? _this__u8e3s4 : THROW_CCE();
    } else {
      tmp = new NullableSerializer(_this__u8e3s4);
    }
    return tmp;
  }
  function withContext(_this__u8e3s4, context) {
    return new ContextDescriptor(_this__u8e3s4, context);
  }
  function ContextDescriptor(original, kClass) {
    this.je_1 = original;
    this.ke_1 = kClass;
    this.le_1 = this.je_1.de() + '<' + this.ke_1.f9() + '>';
  }
  ContextDescriptor.prototype.me = function () {
    return this.je_1.me();
  };
  ContextDescriptor.prototype.ie = function () {
    return this.je_1.ie();
  };
  ContextDescriptor.prototype.ne = function () {
    return this.je_1.ne();
  };
  ContextDescriptor.prototype.oe = function (index) {
    return this.je_1.oe(index);
  };
  ContextDescriptor.prototype.pe = function (index) {
    return this.je_1.pe(index);
  };
  ContextDescriptor.prototype.de = function () {
    return this.le_1;
  };
  ContextDescriptor.prototype.equals = function (other) {
    var tmp0_elvis_lhs = other instanceof ContextDescriptor ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var another = tmp;
    return equals(this.je_1, another.je_1) ? another.ke_1.equals(this.ke_1) : false;
  };
  ContextDescriptor.prototype.hashCode = function () {
    var result = this.ke_1.hashCode();
    result = imul(31, result) + getStringHashCode(this.le_1) | 0;
    return result;
  };
  ContextDescriptor.prototype.toString = function () {
    return 'ContextDescriptor(kClass: ' + this.ke_1 + ', original: ' + this.je_1 + ')';
  };
  ContextDescriptor.$metadata$ = classMeta('ContextDescriptor', [SerialDescriptor]);
  function SerialDescriptor() {
  }
  SerialDescriptor.$metadata$ = interfaceMeta('SerialDescriptor');
  function get_elementDescriptors(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = new _no_name_provided__qut3iv_0(_this__u8e3s4);
    }
    return tmp$ret$0;
  }
  function elementDescriptors$1$1($this_elementDescriptors) {
    this.re_1 = $this_elementDescriptors;
    this.qe_1 = $this_elementDescriptors.me();
  }
  elementDescriptors$1$1.prototype.i = function () {
    return this.qe_1 > 0;
  };
  elementDescriptors$1$1.prototype.j = function () {
    var tmp = this.re_1.me();
    var tmp0_this = this;
    var tmp1 = tmp0_this.qe_1;
    tmp0_this.qe_1 = tmp1 - 1 | 0;
    return this.re_1.oe(tmp - tmp1 | 0);
  };
  elementDescriptors$1$1.$metadata$ = classMeta(undefined, [Iterator]);
  function _no_name_provided__qut3iv_0($this_elementDescriptors) {
    this.se_1 = $this_elementDescriptors;
  }
  _no_name_provided__qut3iv_0.prototype.g = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = new elementDescriptors$1$1(this.se_1);
    }
    return tmp$ret$0;
  };
  _no_name_provided__qut3iv_0.$metadata$ = classMeta(undefined, [Iterable]);
  function buildSerialDescriptor(serialName, kind, typeParameters, builder) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    {
      var tmp1_require = !equals(kind, CLASS_getInstance());
      {
      }
      if (!tmp1_require) {
        var tmp$ret$2;
        {
          tmp$ret$2 = "For StructureKind.CLASS please use 'buildClassSerialDescriptor' instead";
        }
        var message_0 = tmp$ret$2;
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    var sdBuilder = new ClassSerialDescriptorBuilder(serialName);
    builder(sdBuilder);
    return new SerialDescriptorImpl(serialName, kind, sdBuilder.sd_1.h(), toList(typeParameters), sdBuilder);
  }
  function buildSerialDescriptor$default(serialName, kind, typeParameters, builder, $mask0, $handler) {
    if (!(($mask0 & 8) === 0)) {
      builder = buildSerialDescriptor$lambda();
    }
    return buildSerialDescriptor(serialName, kind, typeParameters, builder);
  }
  function ClassSerialDescriptorBuilder(serialName) {
    this.pd_1 = serialName;
    this.qd_1 = false;
    this.rd_1 = emptyList();
    this.sd_1 = ArrayList_init_$Create$();
    this.td_1 = HashSet_init_$Create$();
    this.ud_1 = ArrayList_init_$Create$();
    this.vd_1 = ArrayList_init_$Create$();
    this.wd_1 = ArrayList_init_$Create$();
  }
  ClassSerialDescriptorBuilder.prototype.te = function (elementName, descriptor, annotations, isOptional) {
    {
      var tmp0_require = this.td_1.b(elementName);
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = "Element with name '" + elementName + "' is already registered";
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    var tmp0_this = this;
    {
      var tmp1_plusAssign = tmp0_this.sd_1;
      tmp1_plusAssign.b(elementName);
    }
    var tmp1_this = this;
    {
      var tmp2_plusAssign = tmp1_this.ud_1;
      tmp2_plusAssign.b(descriptor);
    }
    var tmp2_this = this;
    {
      var tmp3_plusAssign = tmp2_this.vd_1;
      tmp3_plusAssign.b(annotations);
    }
    var tmp3_this = this;
    {
      var tmp4_plusAssign = tmp3_this.wd_1;
      tmp4_plusAssign.b(isOptional);
    }
  };
  ClassSerialDescriptorBuilder.prototype.xd = function (elementName, descriptor, annotations, isOptional, $mask0, $handler) {
    if (!(($mask0 & 4) === 0))
      annotations = emptyList();
    if (!(($mask0 & 8) === 0))
      isOptional = false;
    return this.te(elementName, descriptor, annotations, isOptional);
  };
  ClassSerialDescriptorBuilder.$metadata$ = classMeta('ClassSerialDescriptorBuilder');
  function _get__hashCode__tgwhef($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory();
      tmp$ret$0 = $this.ff_1.n1();
    }
    return tmp$ret$0;
  }
  function SerialDescriptorImpl$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.ef_1);
    };
  }
  function SerialDescriptorImpl$toString$lambda(this$0) {
    return function (it) {
      return this$0.pe(it) + ': ' + this$0.oe(it).de();
    };
  }
  function SerialDescriptorImpl(serialName, kind, elementsCount, typeParameters, builder) {
    this.ue_1 = serialName;
    this.ve_1 = kind;
    this.we_1 = elementsCount;
    this.xe_1 = builder.rd_1;
    this.ye_1 = toHashSet(builder.sd_1);
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_toTypedArray = builder.sd_1;
      tmp$ret$0 = copyToArray(tmp0_toTypedArray);
    }
    tmp.ze_1 = tmp$ret$0;
    this.af_1 = compactArray(builder.ud_1);
    var tmp_0 = this;
    var tmp$ret$1;
    {
      var tmp0_toTypedArray_0 = builder.vd_1;
      tmp$ret$1 = copyToArray(tmp0_toTypedArray_0);
    }
    tmp_0.bf_1 = tmp$ret$1;
    this.cf_1 = toBooleanArray(builder.wd_1);
    var tmp_1 = this;
    var tmp$ret$4;
    {
      var tmp0_map = withIndex(this.ze_1);
      var tmp$ret$3;
      {
        var tmp0_mapTo = ArrayList_init_$Create$_0(collectionSizeOrDefault(tmp0_map, 10));
        var tmp0_iterator = tmp0_map.g();
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          var tmp$ret$2;
          {
            tmp$ret$2 = to(item.i2_1, item.h2_1);
          }
          tmp0_mapTo.b(tmp$ret$2);
        }
        tmp$ret$3 = tmp0_mapTo;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    tmp_1.df_1 = toMap(tmp$ret$4);
    this.ef_1 = compactArray(typeParameters);
    var tmp_2 = this;
    tmp_2.ff_1 = lazy_0(SerialDescriptorImpl$_hashCode$delegate$lambda(this));
  }
  SerialDescriptorImpl.prototype.de = function () {
    return this.ue_1;
  };
  SerialDescriptorImpl.prototype.ne = function () {
    return this.ve_1;
  };
  SerialDescriptorImpl.prototype.me = function () {
    return this.we_1;
  };
  SerialDescriptorImpl.prototype.gf = function () {
    return this.ye_1;
  };
  SerialDescriptorImpl.prototype.pe = function (index) {
    return getChecked(this.ze_1, index);
  };
  SerialDescriptorImpl.prototype.oe = function (index) {
    return getChecked(this.af_1, index);
  };
  SerialDescriptorImpl.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof SerialDescriptorImpl)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.de() === other.de())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.ef_1, tmp0__anonymous__q1qw7t.ef_1);
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.me() === other.me())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.me();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oe(index).de() === other.oe(index).de())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oe(index).ne(), other.oe(index).ne())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  SerialDescriptorImpl.prototype.hashCode = function () {
    return _get__hashCode__tgwhef(this);
  };
  SerialDescriptorImpl.prototype.toString = function () {
    var tmp = until(0, this.we_1);
    var tmp_0 = this.ue_1 + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, SerialDescriptorImpl$toString$lambda(this), 24, null);
  };
  SerialDescriptorImpl.$metadata$ = classMeta('SerialDescriptorImpl', [SerialDescriptor, CachedNames]);
  function PrimitiveSerialDescriptor(serialName, kind) {
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = !isBlank(serialName);
      }
      var tmp0_require = tmp$ret$0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$1;
        {
          tmp$ret$1 = 'Blank serial names are prohibited';
        }
        var message = tmp$ret$1;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return PrimitiveDescriptorSafe(serialName, kind);
  }
  function buildSerialDescriptor$lambda() {
    return function ($this$null) {
      return Unit_getInstance();
    };
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
  CONTEXTUAL.$metadata$ = objectMeta('CONTEXTUAL', undefined, undefined, undefined, undefined, SerialKind.prototype);
  var CONTEXTUAL_instance;
  function CONTEXTUAL_getInstance() {
    if (CONTEXTUAL_instance == null)
      new CONTEXTUAL();
    return CONTEXTUAL_instance;
  }
  function SerialKind() {
  }
  SerialKind.prototype.toString = function () {
    return ensureNotNull(getKClassFromExpression(this).f9());
  };
  SerialKind.prototype.hashCode = function () {
    return getStringHashCode(this.toString());
  };
  SerialKind.$metadata$ = classMeta('SerialKind');
  function SEALED() {
    SEALED_instance = this;
    PolymorphicKind.call(this);
  }
  SEALED.$metadata$ = objectMeta('SEALED', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
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
  OPEN.$metadata$ = objectMeta('OPEN', undefined, undefined, undefined, undefined, PolymorphicKind.prototype);
  var OPEN_instance;
  function OPEN_getInstance() {
    if (OPEN_instance == null)
      new OPEN();
    return OPEN_instance;
  }
  function PolymorphicKind() {
    SerialKind.call(this);
  }
  PolymorphicKind.$metadata$ = classMeta('PolymorphicKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function BOOLEAN() {
    BOOLEAN_instance = this;
    PrimitiveKind.call(this);
  }
  BOOLEAN.$metadata$ = objectMeta('BOOLEAN', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  BYTE.$metadata$ = objectMeta('BYTE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  CHAR.$metadata$ = objectMeta('CHAR', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  SHORT.$metadata$ = objectMeta('SHORT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  INT.$metadata$ = objectMeta('INT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  LONG.$metadata$ = objectMeta('LONG', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  FLOAT.$metadata$ = objectMeta('FLOAT', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  DOUBLE.$metadata$ = objectMeta('DOUBLE', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
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
  STRING.$metadata$ = objectMeta('STRING', undefined, undefined, undefined, undefined, PrimitiveKind.prototype);
  var STRING_instance;
  function STRING_getInstance() {
    if (STRING_instance == null)
      new STRING();
    return STRING_instance;
  }
  function PrimitiveKind() {
    SerialKind.call(this);
  }
  PrimitiveKind.$metadata$ = classMeta('PrimitiveKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function CLASS() {
    CLASS_instance = this;
    StructureKind.call(this);
  }
  CLASS.$metadata$ = objectMeta('CLASS', undefined, undefined, undefined, undefined, StructureKind.prototype);
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
  LIST.$metadata$ = objectMeta('LIST', undefined, undefined, undefined, undefined, StructureKind.prototype);
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
  OBJECT.$metadata$ = objectMeta('OBJECT', undefined, undefined, undefined, undefined, StructureKind.prototype);
  var OBJECT_instance;
  function OBJECT_getInstance() {
    if (OBJECT_instance == null)
      new OBJECT();
    return OBJECT_instance;
  }
  function StructureKind() {
    SerialKind.call(this);
  }
  StructureKind.$metadata$ = classMeta('StructureKind', undefined, undefined, undefined, undefined, SerialKind.prototype);
  function AbstractPolymorphicSerializer() {
  }
  AbstractPolymorphicSerializer.$metadata$ = classMeta('AbstractPolymorphicSerializer', [KSerializer]);
  function DurationSerializer() {
    DurationSerializer_instance = this;
    this.hf_1 = new PrimitiveSerialDescriptor_0('kotlin.time.Duration', STRING_getInstance());
  }
  DurationSerializer.prototype.ld = function () {
    return this.hf_1;
  };
  DurationSerializer.$metadata$ = objectMeta('DurationSerializer', [KSerializer]);
  var DurationSerializer_instance;
  function DurationSerializer_getInstance() {
    if (DurationSerializer_instance == null)
      new DurationSerializer();
    return DurationSerializer_instance;
  }
  function CachedNames() {
  }
  CachedNames.$metadata$ = interfaceMeta('CachedNames');
  function PrimitiveArrayDescriptor(primitive) {
    ListLikeDescriptor.call(this, primitive);
    this.kf_1 = primitive.de() + 'Array';
  }
  PrimitiveArrayDescriptor.prototype.de = function () {
    return this.kf_1;
  };
  PrimitiveArrayDescriptor.$metadata$ = classMeta('PrimitiveArrayDescriptor', undefined, undefined, undefined, undefined, ListLikeDescriptor.prototype);
  function ListLikeDescriptor(elementDescriptor) {
    this.lf_1 = elementDescriptor;
    this.mf_1 = 1;
  }
  ListLikeDescriptor.prototype.ne = function () {
    return LIST_getInstance();
  };
  ListLikeDescriptor.prototype.me = function () {
    return this.mf_1;
  };
  ListLikeDescriptor.prototype.pe = function (index) {
    return index.toString();
  };
  ListLikeDescriptor.prototype.oe = function (index) {
    {
      var tmp0_require = index >= 0;
      {
      }
      if (!tmp0_require) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Illegal index ' + index + ', ' + this.de() + ' expects only non-negative indices';
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    return this.lf_1;
  };
  ListLikeDescriptor.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ListLikeDescriptor))
      return false;
    if (equals(this.lf_1, other.lf_1) ? this.de() === other.de() : false)
      return true;
    return false;
  };
  ListLikeDescriptor.prototype.hashCode = function () {
    return imul(hashCode(this.lf_1), 31) + getStringHashCode(this.de()) | 0;
  };
  ListLikeDescriptor.prototype.toString = function () {
    return this.de() + '(' + this.lf_1 + ')';
  };
  ListLikeDescriptor.$metadata$ = classMeta('ListLikeDescriptor', [SerialDescriptor]);
  function PrimitiveArraySerializer(primitiveSerializer) {
    CollectionLikeSerializer.call(this, primitiveSerializer);
    this.of_1 = new PrimitiveArrayDescriptor(primitiveSerializer.ld());
  }
  PrimitiveArraySerializer.prototype.ld = function () {
    return this.of_1;
  };
  PrimitiveArraySerializer.$metadata$ = classMeta('PrimitiveArraySerializer', undefined, undefined, undefined, undefined, CollectionLikeSerializer.prototype);
  function CollectionLikeSerializer(elementSerializer) {
    AbstractCollectionSerializer.call(this);
    this.pf_1 = elementSerializer;
  }
  CollectionLikeSerializer.$metadata$ = classMeta('CollectionLikeSerializer', undefined, undefined, undefined, undefined, AbstractCollectionSerializer.prototype);
  function AbstractCollectionSerializer() {
  }
  AbstractCollectionSerializer.$metadata$ = classMeta('AbstractCollectionSerializer', [KSerializer]);
  function NullableSerializer(serializer) {
    this.qf_1 = serializer;
    this.rf_1 = new SerialDescriptorForNullable(this.qf_1.ld());
  }
  NullableSerializer.prototype.ld = function () {
    return this.rf_1;
  };
  NullableSerializer.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof NullableSerializer)
      other;
    else
      THROW_CCE();
    if (!equals(this.qf_1, other.qf_1))
      return false;
    return true;
  };
  NullableSerializer.prototype.hashCode = function () {
    return hashCode(this.qf_1);
  };
  NullableSerializer.$metadata$ = classMeta('NullableSerializer', [KSerializer]);
  function SerialDescriptorForNullable(original) {
    this.sf_1 = original;
    this.tf_1 = this.sf_1.de() + '?';
    this.uf_1 = cachedSerialNames(this.sf_1);
  }
  SerialDescriptorForNullable.prototype.me = function () {
    return this.sf_1.me();
  };
  SerialDescriptorForNullable.prototype.ne = function () {
    return this.sf_1.ne();
  };
  SerialDescriptorForNullable.prototype.oe = function (index) {
    return this.sf_1.oe(index);
  };
  SerialDescriptorForNullable.prototype.pe = function (index) {
    return this.sf_1.pe(index);
  };
  SerialDescriptorForNullable.prototype.de = function () {
    return this.tf_1;
  };
  SerialDescriptorForNullable.prototype.gf = function () {
    return this.uf_1;
  };
  SerialDescriptorForNullable.prototype.ie = function () {
    return true;
  };
  SerialDescriptorForNullable.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SerialDescriptorForNullable))
      return false;
    if (!equals(this.sf_1, other.sf_1))
      return false;
    return true;
  };
  SerialDescriptorForNullable.prototype.toString = function () {
    return '' + this.sf_1 + '?';
  };
  SerialDescriptorForNullable.prototype.hashCode = function () {
    return imul(hashCode(this.sf_1), 31);
  };
  SerialDescriptorForNullable.$metadata$ = classMeta('SerialDescriptorForNullable', [SerialDescriptor, CachedNames]);
  function ObjectSerializer$descriptor$delegate$lambda$lambda(this$0) {
    return function ($this$buildSerialDescriptor) {
      $this$buildSerialDescriptor.rd_1 = this$0.wf_1;
      return Unit_getInstance();
    };
  }
  function ObjectSerializer$descriptor$delegate$lambda($serialName, this$0) {
    return function () {
      var tmp = OBJECT_getInstance();
      return buildSerialDescriptor$default($serialName, tmp, [], ObjectSerializer$descriptor$delegate$lambda$lambda(this$0), 4, null);
    };
  }
  function ObjectSerializer(serialName, objectInstance) {
    this.vf_1 = objectInstance;
    this.wf_1 = emptyList();
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.xf_1 = lazy(tmp_0, ObjectSerializer$descriptor$delegate$lambda(serialName, this));
  }
  ObjectSerializer.prototype.ld = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = descriptor$factory_1();
      tmp$ret$0 = this.xf_1.n1();
    }
    return tmp$ret$0;
  };
  ObjectSerializer.$metadata$ = classMeta('ObjectSerializer', [KSerializer]);
  function descriptor$factory_1() {
    return getPropertyCallableRef('descriptor', 1, KProperty1, function (receiver) {
      return receiver.ld();
    }, null);
  }
  function get_EMPTY_DESCRIPTOR_ARRAY() {
    init_properties_Platform_common_kt_9ujmfm();
    return EMPTY_DESCRIPTOR_ARRAY;
  }
  var EMPTY_DESCRIPTOR_ARRAY;
  function compactArray(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          {
          }
          tmp$ret$0 = _this__u8e3s4 == null ? true : _this__u8e3s4.k();
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (!tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? get_EMPTY_DESCRIPTOR_ARRAY() : tmp1_elvis_lhs;
  }
  function elementsHashCodeBy(_this__u8e3s4, selector) {
    init_properties_Platform_common_kt_9ujmfm();
    var tmp$ret$2;
    {
      var accumulator = 1;
      var tmp0_iterator = _this__u8e3s4.g();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = accumulator;
          var tmp = imul(31, tmp0__anonymous__q1qw7t);
          var tmp$ret$0;
          {
            var tmp0_hashCode = selector(element);
            var tmp0_safe_receiver = tmp0_hashCode;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
            tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          }
          tmp$ret$1 = tmp + tmp$ret$0 | 0;
        }
        accumulator = tmp$ret$1;
      }
      tmp$ret$2 = accumulator;
    }
    return tmp$ret$2;
  }
  function cachedSerialNames(_this__u8e3s4) {
    init_properties_Platform_common_kt_9ujmfm();
    if (isInterface(_this__u8e3s4, CachedNames))
      return _this__u8e3s4.gf();
    var result = HashSet_init_$Create$_0(_this__u8e3s4.me());
    var inductionVariable = 0;
    var last = _this__u8e3s4.me();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_plusAssign = _this__u8e3s4.pe(i);
          result.b(tmp0_plusAssign);
        }
      }
       while (inductionVariable < last);
    return result;
  }
  var properties_initialized_Platform_common_kt_i7q4ty;
  function init_properties_Platform_common_kt_9ujmfm() {
    if (properties_initialized_Platform_common_kt_i7q4ty) {
    } else {
      properties_initialized_Platform_common_kt_i7q4ty = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_DESCRIPTOR_ARRAY = tmp$ret$2;
    }
  }
  function throwMissingFieldException(seen, goldenMask, descriptor) {
    var tmp$ret$0;
    {
      tmp$ret$0 = ArrayList_init_$Create$();
    }
    var missingFields = tmp$ret$0;
    var missingFieldsBits = goldenMask & ~seen;
    var inductionVariable = 0;
    if (inductionVariable < 32)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!((missingFieldsBits & 1) === 0)) {
          {
            var tmp0_plusAssign = descriptor.pe(i);
            missingFields.b(tmp0_plusAssign);
          }
        }
        missingFieldsBits = missingFieldsBits >>> 1 | 0;
      }
       while (inductionVariable < 32);
    throw MissingFieldException_init_$Create$(missingFields, descriptor.de());
  }
  function hashCodeImpl(_this__u8e3s4, typeParams) {
    var result = getStringHashCode(_this__u8e3s4.de());
    result = imul(31, result) + contentHashCode(typeParams) | 0;
    var elementDescriptors = get_elementDescriptors(_this__u8e3s4);
    var tmp$ret$4;
    {
      var tmp$ret$3;
      {
        var accumulator = 1;
        var tmp0_iterator = elementDescriptors.g();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          var tmp$ret$2;
          {
            var tmp0__anonymous__q1qw7t = accumulator;
            var tmp = imul(31, tmp0__anonymous__q1qw7t);
            var tmp$ret$1;
            {
              var tmp$ret$0;
              {
                tmp$ret$0 = element.de();
              }
              var tmp0_hashCode = tmp$ret$0;
              var tmp0_safe_receiver = tmp0_hashCode;
              var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
              tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
            }
            tmp$ret$2 = tmp + tmp$ret$1 | 0;
          }
          accumulator = tmp$ret$2;
        }
        tmp$ret$3 = accumulator;
      }
      tmp$ret$4 = tmp$ret$3;
    }
    var namesHash = tmp$ret$4;
    var tmp$ret$9;
    {
      var tmp$ret$8;
      {
        var accumulator_0 = 1;
        var tmp0_iterator_0 = elementDescriptors.g();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          var tmp$ret$7;
          {
            var tmp0__anonymous__q1qw7t_0 = accumulator_0;
            var tmp_0 = imul(31, tmp0__anonymous__q1qw7t_0);
            var tmp$ret$6;
            {
              var tmp$ret$5;
              {
                tmp$ret$5 = element_0.ne();
              }
              var tmp0_hashCode_0 = tmp$ret$5;
              var tmp0_safe_receiver_0 = tmp0_hashCode_0;
              var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
              tmp$ret$6 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
            }
            tmp$ret$7 = tmp_0 + tmp$ret$6 | 0;
          }
          accumulator_0 = tmp$ret$7;
        }
        tmp$ret$8 = accumulator_0;
      }
      tmp$ret$9 = tmp$ret$8;
    }
    var kindHash = tmp$ret$9;
    result = imul(31, result) + namesHash | 0;
    result = imul(31, result) + kindHash | 0;
    return result;
  }
  function _get_childSerializers__7vnyfa($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = childSerializers$factory();
      tmp$ret$0 = $this.hg_1.n1();
    }
    return tmp$ret$0;
  }
  function _get__hashCode__tgwhef_0($this) {
    var tmp$ret$0;
    {
      var tmp0_getValue = _hashCode$factory_0();
      tmp$ret$0 = $this.jg_1.n1();
    }
    return tmp$ret$0;
  }
  function buildIndices($this) {
    var indices = HashMap_init_$Create$();
    var inductionVariable = 0;
    var last = $this.cg_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        {
          var tmp0_set = $this.cg_1[i];
          indices.m(tmp0_set, i);
        }
      }
       while (inductionVariable <= last);
    return indices;
  }
  function PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zf_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.kg();
      return tmp1_elvis_lhs == null ? get_EMPTY_SERIALIZER_ARRAY() : tmp1_elvis_lhs;
    };
  }
  function PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zf_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.lg();
      var tmp;
      if (tmp1_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            var tmp0_mapTo = ArrayList_init_$Create$_0(tmp1_safe_receiver.length);
            var tmp0_iterator = arrayIterator(tmp1_safe_receiver);
            while (tmp0_iterator.i()) {
              var item = tmp0_iterator.j();
              var tmp$ret$0;
              {
                tmp$ret$0 = item.ld();
              }
              tmp0_mapTo.b(tmp$ret$0);
            }
            tmp$ret$1 = tmp0_mapTo;
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp = tmp$ret$2;
      }
      return compactArray(tmp);
    };
  }
  function PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this$0) {
    return function () {
      return hashCodeImpl(this$0, this$0.mg());
    };
  }
  function PluginGeneratedSerialDescriptor$toString$lambda(this$0) {
    return function (i) {
      return this$0.pe(i) + ': ' + this$0.oe(i).de();
    };
  }
  function PluginGeneratedSerialDescriptor(serialName, generatedSerializer, elementsCount) {
    this.yf_1 = serialName;
    this.zf_1 = generatedSerializer;
    this.ag_1 = elementsCount;
    this.bg_1 = -1;
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = this.ag_1;
    var tmp$ret$0;
    {
      tmp$ret$0 = fillArrayVal(Array(tmp_1), null);
    }
    var tmp_2 = tmp$ret$0;
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      var tmp$ret$1;
      {
        tmp$ret$1 = '[UNINITIALIZED]';
      }
      tmp_2[tmp_3] = tmp$ret$1;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.cg_1 = tmp_2;
    var tmp_4 = this;
    var tmp$ret$2;
    {
      var tmp0_arrayOfNulls = this.ag_1;
      tmp$ret$2 = fillArrayVal(Array(tmp0_arrayOfNulls), null);
    }
    tmp_4.dg_1 = tmp$ret$2;
    this.eg_1 = null;
    this.fg_1 = booleanArray(this.ag_1);
    this.gg_1 = emptyMap();
    var tmp_5 = this;
    var tmp_6 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_5.hg_1 = lazy(tmp_6, PluginGeneratedSerialDescriptor$childSerializers$delegate$lambda(this));
    var tmp_7 = this;
    var tmp_8 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_7.ig_1 = lazy(tmp_8, PluginGeneratedSerialDescriptor$typeParameterDescriptors$delegate$lambda(this));
    var tmp_9 = this;
    var tmp_10 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp_9.jg_1 = lazy(tmp_10, PluginGeneratedSerialDescriptor$_hashCode$delegate$lambda(this));
  }
  PluginGeneratedSerialDescriptor.prototype.de = function () {
    return this.yf_1;
  };
  PluginGeneratedSerialDescriptor.prototype.me = function () {
    return this.ag_1;
  };
  PluginGeneratedSerialDescriptor.prototype.ne = function () {
    return CLASS_getInstance();
  };
  PluginGeneratedSerialDescriptor.prototype.gf = function () {
    return this.gg_1.y1();
  };
  PluginGeneratedSerialDescriptor.prototype.mg = function () {
    var tmp$ret$0;
    {
      var tmp0_getValue = typeParameterDescriptors$factory();
      tmp$ret$0 = this.ig_1.n1();
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.ng = function (name, isOptional) {
    var tmp0_this = this;
    tmp0_this.bg_1 = tmp0_this.bg_1 + 1 | 0;
    this.cg_1[tmp0_this.bg_1] = name;
    this.fg_1[this.bg_1] = isOptional;
    this.dg_1[this.bg_1] = null;
    if (this.bg_1 === (this.ag_1 - 1 | 0)) {
      this.gg_1 = buildIndices(this);
    }
  };
  PluginGeneratedSerialDescriptor.prototype.oe = function (index) {
    return getChecked(_get_childSerializers__7vnyfa(this), index).ld();
  };
  PluginGeneratedSerialDescriptor.prototype.pe = function (index) {
    return getChecked(this.cg_1, index);
  };
  PluginGeneratedSerialDescriptor.prototype.equals = function (other) {
    var tmp$ret$0;
    $l$block_5: {
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_5;
      }
      if (!(other instanceof PluginGeneratedSerialDescriptor)) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.de() === other.de())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var tmp$ret$1;
      {
        var tmp0__anonymous__q1qw7t = other;
        tmp$ret$1 = contentEquals(this.mg(), tmp0__anonymous__q1qw7t.mg());
      }
      if (!tmp$ret$1) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      if (!(this.me() === other.me())) {
        tmp$ret$0 = false;
        break $l$block_5;
      }
      var inductionVariable = 0;
      var last = this.me();
      if (inductionVariable < last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (!(this.oe(index).de() === other.oe(index).de())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
          if (!equals(this.oe(index).ne(), other.oe(index).ne())) {
            tmp$ret$0 = false;
            break $l$block_5;
          }
        }
         while (inductionVariable < last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  PluginGeneratedSerialDescriptor.prototype.hashCode = function () {
    return _get__hashCode__tgwhef_0(this);
  };
  PluginGeneratedSerialDescriptor.prototype.toString = function () {
    var tmp = until(0, this.ag_1);
    var tmp_0 = this.de() + '(';
    return joinToString$default(tmp, ', ', tmp_0, ')', 0, null, PluginGeneratedSerialDescriptor$toString$lambda(this), 24, null);
  };
  PluginGeneratedSerialDescriptor.$metadata$ = classMeta('PluginGeneratedSerialDescriptor', [SerialDescriptor, CachedNames]);
  function childSerializers$factory() {
    return getPropertyCallableRef('childSerializers', 1, KProperty1, function (receiver) {
      return _get_childSerializers__7vnyfa(receiver);
    }, null);
  }
  function typeParameterDescriptors$factory() {
    return getPropertyCallableRef('typeParameterDescriptors', 1, KProperty1, function (receiver) {
      return receiver.mg();
    }, null);
  }
  function _hashCode$factory_0() {
    return getPropertyCallableRef('_hashCode', 1, KProperty1, function (receiver) {
      return _get__hashCode__tgwhef_0(receiver);
    }, null);
  }
  function get_EMPTY_SERIALIZER_ARRAY() {
    init_properties_PluginHelperInterfaces_kt_tblf27();
    return EMPTY_SERIALIZER_ARRAY;
  }
  var EMPTY_SERIALIZER_ARRAY;
  function GeneratedSerializer() {
  }
  GeneratedSerializer.$metadata$ = interfaceMeta('GeneratedSerializer', [KSerializer]);
  function SerializerFactory() {
  }
  SerializerFactory.$metadata$ = interfaceMeta('SerializerFactory');
  var properties_initialized_PluginHelperInterfaces_kt_ap8in1;
  function init_properties_PluginHelperInterfaces_kt_tblf27() {
    if (properties_initialized_PluginHelperInterfaces_kt_ap8in1) {
    } else {
      properties_initialized_PluginHelperInterfaces_kt_ap8in1 = true;
      var tmp$ret$2;
      {
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = [];
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      EMPTY_SERIALIZER_ARRAY = tmp$ret$2;
    }
  }
  function CharArraySerializer_0() {
    CharArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_0(Companion_getInstance()));
  }
  CharArraySerializer_0.$metadata$ = objectMeta('CharArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var CharArraySerializer_instance;
  function CharArraySerializer_getInstance() {
    if (CharArraySerializer_instance == null)
      new CharArraySerializer_0();
    return CharArraySerializer_instance;
  }
  function DoubleArraySerializer_0() {
    DoubleArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_1(DoubleCompanionObject_getInstance()));
  }
  DoubleArraySerializer_0.$metadata$ = objectMeta('DoubleArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var DoubleArraySerializer_instance;
  function DoubleArraySerializer_getInstance() {
    if (DoubleArraySerializer_instance == null)
      new DoubleArraySerializer_0();
    return DoubleArraySerializer_instance;
  }
  function FloatArraySerializer_0() {
    FloatArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_2(FloatCompanionObject_getInstance()));
  }
  FloatArraySerializer_0.$metadata$ = objectMeta('FloatArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
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
  LongArraySerializer_0.$metadata$ = objectMeta('LongArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var LongArraySerializer_instance;
  function LongArraySerializer_getInstance() {
    if (LongArraySerializer_instance == null)
      new LongArraySerializer_0();
    return LongArraySerializer_instance;
  }
  function IntArraySerializer_0() {
    IntArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_4(IntCompanionObject_getInstance()));
  }
  IntArraySerializer_0.$metadata$ = objectMeta('IntArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var IntArraySerializer_instance;
  function IntArraySerializer_getInstance() {
    if (IntArraySerializer_instance == null)
      new IntArraySerializer_0();
    return IntArraySerializer_instance;
  }
  function ShortArraySerializer_0() {
    ShortArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_5(ShortCompanionObject_getInstance()));
  }
  ShortArraySerializer_0.$metadata$ = objectMeta('ShortArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ShortArraySerializer_instance;
  function ShortArraySerializer_getInstance() {
    if (ShortArraySerializer_instance == null)
      new ShortArraySerializer_0();
    return ShortArraySerializer_instance;
  }
  function ByteArraySerializer_0() {
    ByteArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_6(ByteCompanionObject_getInstance()));
  }
  ByteArraySerializer_0.$metadata$ = objectMeta('ByteArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var ByteArraySerializer_instance;
  function ByteArraySerializer_getInstance() {
    if (ByteArraySerializer_instance == null)
      new ByteArraySerializer_0();
    return ByteArraySerializer_instance;
  }
  function BooleanArraySerializer_0() {
    BooleanArraySerializer_instance = this;
    PrimitiveArraySerializer.call(this, serializer_7(BooleanCompanionObject_getInstance()));
  }
  BooleanArraySerializer_0.$metadata$ = objectMeta('BooleanArraySerializer', [KSerializer], undefined, undefined, undefined, PrimitiveArraySerializer.prototype);
  var BooleanArraySerializer_instance;
  function BooleanArraySerializer_getInstance() {
    if (BooleanArraySerializer_instance == null)
      new BooleanArraySerializer_0();
    return BooleanArraySerializer_instance;
  }
  function get_BUILTIN_SERIALIZERS() {
    init_properties_Primitives_kt_u7dn2q();
    return BUILTIN_SERIALIZERS;
  }
  var BUILTIN_SERIALIZERS;
  function StringSerializer() {
    StringSerializer_instance = this;
    this.og_1 = new PrimitiveSerialDescriptor_0('kotlin.String', STRING_getInstance());
  }
  StringSerializer.prototype.ld = function () {
    return this.og_1;
  };
  StringSerializer.$metadata$ = objectMeta('StringSerializer', [KSerializer]);
  var StringSerializer_instance;
  function StringSerializer_getInstance() {
    if (StringSerializer_instance == null)
      new StringSerializer();
    return StringSerializer_instance;
  }
  function CharSerializer() {
    CharSerializer_instance = this;
    this.pg_1 = new PrimitiveSerialDescriptor_0('kotlin.Char', CHAR_getInstance());
  }
  CharSerializer.prototype.ld = function () {
    return this.pg_1;
  };
  CharSerializer.$metadata$ = objectMeta('CharSerializer', [KSerializer]);
  var CharSerializer_instance;
  function CharSerializer_getInstance() {
    if (CharSerializer_instance == null)
      new CharSerializer();
    return CharSerializer_instance;
  }
  function DoubleSerializer() {
    DoubleSerializer_instance = this;
    this.qg_1 = new PrimitiveSerialDescriptor_0('kotlin.Double', DOUBLE_getInstance());
  }
  DoubleSerializer.prototype.ld = function () {
    return this.qg_1;
  };
  DoubleSerializer.$metadata$ = objectMeta('DoubleSerializer', [KSerializer]);
  var DoubleSerializer_instance;
  function DoubleSerializer_getInstance() {
    if (DoubleSerializer_instance == null)
      new DoubleSerializer();
    return DoubleSerializer_instance;
  }
  function FloatSerializer() {
    FloatSerializer_instance = this;
    this.rg_1 = new PrimitiveSerialDescriptor_0('kotlin.Float', FLOAT_getInstance());
  }
  FloatSerializer.prototype.ld = function () {
    return this.rg_1;
  };
  FloatSerializer.$metadata$ = objectMeta('FloatSerializer', [KSerializer]);
  var FloatSerializer_instance;
  function FloatSerializer_getInstance() {
    if (FloatSerializer_instance == null)
      new FloatSerializer();
    return FloatSerializer_instance;
  }
  function LongSerializer() {
    LongSerializer_instance = this;
    this.sg_1 = new PrimitiveSerialDescriptor_0('kotlin.Long', LONG_getInstance());
  }
  LongSerializer.prototype.ld = function () {
    return this.sg_1;
  };
  LongSerializer.$metadata$ = objectMeta('LongSerializer', [KSerializer]);
  var LongSerializer_instance;
  function LongSerializer_getInstance() {
    if (LongSerializer_instance == null)
      new LongSerializer();
    return LongSerializer_instance;
  }
  function IntSerializer() {
    IntSerializer_instance = this;
    this.tg_1 = new PrimitiveSerialDescriptor_0('kotlin.Int', INT_getInstance());
  }
  IntSerializer.prototype.ld = function () {
    return this.tg_1;
  };
  IntSerializer.$metadata$ = objectMeta('IntSerializer', [KSerializer]);
  var IntSerializer_instance;
  function IntSerializer_getInstance() {
    if (IntSerializer_instance == null)
      new IntSerializer();
    return IntSerializer_instance;
  }
  function ShortSerializer() {
    ShortSerializer_instance = this;
    this.ug_1 = new PrimitiveSerialDescriptor_0('kotlin.Short', SHORT_getInstance());
  }
  ShortSerializer.prototype.ld = function () {
    return this.ug_1;
  };
  ShortSerializer.$metadata$ = objectMeta('ShortSerializer', [KSerializer]);
  var ShortSerializer_instance;
  function ShortSerializer_getInstance() {
    if (ShortSerializer_instance == null)
      new ShortSerializer();
    return ShortSerializer_instance;
  }
  function ByteSerializer() {
    ByteSerializer_instance = this;
    this.vg_1 = new PrimitiveSerialDescriptor_0('kotlin.Byte', BYTE_getInstance());
  }
  ByteSerializer.prototype.ld = function () {
    return this.vg_1;
  };
  ByteSerializer.$metadata$ = objectMeta('ByteSerializer', [KSerializer]);
  var ByteSerializer_instance;
  function ByteSerializer_getInstance() {
    if (ByteSerializer_instance == null)
      new ByteSerializer();
    return ByteSerializer_instance;
  }
  function BooleanSerializer() {
    BooleanSerializer_instance = this;
    this.wg_1 = new PrimitiveSerialDescriptor_0('kotlin.Boolean', BOOLEAN_getInstance());
  }
  BooleanSerializer.prototype.ld = function () {
    return this.wg_1;
  };
  BooleanSerializer.$metadata$ = objectMeta('BooleanSerializer', [KSerializer]);
  var BooleanSerializer_instance;
  function BooleanSerializer_getInstance() {
    if (BooleanSerializer_instance == null)
      new BooleanSerializer();
    return BooleanSerializer_instance;
  }
  function UnitSerializer() {
    UnitSerializer_instance = this;
    this.xg_1 = new ObjectSerializer('kotlin.Unit', Unit_getInstance());
  }
  UnitSerializer.prototype.ld = function () {
    return this.xg_1.ld();
  };
  UnitSerializer.$metadata$ = objectMeta('UnitSerializer', [KSerializer]);
  var UnitSerializer_instance;
  function UnitSerializer_getInstance() {
    if (UnitSerializer_instance == null)
      new UnitSerializer();
    return UnitSerializer_instance;
  }
  function error($this) {
    throw IllegalStateException_init_$Create$('Primitive descriptor does not have elements');
  }
  function PrimitiveSerialDescriptor_0(serialName, kind) {
    this.yg_1 = serialName;
    this.zg_1 = kind;
  }
  PrimitiveSerialDescriptor_0.prototype.de = function () {
    return this.yg_1;
  };
  PrimitiveSerialDescriptor_0.prototype.ne = function () {
    return this.zg_1;
  };
  PrimitiveSerialDescriptor_0.prototype.me = function () {
    return 0;
  };
  PrimitiveSerialDescriptor_0.prototype.pe = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.oe = function (index) {
    error(this);
  };
  PrimitiveSerialDescriptor_0.prototype.toString = function () {
    return 'PrimitiveDescriptor(' + this.yg_1 + ')';
  };
  PrimitiveSerialDescriptor_0.$metadata$ = classMeta('PrimitiveSerialDescriptor', [SerialDescriptor]);
  function PrimitiveDescriptorSafe(serialName, kind) {
    init_properties_Primitives_kt_u7dn2q();
    checkName(serialName);
    return new PrimitiveSerialDescriptor_0(serialName, kind);
  }
  function checkName(serialName) {
    init_properties_Primitives_kt_u7dn2q();
    var keys = get_BUILTIN_SERIALIZERS().y1();
    var tmp0_iterator = keys.g();
    while (tmp0_iterator.i()) {
      var primitive = tmp0_iterator.j();
      var simpleName = capitalize(ensureNotNull(primitive.f9()));
      var qualifiedName = 'kotlin.' + simpleName;
      if (equals_0(serialName, qualifiedName, true) ? true : equals_0(serialName, simpleName, true)) {
        throw IllegalArgumentException_init_$Create$(trimIndent('\n                The name of serial descriptor should uniquely identify associated serializer.\n                For serial name ' + serialName + ' there already exist ' + capitalize(simpleName) + 'Serializer.\n                Please refer to SerialDescriptor documentation for additional information.\n            '));
      }
    }
  }
  function capitalize(_this__u8e3s4) {
    init_properties_Primitives_kt_u7dn2q();
    var tmp$ret$4;
    {
      var tmp;
      var tmp$ret$0;
      {
        tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
      }
      if (tmp$ret$0) {
        var tmp$ret$1;
        {
          var tmp0__anonymous__q1qw7t = charSequenceGet(_this__u8e3s4, 0);
          tmp$ret$1 = isLowerCase(tmp0__anonymous__q1qw7t) ? titlecase(tmp0__anonymous__q1qw7t) : toString_0(tmp0__anonymous__q1qw7t);
        }
        var tmp_0 = toString(tmp$ret$1);
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            tmp$ret$2 = _this__u8e3s4;
          }
          tmp$ret$3 = tmp$ret$2.substring(1);
        }
        tmp = tmp_0 + tmp$ret$3;
      } else {
        tmp = _this__u8e3s4;
      }
      tmp$ret$4 = tmp;
    }
    return tmp$ret$4;
  }
  var properties_initialized_Primitives_kt_6dpii6;
  function init_properties_Primitives_kt_u7dn2q() {
    if (properties_initialized_Primitives_kt_6dpii6) {
    } else {
      properties_initialized_Primitives_kt_6dpii6 = true;
      BUILTIN_SERIALIZERS = mapOf([to(PrimitiveClasses_getInstance().ra(), serializer(StringCompanionObject_getInstance())), to(getKClass(Char), serializer_0(Companion_getInstance())), to(PrimitiveClasses_getInstance().ua(), CharArraySerializer()), to(PrimitiveClasses_getInstance().pa(), serializer_1(DoubleCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ab(), DoubleArraySerializer()), to(PrimitiveClasses_getInstance().oa(), serializer_2(FloatCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().za(), FloatArraySerializer()), to(getKClass(Long), serializer_3(Companion_getInstance_0())), to(PrimitiveClasses_getInstance().ya(), LongArraySerializer()), to(PrimitiveClasses_getInstance().na(), serializer_4(IntCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().xa(), IntArraySerializer()), to(PrimitiveClasses_getInstance().ma(), serializer_5(ShortCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().wa(), ShortArraySerializer()), to(PrimitiveClasses_getInstance().la(), serializer_6(ByteCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().va(), ByteArraySerializer()), to(PrimitiveClasses_getInstance().ka(), serializer_7(BooleanCompanionObject_getInstance())), to(PrimitiveClasses_getInstance().ta(), BooleanArraySerializer()), to(getKClass(Unit), serializer_8(Unit_getInstance())), to(getKClass(Duration), serializer_9(Companion_getInstance_1()))]);
    }
  }
  function SerializableWith() {
  }
  SerializableWith.$metadata$ = classMeta('SerializableWith', [Annotation], 0);
  function getChecked(_this__u8e3s4, index) {
    if (!(0 <= index ? index <= (_this__u8e3s4.length - 1 | 0) : false))
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' out of bounds ' + get_indices(_this__u8e3s4));
    return _this__u8e3s4[index];
  }
  //region block: post-declaration
  SerialDescriptorImpl.prototype.ie = get_isNullable;
  ListLikeDescriptor.prototype.ie = get_isNullable;
  PrimitiveArrayDescriptor.prototype.ie = get_isNullable;
  PluginGeneratedSerialDescriptor.prototype.ie = get_isNullable;
  PrimitiveSerialDescriptor_0.prototype.ie = get_isNullable;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PolymorphicSerializer_init_$Create$;
  _.$_$.b = SealedClassSerializer_init_$Create$;
  _.$_$.c = UnknownFieldException_init_$Create$;
  _.$_$.d = STRING_getInstance;
  _.$_$.e = StringSerializer_getInstance;
  _.$_$.f = get_nullable;
  _.$_$.g = PrimitiveSerialDescriptor;
  _.$_$.h = typeParametersSerializers;
  _.$_$.i = GeneratedSerializer;
  _.$_$.j = PluginGeneratedSerialDescriptor;
  _.$_$.k = SerializerFactory;
  _.$_$.l = throwMissingFieldException;
  _.$_$.m = KSerializer;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js')));

//# sourceMappingURL=kotlinx-serialization-kotlinx-serialization-core-js-ir.js.map