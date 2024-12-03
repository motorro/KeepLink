(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z2;
  var objectCreate = kotlin_kotlin.$_$.y2;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.q3;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var contentEquals = kotlin_kotlin.$_$.o1;
  var getStringHashCode = kotlin_kotlin.$_$.r2;
  var contentHashCode = kotlin_kotlin.$_$.p1;
  var initMetadataForClass = kotlin_kotlin.$_$.t2;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.v2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.u2;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var initMetadataForObject = kotlin_kotlin.$_$.w2;
  var defineProp = kotlin_kotlin.$_$.n2;
  var contentToString = kotlin_kotlin.$_$.q1;
  var get_nullable = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.e;
  var isBlank = kotlin_kotlin.$_$.h3;
  var mutableListOf = kotlin_kotlin.$_$.c2;
  var copyToArray = kotlin_kotlin.$_$.r1;
  var charSequenceLength = kotlin_kotlin.$_$.m2;
  var toString = kotlin_kotlin.$_$.a3;
  var dropLast = kotlin_kotlin.$_$.d3;
  var joinToString = kotlin_kotlin.$_$.x1;
  var drop = kotlin_kotlin.$_$.e3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p;
  var charArrayOf = kotlin_kotlin.$_$.l2;
  var split = kotlin_kotlin.$_$.j3;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.n1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.e;
  var indexOf = kotlin_kotlin.$_$.g3;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(PathComponent, 'PathComponent');
  initMetadataForInterface(SearchComponent, 'SearchComponent');
  initMetadataForInterface(HashComponent, 'HashComponent');
  initMetadataForClass(PshComponents, 'PshComponents', VOID, VOID, [PathComponent, SearchComponent, HashComponent]);
  initMetadataForClass(UriComponents, 'UriComponents', VOID, PshComponents);
  initMetadataForInterface(ComponentValue, 'ComponentValue');
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Param, 'Param', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForClass(PshComponentsImpl, 'PshComponentsImpl', PshComponentsImpl, PshComponents);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(Utm, 'Utm', VOID, VOID, [SearchComponent], VOID, VOID, {0: $serializer_getInstance_0});
  //endregion
  function UriComponents_init_$Init$(scheme, host, actionComponents, $this) {
    UriComponents.call($this, scheme, host, actionComponents.getPath(), actionComponents.getSearch(), actionComponents.getHash());
    return $this;
  }
  function UriComponents_init_$Create$(scheme, host, actionComponents) {
    return UriComponents_init_$Init$(scheme, host, actionComponents, objectCreate(protoOf(UriComponents)));
  }
  function UriComponents(scheme, host, path, search, hash) {
    PshComponents.call(this);
    this.bi_1 = scheme;
    this.ci_1 = host;
    this.di_1 = path;
    this.ei_1 = search;
    this.fi_1 = hash;
  }
  protoOf(UriComponents).getPath = function () {
    return this.di_1;
  };
  protoOf(UriComponents).getSearch = function () {
    return this.ei_1;
  };
  protoOf(UriComponents).getHash = function () {
    return this.fi_1;
  };
  protoOf(UriComponents).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof UriComponents))
      THROW_CCE();
    if (!(this.bi_1 === other.bi_1))
      return false;
    if (!(this.ci_1 === other.ci_1))
      return false;
    if (!contentEquals(this.getPath(), other.getPath()))
      return false;
    if (!contentEquals(this.getSearch(), other.getSearch()))
      return false;
    if (!(this.getHash() === other.getHash()))
      return false;
    return true;
  };
  protoOf(UriComponents).hashCode = function () {
    var result = getStringHashCode(this.bi_1);
    result = imul(31, result) + getStringHashCode(this.ci_1) | 0;
    result = imul(31, result) + contentHashCode(this.getPath()) | 0;
    result = imul(31, result) + contentHashCode(this.getSearch()) | 0;
    result = imul(31, result) + getStringHashCode(this.getHash()) | 0;
    return result;
  };
  function ComponentValue() {
  }
  function HashComponent() {
  }
  function Companion() {
  }
  protoOf(Companion).gi = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.uri.data.Param', this, 2);
    tmp0_serialDesc.xg('name', false);
    tmp0_serialDesc.xg('value', false);
    this.hi_1 = tmp0_serialDesc;
  }
  protoOf($serializer).qd = function () {
    return this.hi_1;
  };
  protoOf($serializer).zg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function Param(name, value) {
    this.name = name;
    this.value = value;
  }
  protoOf(Param).ii = function () {
    return this.name;
  };
  protoOf(Param).j1 = function () {
    return this.value;
  };
  protoOf(Param).y9 = function () {
    return this.name;
  };
  protoOf(Param).z9 = function () {
    return this.value;
  };
  protoOf(Param).ji = function (name, value) {
    return new Param(name, value);
  };
  protoOf(Param).copy = function (name, value, $super) {
    name = name === VOID ? this.name : name;
    value = value === VOID ? this.value : value;
    return this.ji(name, value);
  };
  protoOf(Param).toString = function () {
    return 'Param(name=' + this.name + ', value=' + this.value + ')';
  };
  protoOf(Param).hashCode = function () {
    var result = getStringHashCode(this.name);
    result = imul(result, 31) + getStringHashCode(this.value) | 0;
    return result;
  };
  protoOf(Param).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Param))
      return false;
    var tmp0_other_with_cast = other instanceof Param ? other : THROW_CCE();
    if (!(this.name === tmp0_other_with_cast.name))
      return false;
    if (!(this.value === tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function of(_this__u8e3s4, value) {
    return new Param(_this__u8e3s4, value);
  }
  function getValue(_this__u8e3s4, name) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var inductionVariable = 0;
      var last = _this__u8e3s4.length;
      while (inductionVariable < last) {
        var element = _this__u8e3s4[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'com.motorro.keeplink.uri.data.getValue.<anonymous>' call
        if (name === element.name) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.value;
  }
  function PathComponent() {
  }
  function PshComponents() {
  }
  protoOf(PshComponents).equals = function (other) {
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
  protoOf(PshComponents).hashCode = function () {
    var result = contentHashCode(this.getPath());
    result = imul(31, result) + contentHashCode(this.getSearch()) | 0;
    result = imul(31, result) + getStringHashCode(this.getHash()) | 0;
    return result;
  };
  protoOf(PshComponents).toString = function () {
    return 'Action(path=' + contentToString(this.getPath()) + ', search=' + contentToString(this.getSearch()) + ', hash=' + this.getHash() + '))';
  };
  function PshComponentsImpl(mPath, mSearch, mHash) {
    mPath = mPath === VOID ? null : mPath;
    mSearch = mSearch === VOID ? null : mSearch;
    mHash = mHash === VOID ? null : mHash;
    PshComponents.call(this);
    this.mPath = mPath;
    this.mSearch = mSearch;
    this.mHash = mHash;
  }
  protoOf(PshComponentsImpl).ki = function (_set____db54di) {
    this.mPath = _set____db54di;
  };
  protoOf(PshComponentsImpl).li = function () {
    return this.mPath;
  };
  protoOf(PshComponentsImpl).mi = function (_set____db54di) {
    this.mSearch = _set____db54di;
  };
  protoOf(PshComponentsImpl).ni = function () {
    return this.mSearch;
  };
  protoOf(PshComponentsImpl).oi = function (_set____db54di) {
    this.mHash = _set____db54di;
  };
  protoOf(PshComponentsImpl).pi = function () {
    return this.mHash;
  };
  protoOf(PshComponentsImpl).getPath = function () {
    var tmp0_elvis_lhs = this.mPath;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PshComponentsImpl).getSearch = function () {
    var tmp0_elvis_lhs = this.mSearch;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(PshComponentsImpl).getHash = function () {
    var tmp0_elvis_lhs = this.mHash;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(PshComponentsImpl).toString = function () {
    var tmp0_safe_receiver = this.mPath;
    var tmp = tmp0_safe_receiver == null ? null : contentToString(tmp0_safe_receiver);
    var tmp1_safe_receiver = this.mSearch;
    return 'PshComponentsImpl(mPath=' + tmp + ', mSearch=' + (tmp1_safe_receiver == null ? null : contentToString(tmp1_safe_receiver)) + ', mHash=' + this.mHash + ')';
  };
  function SearchComponent() {
  }
  function Companion_0() {
    this.qi_1 = 'utm_source';
    this.ri_1 = 'utm_medium';
    this.si_1 = 'utm_campaign';
    this.ti_1 = 'utm_term';
    this.ui_1 = 'utm_content';
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.uri.data.Utm', this, 5);
    tmp0_serialDesc.xg('utm_source', false);
    tmp0_serialDesc.xg('utm_medium', false);
    tmp0_serialDesc.xg('utm_campaign', false);
    tmp0_serialDesc.xg('utm_term', false);
    tmp0_serialDesc.xg('utm_content', false);
    this.vi_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).qd = function () {
    return this.vi_1;
  };
  protoOf($serializer_0).zg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance()), get_nullable(StringSerializer_getInstance())];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function Utm(utmSource, utmMedium, utmCampaign, utmTerm, utmContent) {
    this.utmSource = utmSource;
    this.utmMedium = utmMedium;
    this.utmCampaign = utmCampaign;
    this.utmTerm = utmTerm;
    this.utmContent = utmContent;
  }
  protoOf(Utm).wi = function () {
    return this.utmSource;
  };
  protoOf(Utm).xi = function () {
    return this.utmMedium;
  };
  protoOf(Utm).yi = function () {
    return this.utmCampaign;
  };
  protoOf(Utm).zi = function () {
    return this.utmTerm;
  };
  protoOf(Utm).aj = function () {
    return this.utmContent;
  };
  protoOf(Utm).getSearch = function () {
    var tmp;
    // Inline function 'kotlin.text.isNotBlank' call
    var this_0 = this.utmSource;
    if (!isBlank(this_0)) {
      // Inline function 'kotlin.apply' call
      var this_1 = mutableListOf([of('utm_source', this.utmSource)]);
      // Inline function 'com.motorro.keeplink.uri.data.Utm.getSearch.<anonymous>' call
      var tmp0_safe_receiver = this.utmMedium;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.motorro.keeplink.uri.data.Utm.getSearch.<anonymous>.<anonymous>' call
        this_1.e(of('utm_medium', tmp0_safe_receiver));
      }
      var tmp1_safe_receiver = this.utmCampaign;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.motorro.keeplink.uri.data.Utm.getSearch.<anonymous>.<anonymous>' call
        this_1.e(of('utm_campaign', tmp1_safe_receiver));
      }
      var tmp2_safe_receiver = this.utmTerm;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.motorro.keeplink.uri.data.Utm.getSearch.<anonymous>.<anonymous>' call
        this_1.e(of('utm_term', tmp2_safe_receiver));
      }
      var tmp3_safe_receiver = this.utmContent;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'com.motorro.keeplink.uri.data.Utm.getSearch.<anonymous>.<anonymous>' call
        this_1.e(of('utm_content', tmp3_safe_receiver));
      }
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp = copyToArray(this_1);
    } else {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    }
    return tmp;
  };
  protoOf(Utm).medium = function (value) {
    return this.copy(VOID, value);
  };
  protoOf(Utm).campaign = function (value) {
    return this.copy(VOID, VOID, value);
  };
  protoOf(Utm).term = function (value) {
    return this.copy(VOID, VOID, VOID, value);
  };
  protoOf(Utm).content = function (value) {
    return this.copy(VOID, VOID, VOID, VOID, value);
  };
  protoOf(Utm).y9 = function () {
    return this.utmSource;
  };
  protoOf(Utm).z9 = function () {
    return this.utmMedium;
  };
  protoOf(Utm).bj = function () {
    return this.utmCampaign;
  };
  protoOf(Utm).cj = function () {
    return this.utmTerm;
  };
  protoOf(Utm).dj = function () {
    return this.utmContent;
  };
  protoOf(Utm).ej = function (utmSource, utmMedium, utmCampaign, utmTerm, utmContent) {
    return new Utm(utmSource, utmMedium, utmCampaign, utmTerm, utmContent);
  };
  protoOf(Utm).copy = function (utmSource, utmMedium, utmCampaign, utmTerm, utmContent, $super) {
    utmSource = utmSource === VOID ? this.utmSource : utmSource;
    utmMedium = utmMedium === VOID ? this.utmMedium : utmMedium;
    utmCampaign = utmCampaign === VOID ? this.utmCampaign : utmCampaign;
    utmTerm = utmTerm === VOID ? this.utmTerm : utmTerm;
    utmContent = utmContent === VOID ? this.utmContent : utmContent;
    return this.ej(utmSource, utmMedium, utmCampaign, utmTerm, utmContent);
  };
  protoOf(Utm).toString = function () {
    return 'Utm(utmSource=' + this.utmSource + ', utmMedium=' + this.utmMedium + ', utmCampaign=' + this.utmCampaign + ', utmTerm=' + this.utmTerm + ', utmContent=' + this.utmContent + ')';
  };
  protoOf(Utm).hashCode = function () {
    var result = getStringHashCode(this.utmSource);
    result = imul(result, 31) + (this.utmMedium == null ? 0 : getStringHashCode(this.utmMedium)) | 0;
    result = imul(result, 31) + (this.utmCampaign == null ? 0 : getStringHashCode(this.utmCampaign)) | 0;
    result = imul(result, 31) + (this.utmTerm == null ? 0 : getStringHashCode(this.utmTerm)) | 0;
    result = imul(result, 31) + (this.utmContent == null ? 0 : getStringHashCode(this.utmContent)) | 0;
    return result;
  };
  protoOf(Utm).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Utm))
      return false;
    var tmp0_other_with_cast = other instanceof Utm ? other : THROW_CCE();
    if (!(this.utmSource === tmp0_other_with_cast.utmSource))
      return false;
    if (!(this.utmMedium == tmp0_other_with_cast.utmMedium))
      return false;
    if (!(this.utmCampaign == tmp0_other_with_cast.utmCampaign))
      return false;
    if (!(this.utmTerm == tmp0_other_with_cast.utmTerm))
      return false;
    if (!(this.utmContent == tmp0_other_with_cast.utmContent))
      return false;
    return true;
  };
  function utm(utmSource) {
    return new Utm(utmSource, null, null, null, null);
  }
  function parseUtm(searchComponent) {
    // Inline function 'kotlin.with' call
    // Inline function 'com.motorro.keeplink.uri.data.parseUtm.<anonymous>' call
    var $this$with = searchComponent.getSearch();
    var tmp0_elvis_lhs = getValue($this$with, 'utm_source');
    return new Utm(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs, getValue($this$with, 'utm_medium'), getValue($this$with, 'utm_campaign'), getValue($this$with, 'utm_term'), getValue($this$with, 'utm_content'));
  }
  function build(_this__u8e3s4) {
    var base = _this__u8e3s4.bi_1 + ':';
    // Inline function 'kotlin.text.isNotEmpty' call
    var this_0 = _this__u8e3s4.ci_1;
    if (charSequenceLength(this_0) > 0) {
      base = base + ('//' + _this__u8e3s4.ci_1);
    }
    base = base + toPath(_this__u8e3s4.getPath());
    // Inline function 'kotlin.also' call
    var this_1 = new URL(base);
    // Inline function 'com.motorro.keeplink.uri.build.<anonymous>' call
    this_1.search = toSearch(_this__u8e3s4.getSearch());
    this_1.hash = toHash(_this__u8e3s4.getHash());
    return toString(this_1);
  }
  function toComponents(_this__u8e3s4) {
    // Inline function 'kotlin.with' call
    // Inline function 'com.motorro.keeplink.uri.toComponents.<anonymous>' call
    var $this$with = new URL(_this__u8e3s4);
    return new UriComponents(dropLast($this$with.protocol, 1), $this$with.host, toPathComponent($this$with.pathname), toSearchComponent($this$with.search), toHashComponent($this$with.hash));
  }
  function toPath(_this__u8e3s4) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toPath.<anonymous>' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(_this__u8e3s4.length === 0)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : joinToString(tmp0_safe_receiver, '/', '/');
    return tmp1_elvis_lhs == null ? '/' : tmp1_elvis_lhs;
  }
  function toSearch(_this__u8e3s4) {
    return joinToString(_this__u8e3s4, '&', VOID, VOID, VOID, VOID, toSearch$lambda);
  }
  function toHash(_this__u8e3s4) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toHash.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.uri.toHash.<anonymous>' call
      tmp_0 = '#' + encode(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs;
  }
  function toPathComponent(_this__u8e3s4) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toPathComponent.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : split(tmp1_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(47)]));
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_0 = copyToArray(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_0;
    var tmp_1;
    if (tmp3_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_1 = [];
    } else {
      tmp_1 = tmp3_elvis_lhs;
    }
    return tmp_1;
  }
  function toSearchComponent(_this__u8e3s4) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toSearchComponent.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.uri.toSearchComponent.stub_for_inlining' call
      tmp_0 = decode(tmp0_safe_receiver);
    }
    var tmp1_safe_receiver = tmp_0;
    var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : drop(tmp1_safe_receiver, 1);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : split(tmp2_safe_receiver, charArrayOf([_Char___init__impl__6a9atx(38)]));
    var tmp_1;
    if (tmp3_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tmp3_safe_receiver, 10));
      var _iterator__ex2g4s = tmp3_safe_receiver.j();
      while (_iterator__ex2g4s.k()) {
        var item = _iterator__ex2g4s.l();
        // Inline function 'com.motorro.keeplink.uri.toSearchComponent.<anonymous>' call
        var idx = indexOf(item, _Char___init__impl__6a9atx(61));
        var tmp_2;
        if (idx >= 0) {
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_3 = item.substring(0, idx);
          // Inline function 'kotlin.text.substring' call
          var startIndex = idx + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var tmp$ret$8 = item.substring(startIndex);
          tmp_2 = of(tmp_3, tmp$ret$8);
        } else {
          tmp_2 = of(item, '');
        }
        var tmp$ret$9 = tmp_2;
        destination.e(tmp$ret$9);
      }
      tmp_1 = destination;
    }
    var tmp4_safe_receiver = tmp_1;
    var tmp_4;
    if (tmp4_safe_receiver == null) {
      tmp_4 = null;
    } else {
      // Inline function 'kotlin.collections.toTypedArray' call
      tmp_4 = copyToArray(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_4;
    var tmp_5;
    if (tmp5_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp_5 = [];
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    return tmp_5;
  }
  function toHashComponent(_this__u8e3s4) {
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toHashComponent.<anonymous>' call
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      tmp = _this__u8e3s4;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : drop(tmp0_safe_receiver, 1);
    var tmp_0;
    if (tmp1_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.uri.toHashComponent.stub_for_inlining' call
      tmp_0 = decode(tmp1_safe_receiver);
    }
    var tmp2_elvis_lhs = tmp_0;
    return tmp2_elvis_lhs == null ? '' : tmp2_elvis_lhs;
  }
  function encode(string) {
    // Inline function 'kotlin.js.unsafeCast' call
    return encodeURIComponent(string);
  }
  function decode(string) {
    // Inline function 'kotlin.js.unsafeCast' call
    return decodeURIComponent(string);
  }
  function toSearch$lambda(_destruct__k2r9zo) {
    var name = _destruct__k2r9zo.y9();
    var value = _destruct__k2r9zo.z9();
    // Inline function 'kotlin.takeIf' call
    var tmp;
    // Inline function 'com.motorro.keeplink.uri.toSearch.<anonymous>.<anonymous>' call
    // Inline function 'kotlin.text.isNotBlank' call
    if (!isBlank(value)) {
      tmp = value;
    } else {
      tmp = null;
    }
    var tmp0_safe_receiver = tmp;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.uri.toSearch.<anonymous>.<anonymous>' call
      tmp_0 = encode(name) + '=' + encode(tmp0_safe_receiver);
    }
    var tmp1_elvis_lhs = tmp_0;
    return tmp1_elvis_lhs == null ? encode(name) : tmp1_elvis_lhs;
  }
  //region block: post-declaration
  protoOf($serializer).ah = typeParametersSerializers;
  protoOf($serializer_0).ah = typeParametersSerializers;
  //endregion
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
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
    defineProp($com$motorro$keeplink$uri$data.Param, 'Companion', Companion_getInstance);
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
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js')));

//# sourceMappingURL=uri.js.map
