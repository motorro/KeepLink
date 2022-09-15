(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.u3;
  var contentEquals = kotlin_kotlin.$_$.t1;
  var getStringHashCode = kotlin_kotlin.$_$.x2;
  var contentHashCode = kotlin_kotlin.$_$.u1;
  var classMeta = kotlin_kotlin.$_$.t2;
  var interfaceMeta = kotlin_kotlin.$_$.z2;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.l1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var contentToString = kotlin_kotlin.$_$.v1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var mutableListOf = kotlin_kotlin.$_$.g2;
  var copyToArray = kotlin_kotlin.$_$.w1;
  var charSequenceLength = kotlin_kotlin.$_$.s2;
  var toString = kotlin_kotlin.$_$.d3;
  var dropLast = kotlin_kotlin.$_$.g3;
  var joinToString$default = kotlin_kotlin.$_$.e;
  var drop = kotlin_kotlin.$_$.h3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
  var charArrayOf = kotlin_kotlin.$_$.q2;
  var split$default = kotlin_kotlin.$_$.g;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.s1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var indexOf$default = kotlin_kotlin.$_$.f;
  var isBlank = kotlin_kotlin.$_$.j3;
  //endregion
  //region block: pre-declaration
  UriComponents.prototype = Object.create(PshComponents.prototype);
  UriComponents.prototype.constructor = UriComponents;
  PshComponentsImpl.prototype = Object.create(PshComponents.prototype);
  PshComponentsImpl.prototype.constructor = PshComponentsImpl;
  //endregion
  function UriComponents_init_$Init$(scheme, host, actionComponents, $this) {
    UriComponents.call($this, scheme, host, actionComponents.getPath(), actionComponents.getSearch(), actionComponents.getHash());
    return $this;
  }
  function UriComponents_init_$Create$(scheme, host, actionComponents) {
    return UriComponents_init_$Init$(scheme, host, actionComponents, Object.create(UriComponents.prototype));
  }
  function UriComponents(scheme, host, path, search, hash) {
    PshComponents.call(this);
    this.ah_1 = scheme;
    this.bh_1 = host;
    this.ch_1 = path;
    this.dh_1 = search;
    this.eh_1 = hash;
  }
  UriComponents.prototype.getPath = function () {
    return this.ch_1;
  };
  UriComponents.prototype.getSearch = function () {
    return this.dh_1;
  };
  UriComponents.prototype.getHash = function () {
    return this.eh_1;
  };
  UriComponents.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof UriComponents)
      other;
    else
      THROW_CCE();
    if (!(this.ah_1 === other.ah_1))
      return false;
    if (!(this.bh_1 === other.bh_1))
      return false;
    if (!contentEquals(this.getPath(), other.getPath()))
      return false;
    if (!contentEquals(this.getSearch(), other.getSearch()))
      return false;
    if (!(this.getHash() === other.getHash()))
      return false;
    return true;
  };
  UriComponents.prototype.hashCode = function () {
    var result = getStringHashCode(this.ah_1);
    result = imul(31, result) + getStringHashCode(this.bh_1) | 0;
    result = imul(31, result) + contentHashCode(this.getPath()) | 0;
    result = imul(31, result) + contentHashCode(this.getSearch()) | 0;
    result = imul(31, result) + getStringHashCode(this.getHash()) | 0;
    return result;
  };
  UriComponents.$metadata$ = classMeta('UriComponents', undefined, undefined, undefined, undefined, PshComponents.prototype);
  function ComponentValue() {
  }
  ComponentValue.$metadata$ = interfaceMeta('ComponentValue');
  function HashComponent() {
  }
  HashComponent.$metadata$ = interfaceMeta('HashComponent');
  function Companion() {
    Companion_instance = this;
  }
  Companion.prototype.serializer = function () {
    return $serializer_getInstance();
  };
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.uri.data.Param', this, 2);
    tmp0_serialDesc.ng('name', false);
    tmp0_serialDesc.ng('value', false);
    this.fh_1 = tmp0_serialDesc;
  }
  $serializer.prototype.ld = function () {
    return this.fh_1;
  };
  $serializer.prototype.kg = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), StringSerializer_getInstance()];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.prototype.gh = function (decoder) {
    var tmp0_desc = this.fh_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.hh(tmp0_desc);
    if (tmp6_input.kh()) {
      tmp4_local0 = tmp6_input.jh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.jh(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ih(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.jh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.jh(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.lh(tmp0_desc);
    return Param_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer.prototype.mh = function (encoder, value) {
    var tmp0_desc = this.fh_1;
    var tmp1_output = encoder.hh(tmp0_desc);
    tmp1_output.ph(tmp0_desc, 0, value.nh_1);
    tmp1_output.ph(tmp0_desc, 1, value.oh_1);
    tmp1_output.lh(tmp0_desc);
  };
  $serializer.prototype.qh = function (encoder, value) {
    return this.mh(encoder, value instanceof Param ? value : THROW_CCE());
  };
  $serializer.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Param_init_$Init$(seen1, name, value, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, $serializer_getInstance().fh_1);
    $this.nh_1 = name;
    $this.oh_1 = value;
    return $this;
  }
  function Param_init_$Create$(seen1, name, value, serializationConstructorMarker) {
    return Param_init_$Init$(seen1, name, value, serializationConstructorMarker, Object.create(Param.prototype));
  }
  function Param(name, value) {
    Companion_getInstance();
    this.nh_1 = name;
    this.oh_1 = value;
  }
  Param.prototype.rh = function () {
    return this.nh_1;
  };
  Param.prototype.n1 = function () {
    return this.oh_1;
  };
  Param.prototype.component1 = function () {
    return this.nh_1;
  };
  Param.prototype.component2 = function () {
    return this.oh_1;
  };
  Param.prototype.copy = function (name, value) {
    return this.sh(name === void 1 ? this.nh_1 : name, value === void 1 ? this.oh_1 : value);
  };
  Param.prototype.sh = function (name, value) {
    return new Param(name, value);
  };
  Param.prototype.th = function (name, value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      name = this.nh_1;
    if (!(($mask0 & 2) === 0))
      value = this.oh_1;
    return this.sh(name, value);
  };
  Param.prototype.toString = function () {
    return 'Param(name=' + this.nh_1 + ', value=' + this.oh_1 + ')';
  };
  Param.prototype.hashCode = function () {
    var result = getStringHashCode(this.nh_1);
    result = imul(result, 31) + getStringHashCode(this.oh_1) | 0;
    return result;
  };
  Param.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Param))
      return false;
    var tmp0_other_with_cast = other instanceof Param ? other : THROW_CCE();
    if (!(this.nh_1 === tmp0_other_with_cast.nh_1))
      return false;
    if (!(this.oh_1 === tmp0_other_with_cast.oh_1))
      return false;
    return true;
  };
  Param.$metadata$ = classMeta('Param', undefined, undefined, {0: $serializer_getInstance});
  Object.defineProperty(Param.prototype, 'name', {
    configurable: true,
    get: Param.prototype.rh
  });
  Object.defineProperty(Param.prototype, 'value', {
    configurable: true,
    get: Param.prototype.n1
  });
  function of(_this__u8e3s4, value) {
    return new Param(_this__u8e3s4, value);
  }
  function getValue(_this__u8e3s4, name) {
    var tmp$ret$1;
    $l$block: {
      var indexedObject = _this__u8e3s4;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          tmp$ret$0 = name === element.nh_1;
        }
        if (tmp$ret$0) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.oh_1;
  }
  function PathComponent() {
  }
  PathComponent.$metadata$ = interfaceMeta('PathComponent');
  function PshComponents() {
  }
  PshComponents.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PshComponents))
      return false;
    if (!contentEquals(this.getPath(), other.getPath()))
      return false;
    if (!contentEquals(this.getSearch(), other.getSearch()))
      return false;
    if (!(this.getHash() === other.getHash()))
      return false;
    return true;
  };
  PshComponents.prototype.hashCode = function () {
    var result = contentHashCode(this.getPath());
    result = imul(31, result) + contentHashCode(this.getSearch()) | 0;
    result = imul(31, result) + getStringHashCode(this.getHash()) | 0;
    return result;
  };
  PshComponents.prototype.toString = function () {
    return 'Action(path=' + contentToString(this.getPath()) + ', search=' + contentToString(this.getSearch()) + ', hash=' + this.getHash() + '))';
  };
  PshComponents.$metadata$ = classMeta('PshComponents', [PathComponent, SearchComponent, HashComponent]);
  function PshComponentsImpl_init_$Init$(mPath, mSearch, mHash, $mask0, $marker, $this) {
    if (!(($mask0 & 1) === 0))
      mPath = null;
    if (!(($mask0 & 2) === 0))
      mSearch = null;
    if (!(($mask0 & 4) === 0))
      mHash = null;
    PshComponentsImpl.call($this, mPath, mSearch, mHash);
    return $this;
  }
  function PshComponentsImpl_init_$Create$(mPath, mSearch, mHash, $mask0, $marker) {
    return PshComponentsImpl_init_$Init$(mPath, mSearch, mHash, $mask0, $marker, Object.create(PshComponentsImpl.prototype));
  }
  function PshComponentsImpl(mPath, mSearch, mHash) {
    var mPath_0 = mPath === void 1 ? null : mPath;
    var mSearch_0 = mSearch === void 1 ? null : mSearch;
    var mHash_0 = mHash === void 1 ? null : mHash;
    PshComponents.call(this);
    this.uh_1 = mPath_0;
    this.vh_1 = mSearch_0;
    this.wh_1 = mHash_0;
  }
  PshComponentsImpl.prototype.xh = function (_set____db54di) {
    this.uh_1 = _set____db54di;
  };
  PshComponentsImpl.prototype.yh = function () {
    return this.uh_1;
  };
  PshComponentsImpl.prototype.zh = function (_set____db54di) {
    this.vh_1 = _set____db54di;
  };
  PshComponentsImpl.prototype.ai = function () {
    return this.vh_1;
  };
  PshComponentsImpl.prototype.bi = function (_set____db54di) {
    this.wh_1 = _set____db54di;
  };
  PshComponentsImpl.prototype.ci = function () {
    return this.wh_1;
  };
  PshComponentsImpl.prototype.getPath = function () {
    var tmp0_elvis_lhs = this.uh_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        tmp$ret$0 = [];
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PshComponentsImpl.prototype.getSearch = function () {
    var tmp0_elvis_lhs = this.vh_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$0;
      {
        tmp$ret$0 = [];
      }
      tmp = tmp$ret$0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PshComponentsImpl.prototype.getHash = function () {
    var tmp0_elvis_lhs = this.wh_1;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  PshComponentsImpl.prototype.toString = function () {
    var tmp0_safe_receiver = this.uh_1;
    var tmp = tmp0_safe_receiver == null ? null : contentToString(tmp0_safe_receiver);
    var tmp1_safe_receiver = this.vh_1;
    return 'PshComponentsImpl(mPath=' + tmp + ', mSearch=' + (tmp1_safe_receiver == null ? null : contentToString(tmp1_safe_receiver)) + ', mHash=' + this.wh_1 + ')';
  };
  PshComponentsImpl.$metadata$ = classMeta('PshComponentsImpl', undefined, undefined, undefined, undefined, PshComponents.prototype);
  Object.defineProperty(PshComponentsImpl.prototype, 'mPath', {
    configurable: true,
    get: PshComponentsImpl.prototype.yh,
    set: PshComponentsImpl.prototype.xh
  });
  Object.defineProperty(PshComponentsImpl.prototype, 'mSearch', {
    configurable: true,
    get: PshComponentsImpl.prototype.ai,
    set: PshComponentsImpl.prototype.zh
  });
  Object.defineProperty(PshComponentsImpl.prototype, 'mHash', {
    configurable: true,
    get: PshComponentsImpl.prototype.ci,
    set: PshComponentsImpl.prototype.bi
  });
  function SearchComponent() {
  }
  SearchComponent.$metadata$ = interfaceMeta('SearchComponent');
  function Companion_0() {
    Companion_instance_0 = this;
    this.di_1 = 'utm_source';
    this.ei_1 = 'utm_medium';
    this.fi_1 = 'utm_campaign';
    this.gi_1 = 'utm_term';
    this.hi_1 = 'utm_content';
  }
  Companion_0.prototype.ii = function () {
    return this.di_1;
  };
  Companion_0.prototype.ji = function () {
    return this.ei_1;
  };
  Companion_0.prototype.ki = function () {
    return this.fi_1;
  };
  Companion_0.prototype.li = function () {
    return this.gi_1;
  };
  Companion_0.prototype.mi = function () {
    return this.hi_1;
  };
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.uri.data.Utm', this, 5);
    tmp0_serialDesc.ng('utm_source', false);
    tmp0_serialDesc.ng('utm_medium', false);
    tmp0_serialDesc.ng('utm_campaign', false);
    tmp0_serialDesc.ng('utm_term', false);
    tmp0_serialDesc.ng('utm_content', false);
    this.ni_1 = tmp0_serialDesc;
  }
  $serializer_0.prototype.ld = function () {
    return this.ni_1;
  };
  $serializer_0.prototype.kg = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_arrayOf;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer_0.prototype.gh = function (decoder) {
    var tmp0_desc = this.ni_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_local3 = null;
    var tmp8_local4 = null;
    var tmp9_input = decoder.hh(tmp0_desc);
    if (tmp9_input.kh()) {
      tmp4_local0 = tmp9_input.jh(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp9_input.oi(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp9_input.oi(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
      tmp7_local3 = tmp9_input.oi(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
      tmp3_bitMask0 = tmp3_bitMask0 | 8;
      tmp8_local4 = tmp9_input.oi(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
      tmp3_bitMask0 = tmp3_bitMask0 | 16;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp9_input.ih(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp9_input.jh(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp9_input.oi(tmp0_desc, 1, StringSerializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp9_input.oi(tmp0_desc, 2, StringSerializer_getInstance(), tmp6_local2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          case 3:
            tmp7_local3 = tmp9_input.oi(tmp0_desc, 3, StringSerializer_getInstance(), tmp7_local3);
            tmp3_bitMask0 = tmp3_bitMask0 | 8;
            break;
          case 4:
            tmp8_local4 = tmp9_input.oi(tmp0_desc, 4, StringSerializer_getInstance(), tmp8_local4);
            tmp3_bitMask0 = tmp3_bitMask0 | 16;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp9_input.lh(tmp0_desc);
    return Utm_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, tmp7_local3, tmp8_local4, null);
  };
  $serializer_0.prototype.pi = function (encoder, value) {
    var tmp0_desc = this.ni_1;
    var tmp1_output = encoder.hh(tmp0_desc);
    tmp1_output.ph(tmp0_desc, 0, value.qi_1);
    tmp1_output.vi(tmp0_desc, 1, StringSerializer_getInstance(), value.ri_1);
    tmp1_output.vi(tmp0_desc, 2, StringSerializer_getInstance(), value.si_1);
    tmp1_output.vi(tmp0_desc, 3, StringSerializer_getInstance(), value.ti_1);
    tmp1_output.vi(tmp0_desc, 4, StringSerializer_getInstance(), value.ui_1);
    tmp1_output.lh(tmp0_desc);
  };
  $serializer_0.prototype.qh = function (encoder, value) {
    return this.pi(encoder, value instanceof Utm ? value : THROW_CCE());
  };
  $serializer_0.$metadata$ = objectMeta('$serializer', [GeneratedSerializer]);
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Utm_init_$Init$(seen1, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, serializationConstructorMarker, $this) {
    if (!(31 === (31 & seen1)))
      throwMissingFieldException(seen1, 31, $serializer_getInstance_0().ni_1);
    $this.qi_1 = utmSource;
    $this.ri_1 = utmMedium;
    $this.si_1 = utmCampaign;
    $this.ti_1 = utmTerm;
    $this.ui_1 = utmContent;
    return $this;
  }
  function Utm_init_$Create$(seen1, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, serializationConstructorMarker) {
    return Utm_init_$Init$(seen1, utmSource, utmMedium, utmCampaign, utmTerm, utmContent, serializationConstructorMarker, Object.create(Utm.prototype));
  }
  function Utm(utmSource, utmMedium, utmCampaign, utmTerm, utmContent) {
    Companion_getInstance_0();
    this.qi_1 = utmSource;
    this.ri_1 = utmMedium;
    this.si_1 = utmCampaign;
    this.ti_1 = utmTerm;
    this.ui_1 = utmContent;
  }
  Utm.prototype.wi = function () {
    return this.qi_1;
  };
  Utm.prototype.xi = function () {
    return this.ri_1;
  };
  Utm.prototype.yi = function () {
    return this.si_1;
  };
  Utm.prototype.zi = function () {
    return this.ti_1;
  };
  Utm.prototype.aj = function () {
    return this.ui_1;
  };
  Utm.prototype.getSearch = function () {
    var tmp$ret$8;
    {
      var tmp$ret$7;
      {
        Companion_getInstance_0();
        var tmp0_apply = mutableListOf([of('utm_source', this.qi_1)]);
        {
        }
        {
          var tmp0_safe_receiver = this.ri_1;
          if (tmp0_safe_receiver == null)
            null;
          else {
            var tmp$ret$1;
            {
              {
              }
              var tmp$ret$0;
              {
                Companion_getInstance_0();
                tmp$ret$0 = tmp0_apply.b(of('utm_medium', tmp0_safe_receiver));
              }
              tmp$ret$1 = tmp$ret$0;
            }
          }
          var tmp1_safe_receiver = this.si_1;
          if (tmp1_safe_receiver == null)
            null;
          else {
            var tmp$ret$3;
            {
              {
              }
              var tmp$ret$2;
              {
                Companion_getInstance_0();
                tmp$ret$2 = tmp0_apply.b(of('utm_campaign', tmp1_safe_receiver));
              }
              tmp$ret$3 = tmp$ret$2;
            }
          }
          var tmp2_safe_receiver = this.ti_1;
          if (tmp2_safe_receiver == null)
            null;
          else {
            var tmp$ret$5;
            {
              {
              }
              var tmp$ret$4;
              {
                Companion_getInstance_0();
                tmp$ret$4 = tmp0_apply.b(of('utm_term', tmp2_safe_receiver));
              }
              tmp$ret$5 = tmp$ret$4;
            }
          }
          var tmp3_safe_receiver = this.ui_1;
          if (tmp3_safe_receiver == null)
            null;
          else {
            var tmp$ret$6;
            {
              {
              }
              Companion_getInstance_0();
              tmp0_apply.b(of('utm_content', tmp3_safe_receiver));
              tmp$ret$6 = Unit_getInstance();
            }
          }
        }
        tmp$ret$7 = tmp0_apply;
      }
      var tmp1_toTypedArray = tmp$ret$7;
      tmp$ret$8 = copyToArray(tmp1_toTypedArray);
    }
    return tmp$ret$8;
  };
  Utm.prototype.medium = function (value) {
    return this.bj(null, value, null, null, null, 29, null);
  };
  Utm.prototype.campaign = function (value) {
    return this.bj(null, null, value, null, null, 27, null);
  };
  Utm.prototype.term = function (value) {
    return this.bj(null, null, null, value, null, 23, null);
  };
  Utm.prototype.content = function (value) {
    return this.bj(null, null, null, null, value, 15, null);
  };
  Utm.prototype.component1 = function () {
    return this.qi_1;
  };
  Utm.prototype.component2 = function () {
    return this.ri_1;
  };
  Utm.prototype.component3 = function () {
    return this.si_1;
  };
  Utm.prototype.component4 = function () {
    return this.ti_1;
  };
  Utm.prototype.component5 = function () {
    return this.ui_1;
  };
  Utm.prototype.copy = function (utmSource, utmMedium, utmCampaign, utmTerm, utmContent) {
    return this.cj(utmSource === void 1 ? this.qi_1 : utmSource, utmMedium === void 1 ? this.ri_1 : utmMedium, utmCampaign === void 1 ? this.si_1 : utmCampaign, utmTerm === void 1 ? this.ti_1 : utmTerm, utmContent === void 1 ? this.ui_1 : utmContent);
  };
  Utm.prototype.cj = function (utmSource, utmMedium, utmCampaign, utmTerm, utmContent) {
    return new Utm(utmSource, utmMedium, utmCampaign, utmTerm, utmContent);
  };
  Utm.prototype.bj = function (utmSource, utmMedium, utmCampaign, utmTerm, utmContent, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      utmSource = this.qi_1;
    if (!(($mask0 & 2) === 0))
      utmMedium = this.ri_1;
    if (!(($mask0 & 4) === 0))
      utmCampaign = this.si_1;
    if (!(($mask0 & 8) === 0))
      utmTerm = this.ti_1;
    if (!(($mask0 & 16) === 0))
      utmContent = this.ui_1;
    return this.cj(utmSource, utmMedium, utmCampaign, utmTerm, utmContent);
  };
  Utm.prototype.toString = function () {
    return 'Utm(utmSource=' + this.qi_1 + ', utmMedium=' + this.ri_1 + ', utmCampaign=' + this.si_1 + ', utmTerm=' + this.ti_1 + ', utmContent=' + this.ui_1 + ')';
  };
  Utm.prototype.hashCode = function () {
    var result = getStringHashCode(this.qi_1);
    result = imul(result, 31) + (this.ri_1 == null ? 0 : getStringHashCode(this.ri_1)) | 0;
    result = imul(result, 31) + (this.si_1 == null ? 0 : getStringHashCode(this.si_1)) | 0;
    result = imul(result, 31) + (this.ti_1 == null ? 0 : getStringHashCode(this.ti_1)) | 0;
    result = imul(result, 31) + (this.ui_1 == null ? 0 : getStringHashCode(this.ui_1)) | 0;
    return result;
  };
  Utm.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Utm))
      return false;
    var tmp0_other_with_cast = other instanceof Utm ? other : THROW_CCE();
    if (!(this.qi_1 === tmp0_other_with_cast.qi_1))
      return false;
    if (!(this.ri_1 == tmp0_other_with_cast.ri_1))
      return false;
    if (!(this.si_1 == tmp0_other_with_cast.si_1))
      return false;
    if (!(this.ti_1 == tmp0_other_with_cast.ti_1))
      return false;
    if (!(this.ui_1 == tmp0_other_with_cast.ui_1))
      return false;
    return true;
  };
  Utm.$metadata$ = classMeta('Utm', [SearchComponent], undefined, {0: $serializer_getInstance_0});
  Object.defineProperty(Utm.prototype, 'utmSource', {
    configurable: true,
    get: Utm.prototype.wi
  });
  Object.defineProperty(Utm.prototype, 'utmMedium', {
    configurable: true,
    get: Utm.prototype.xi
  });
  Object.defineProperty(Utm.prototype, 'utmCampaign', {
    configurable: true,
    get: Utm.prototype.yi
  });
  Object.defineProperty(Utm.prototype, 'utmTerm', {
    configurable: true,
    get: Utm.prototype.zi
  });
  Object.defineProperty(Utm.prototype, 'utmContent', {
    configurable: true,
    get: Utm.prototype.aj
  });
  function utm(utmSource) {
    return new Utm(utmSource, null, null, null, null);
  }
  function parseUtm(searchComponent) {
    var tmp$ret$1;
    {
      var tmp0_with = searchComponent.getSearch();
      {
      }
      var tmp$ret$0;
      {
        Companion_getInstance_0();
        var tmp0_elvis_lhs = getValue(tmp0_with, 'utm_source');
        var tmp = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
        Companion_getInstance_0();
        var tmp_0 = getValue(tmp0_with, 'utm_medium');
        Companion_getInstance_0();
        var tmp_1 = getValue(tmp0_with, 'utm_campaign');
        Companion_getInstance_0();
        var tmp_2 = getValue(tmp0_with, 'utm_term');
        Companion_getInstance_0();
        tmp$ret$0 = new Utm(tmp, tmp_0, tmp_1, tmp_2, getValue(tmp0_with, 'utm_content'));
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function build(_this__u8e3s4) {
    var base = _this__u8e3s4.ah_1 + ':';
    var tmp$ret$0;
    {
      var tmp0_isNotEmpty = _this__u8e3s4.bh_1;
      tmp$ret$0 = charSequenceLength(tmp0_isNotEmpty) > 0;
    }
    if (tmp$ret$0) {
      base = base + ('//' + _this__u8e3s4.bh_1);
    }
    base = base + toPath(_this__u8e3s4.getPath());
    var tmp$ret$1;
    {
      var tmp1_also = new URL(base);
      {
      }
      {
        tmp1_also.search = toSearch(_this__u8e3s4.getSearch());
        tmp1_also.hash = toHash(_this__u8e3s4.getHash());
      }
      tmp$ret$1 = tmp1_also;
    }
    return toString(tmp$ret$1);
  }
  function toComponents(_this__u8e3s4) {
    var tmp$ret$1;
    {
      var tmp0_with = new URL(_this__u8e3s4);
      {
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = new UriComponents(dropLast(tmp0_with.protocol, 1), tmp0_with.host, toPathComponent(tmp0_with.pathname), toSearchComponent(tmp0_with.search), toHashComponent(tmp0_with.hash));
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  }
  function toPath(_this__u8e3s4) {
    return joinToString$default(_this__u8e3s4, '/', '/', null, 0, null, null, 60, null);
  }
  function toSearch(_this__u8e3s4) {
    return joinToString$default(_this__u8e3s4, '&', null, null, 0, null, toSearch$lambda(), 30, null);
  }
  function toHash(_this__u8e3s4) {
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
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
      var tmp$ret$4;
      {
        {
        }
        var tmp$ret$3;
        {
          tmp$ret$3 = '#' + encode(tmp0_safe_receiver);
        }
        tmp$ret$4 = tmp$ret$3;
      }
      tmp_0 = tmp$ret$4;
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function toPathComponent(_this__u8e3s4) {
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp_1 = charArrayOf([_Char___init__impl__6a9atx(47)]);
      tmp_0 = split$default(tmp1_safe_receiver, tmp_1, false, 0, 6, null);
    }
    var tmp2_safe_receiver = tmp_0;
    var tmp_2;
    if (tmp2_safe_receiver == null) {
      tmp_2 = null;
    } else {
      var tmp$ret$3;
      {
        tmp$ret$3 = copyToArray(tmp2_safe_receiver);
      }
      tmp_2 = tmp$ret$3;
    }
    var tmp3_elvis_lhs = tmp_2;
    var tmp_3;
    if (tmp3_elvis_lhs == null) {
      var tmp$ret$4;
      {
        tmp$ret$4 = [];
      }
      tmp_3 = tmp$ret$4;
    } else {
      tmp_3 = tmp3_elvis_lhs;
    }
    return tmp_3;
  }
  function toSearchComponent(_this__u8e3s4) {
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
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
        {
        }
        tmp$ret$3 = decode(tmp0_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : drop(tmp1_safe_receiver, 1);
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      var tmp_2 = charArrayOf([_Char___init__impl__6a9atx(38)]);
      tmp_1 = split$default(tmp2_safe_receiver, tmp_2, false, 0, 6, null);
    }
    var tmp3_safe_receiver = tmp_1;
    var tmp_3;
    if (tmp3_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp$ret$10;
      {
        var tmp$ret$9;
        {
          var tmp0_mapTo = ArrayList_init_$Create$(collectionSizeOrDefault(tmp3_safe_receiver, 10));
          var tmp0_iterator = tmp3_safe_receiver.g();
          while (tmp0_iterator.i()) {
            var item = tmp0_iterator.j();
            var tmp$ret$8;
            {
              var tmp_4 = _Char___init__impl__6a9atx(61);
              var idx = indexOf$default(item, tmp_4, 0, false, 6, null);
              var tmp_5;
              if (idx >= 0) {
                var tmp$ret$5;
                {
                  var tmp$ret$4;
                  {
                    tmp$ret$4 = item;
                  }
                  tmp$ret$5 = tmp$ret$4.substring(0, idx);
                }
                var tmp_6 = tmp$ret$5;
                var tmp$ret$7;
                {
                  var tmp0_substring = idx + 1 | 0;
                  var tmp$ret$6;
                  {
                    tmp$ret$6 = item;
                  }
                  tmp$ret$7 = tmp$ret$6.substring(tmp0_substring);
                }
                tmp_5 = of(tmp_6, tmp$ret$7);
              } else {
                tmp_5 = of(item, '');
              }
              tmp$ret$8 = tmp_5;
            }
            tmp0_mapTo.b(tmp$ret$8);
          }
          tmp$ret$9 = tmp0_mapTo;
        }
        tmp$ret$10 = tmp$ret$9;
      }
      tmp_3 = tmp$ret$10;
    }
    var tmp4_safe_receiver = tmp_3;
    var tmp_7;
    if (tmp4_safe_receiver == null) {
      tmp_7 = null;
    } else {
      var tmp$ret$11;
      {
        tmp$ret$11 = copyToArray(tmp4_safe_receiver);
      }
      tmp_7 = tmp$ret$11;
    }
    var tmp5_elvis_lhs = tmp_7;
    var tmp_8;
    if (tmp5_elvis_lhs == null) {
      var tmp$ret$12;
      {
        tmp$ret$12 = [];
      }
      tmp_8 = tmp$ret$12;
    } else {
      tmp_8 = tmp5_elvis_lhs;
    }
    return tmp_8;
  }
  function toHashComponent(_this__u8e3s4) {
    var tmp$ret$2;
    {
      {
      }
      var tmp;
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = charSequenceLength(_this__u8e3s4) > 0;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      if (tmp$ret$1) {
        tmp = _this__u8e3s4;
      } else {
        tmp = null;
      }
      tmp$ret$2 = tmp;
    }
    var tmp0_safe_receiver = tmp$ret$2;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$3;
      {
        {
        }
        tmp$ret$3 = decode(tmp1_safe_receiver);
      }
      tmp_0 = tmp$ret$3;
    }
    var tmp2_elvis_lhs = tmp_0;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  function encode(string) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = encodeURIComponent(string);
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function decode(string) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = decodeURIComponent(string);
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function toSearch$lambda() {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var name = _name_for_destructuring_parameter_0__wldtmu.component1();
      var value = _name_for_destructuring_parameter_0__wldtmu.component2();
      var tmp$ret$2;
      {
        {
        }
        var tmp;
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            tmp$ret$0 = !isBlank(value);
          }
          tmp$ret$1 = tmp$ret$0;
        }
        if (tmp$ret$1) {
          tmp = value;
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
        var tmp$ret$4;
        {
          {
          }
          var tmp$ret$3;
          {
            tmp$ret$3 = encode(name) + '=' + encode(tmp0_safe_receiver);
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp_0 = tmp$ret$4;
      }
      var tmp1_elvis_lhs = tmp_0;
      return tmp1_elvis_lhs == null ? encode(name) : tmp1_elvis_lhs;
    };
  }
  //region block: post-declaration
  $serializer.prototype.lg = typeParametersSerializers;
  $serializer_0.prototype.lg = typeParametersSerializers;
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    $com$motorro$keeplink$uri$data.Param = Param;
    $com$motorro$keeplink$uri$data.Param.Param_init_$Create$ = Param_init_$Create$;
    Object.defineProperty($com$motorro$keeplink$uri$data.Param, 'Companion', {
      configurable: true,
      get: Companion_getInstance
    });
    Object.defineProperty($com$motorro$keeplink$uri$data.Param, '$serializer', {
      configurable: true,
      get: $serializer_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    $com$motorro$keeplink$uri$data.PshComponents = PshComponents;
    $com$motorro$keeplink$uri$data.PshComponentsImpl = PshComponentsImpl;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$uri = $com$motorro$keeplink.uri || ($com$motorro$keeplink.uri = {});
    var $com$motorro$keeplink$uri$data = $com$motorro$keeplink$uri.data || ($com$motorro$keeplink$uri.data = {});
    $com$motorro$keeplink$uri$data.Utm = Utm;
    $com$motorro$keeplink$uri$data.Utm.Utm_init_$Create$ = Utm_init_$Create$;
    Object.defineProperty($com$motorro$keeplink$uri$data.Utm, '$serializer', {
      configurable: true,
      get: $serializer_getInstance_0
    });
    $com$motorro$keeplink$uri$data.utm = utm;
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ComponentValue;
  _.$_$.b = PshComponents;
  _.$_$.c = getValue;
  _.$_$.d = of;
  _.$_$.e = parseUtm;
  _.$_$.f = utm;
  _.$_$.g = build;
  _.$_$.h = toComponents;
  _.$_$.i = UriComponents_init_$Create$;
  _.$_$.j = $serializer_getInstance_0;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js')));

//# sourceMappingURL=uri.js.map