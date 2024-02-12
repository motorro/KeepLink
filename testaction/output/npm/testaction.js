(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri, kotlin_com_motorro_keeplink_deeplink) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.z2;
  var objectMeta = kotlin_kotlin.$_$.y2;
  var setMetadataFor = kotlin_kotlin.$_$.a3;
  var classMeta = kotlin_kotlin.$_$.o2;
  var getKClass = kotlin_kotlin.$_$.b;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var VOID = kotlin_kotlin.$_$.c;
  var of = kotlin_com_motorro_keeplink_uri.$_$.d;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.e4;
  var Action = kotlin_com_motorro_keeplink_deeplink.$_$.a;
  var defineProp = kotlin_kotlin.$_$.p2;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.l;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var toInt = kotlin_kotlin.$_$.n3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.p;
  var padStart = kotlin_kotlin.$_$.k3;
  var THROW_CCE = kotlin_kotlin.$_$.s3;
  var ComponentValue = kotlin_com_motorro_keeplink_uri.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.t2;
  var getOrNull = kotlin_kotlin.$_$.v1;
  var isBlank = kotlin_kotlin.$_$.i3;
  var Companion_instance = kotlin_kotlin.$_$.f1;
  var getValue = kotlin_com_motorro_keeplink_uri.$_$.c;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.r;
  var createFailure = kotlin_kotlin.$_$.c4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.t;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.s;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var listOf = kotlin_kotlin.$_$.z1;
  var BranchActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.b;
  var SegmentCheckParser = kotlin_com_motorro_keeplink_deeplink.$_$.f;
  var BranchActionParser_init_$Create$ = kotlin_com_motorro_keeplink_deeplink.$_$.g;
  var DefaultActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.c;
  var listOf_0 = kotlin_kotlin.$_$.a2;
  var SchemeHostLinkParser = kotlin_com_motorro_keeplink_deeplink.$_$.e;
  var SchemeHostLinkBuilder = kotlin_com_motorro_keeplink_deeplink.$_$.d;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(TestAction, 'TestAction', classMeta, Action, VOID, VOID, VOID, {0: Companion_getInstance_5});
  setMetadataFor(Login, 'Login', classMeta, TestAction);
  setMetadataFor(Magic, 'Magic', classMeta, Login);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(Invalid, 'Invalid', classMeta, TestAction);
  setMetadataFor(Unknown, 'Unknown', classMeta, TestAction);
  setMetadataFor(Root, 'Root', classMeta, TestAction, VOID, Root);
  setMetadataFor(Profile, 'Profile', classMeta, TestAction, VOID, Profile);
  setMetadataFor(Search, 'Search', classMeta, TestAction);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(LocalDateFields, 'LocalDateFields', classMeta, VOID, [ComponentValue]);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(TransportType, 'TransportType', classMeta, VOID, [ComponentValue]);
  setMetadataFor(TransportTypes, 'TransportTypes', objectMeta);
  setMetadataFor(sam$com_motorro_keeplink_deeplink_ActionParser$0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', classMeta);
  setMetadataFor(sam$com_motorro_keeplink_deeplink_ActionParser$0_0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', classMeta);
  setMetadataFor(sam$com_motorro_keeplink_deeplink_ActionParser$0_1, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', classMeta);
  setMetadataFor(sam$com_motorro_keeplink_deeplink_ActionParser$0_2, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', classMeta);
  setMetadataFor(LinkParsers, 'LinkParsers', objectMeta);
  setMetadataFor(LinkBuilders, 'LinkBuilders', objectMeta);
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.nj_1 = new Invalid();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Companion_0() {
    this.oj_1 = '';
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function Companion_1() {
    this.pj_1 = 'profile';
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function Companion_2() {
    this.qj_1 = 'magic';
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Companion_3() {
    this.rj_1 = 'login';
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Magic(token) {
    Login.call(this);
    this.token = token;
  }
  protoOf(Magic).tj = function () {
    return this.token;
  };
  protoOf(Magic).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(Login).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = ['magic'];
    var this_0 = tmp$ret$0.concat(tmp$ret$3);
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [this.token];
    return this_0.concat(tmp$ret$8);
  };
  function Companion_4() {
    this.uj_1 = 'search';
    this.vj_1 = 'type';
    this.wj_1 = 'from';
    this.xj_1 = 'to';
    this.yj_1 = 'date';
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.zj_1.f4();
  }
  function TestAction$Companion$_anonymous__lnvpp5() {
    var tmp = getKClass(TestAction);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = [];
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [];
    return SealedClassSerializer_init_$Create$('com.motorro.keeplink.testaction.TestAction', tmp, tmp_0, tmp_1, tmp$ret$8);
  }
  function Invalid() {
    Companion_getInstance();
    TestAction.call(this);
    this.bk_1 = false;
  }
  protoOf(Invalid).ki = function () {
    return this.bk_1;
  };
  function Unknown(components) {
    TestAction.call(this);
    this.dk_1 = components;
    this.ek_1 = false;
  }
  protoOf(Unknown).getPath = function () {
    return this.dk_1.getPath();
  };
  protoOf(Unknown).getSearch = function () {
    return this.dk_1.getSearch();
  };
  protoOf(Unknown).getHash = function () {
    return this.dk_1.getHash();
  };
  protoOf(Unknown).ki = function () {
    return this.ek_1;
  };
  function Root() {
    TestAction.call(this);
  }
  protoOf(Root).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(TestAction).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = [''];
    return tmp$ret$0.concat(tmp$ret$3);
  };
  function Profile() {
    TestAction.call(this);
  }
  protoOf(Profile).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(TestAction).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = ['profile'];
    return tmp$ret$0.concat(tmp$ret$3);
  };
  function Login() {
    TestAction.call(this);
  }
  protoOf(Login).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(TestAction).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = ['login'];
    return tmp$ret$0.concat(tmp$ret$3);
  };
  function Search(type, from, to, date) {
    TestAction.call(this);
    this.type = type;
    this.from = from;
    this.to = to;
    this.date = date;
  }
  protoOf(Search).gk = function () {
    return this.type;
  };
  protoOf(Search).hk = function () {
    return this.from;
  };
  protoOf(Search).ik = function () {
    return this.to;
  };
  protoOf(Search).jk = function () {
    return this.date;
  };
  protoOf(Search).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(TestAction).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = ['search'];
    return tmp$ret$0.concat(tmp$ret$3);
  };
  protoOf(Search).getSearch = function () {
    // Inline function 'kotlin.collections.plus' call
    var this_0 = protoOf(TestAction).getSearch.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var elements = [of('type', this.type.toComponentValue()), of('from', this.from), of('to', this.to), of('date', this.date.toComponentValue())];
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.concat(elements);
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.zj_1 = lazy(tmp_0, TestAction$Companion$_anonymous__lnvpp5);
  }
  protoOf(Companion_5).ih = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_5).ii = function (typeParamsSerializers) {
    return this.ih();
  };
  var Companion_instance_6;
  function Companion_getInstance_5() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function TestAction() {
    Companion_getInstance_5();
    Action.call(this);
  }
  function Companion_6() {
    Companion_instance_7 = this;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var this_0 = '^(\\d{4})-(\\d{2})-(\\d{2})$';
    tmp.kk_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_6).parse = function (componentValue) {
    var tmp0_elvis_lhs = this.kk_1.z5(componentValue);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Not a valid local date');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var match = tmp;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'com.motorro.keeplink.testaction.data.Companion.parse.<anonymous>' call
    var $this$run = match.o6();
    return new LocalDateFields(toInt($this$run.w(1)), toInt($this$run.w(2)), toInt($this$run.w(3)));
  };
  var Companion_instance_7;
  function Companion_getInstance_6() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  function LocalDateFields(year, month, day) {
    Companion_getInstance_6();
    this.year = year;
    this.month = month;
    this.day = day;
  }
  protoOf(LocalDateFields).lk = function () {
    return this.year;
  };
  protoOf(LocalDateFields).mk = function () {
    return this.month;
  };
  protoOf(LocalDateFields).nk = function () {
    return this.day;
  };
  protoOf(LocalDateFields).toComponentValue = function () {
    return '' + this.year + '-' + padStart(this.month.toString(), 2, _Char___init__impl__6a9atx(48)) + '-' + padStart(this.day.toString(), 2, _Char___init__impl__6a9atx(48));
  };
  protoOf(LocalDateFields).o9 = function () {
    return this.year;
  };
  protoOf(LocalDateFields).p9 = function () {
    return this.month;
  };
  protoOf(LocalDateFields).di = function () {
    return this.day;
  };
  protoOf(LocalDateFields).ok = function (year, month, day) {
    return new LocalDateFields(year, month, day);
  };
  protoOf(LocalDateFields).copy = function (year, month, day, $super) {
    year = year === VOID ? this.year : year;
    month = month === VOID ? this.month : month;
    day = day === VOID ? this.day : day;
    return this.ok(year, month, day);
  };
  protoOf(LocalDateFields).toString = function () {
    return 'LocalDateFields(year=' + this.year + ', month=' + this.month + ', day=' + this.day + ')';
  };
  protoOf(LocalDateFields).hashCode = function () {
    var result = this.year;
    result = imul(result, 31) + this.month | 0;
    result = imul(result, 31) + this.day | 0;
    return result;
  };
  protoOf(LocalDateFields).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocalDateFields))
      return false;
    var tmp0_other_with_cast = other instanceof LocalDateFields ? other : THROW_CCE();
    if (!(this.year === tmp0_other_with_cast.year))
      return false;
    if (!(this.month === tmp0_other_with_cast.month))
      return false;
    if (!(this.day === tmp0_other_with_cast.day))
      return false;
    return true;
  };
  function Companion_7() {
  }
  protoOf(Companion_7).parse = function (componentValue) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_subject = componentValue.toUpperCase();
    var tmp;
    if (tmp0_subject === TransportTypes_getInstance().FLIGHT.value) {
      tmp = TransportTypes_getInstance().FLIGHT;
    } else if (tmp0_subject === TransportTypes_getInstance().TRAIN.value) {
      tmp = TransportTypes_getInstance().TRAIN;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown charter type: ' + componentValue);
    }
    return tmp;
  };
  var Companion_instance_8;
  function Companion_getInstance_7() {
    return Companion_instance_8;
  }
  function TransportType(value) {
    this.value = value;
  }
  protoOf(TransportType).f4 = function () {
    return this.value;
  };
  protoOf(TransportType).toComponentValue = function () {
    return this.value;
  };
  protoOf(TransportType).o9 = function () {
    return this.value;
  };
  protoOf(TransportType).pk = function (value) {
    return new TransportType(value);
  };
  protoOf(TransportType).copy = function (value, $super) {
    value = value === VOID ? this.value : value;
    return this.pk(value);
  };
  protoOf(TransportType).toString = function () {
    return 'TransportType(value=' + this.value + ')';
  };
  protoOf(TransportType).hashCode = function () {
    return getStringHashCode(this.value);
  };
  protoOf(TransportType).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransportType))
      return false;
    var tmp0_other_with_cast = other instanceof TransportType ? other : THROW_CCE();
    if (!(this.value === tmp0_other_with_cast.value))
      return false;
    return true;
  };
  function TransportTypes() {
    TransportTypes_instance = this;
    this.FLIGHT = new TransportType('FLIGHT');
    this.TRAIN = new TransportType('TRAIN');
  }
  protoOf(TransportTypes).qk = function () {
    return this.FLIGHT;
  };
  protoOf(TransportTypes).rk = function () {
    return this.TRAIN;
  };
  var TransportTypes_instance;
  function TransportTypes_getInstance() {
    if (TransportTypes_instance == null)
      new TransportTypes();
    return TransportTypes_instance;
  }
  function get_MagicLinkHashParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return MagicLinkHashParser;
  }
  var MagicLinkHashParser;
  function get_MagicLinkParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return MagicLinkParser;
  }
  var MagicLinkParser;
  function get_LoginParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return LoginParser;
  }
  var LoginParser;
  function get_SearchParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return SearchParser;
  }
  var SearchParser;
  function get_ProfileParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return ProfileParser;
  }
  var ProfileParser;
  function get_rootParsers() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return rootParsers;
  }
  var rootParsers;
  function get_RootActionParser() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return RootActionParser;
  }
  var RootActionParser;
  function sam$com_motorro_keeplink_deeplink_ActionParser$0(function_0) {
    this.sk_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).mi = function (components, pathIndex) {
    return this.sk_1(components, pathIndex);
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_0(function_0) {
    this.tk_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_0).mi = function (components, pathIndex) {
    return this.tk_1(components, pathIndex);
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_1(function_0) {
    this.uk_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_1).mi = function (components, pathIndex) {
    return this.uk_1(components, pathIndex);
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_2(function_0) {
    this.vk_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_2).mi = function (components, pathIndex) {
    return this.vk_1(components, pathIndex);
  };
  function MagicLinkHashParser$lambda(components, pathIndex) {
    _init_properties_testActionParsers_kt__q0ar6u();
    var tmp0_safe_receiver = getOrNull(components.getPath(), pathIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.motorro.keeplink.testaction.MagicLinkHashParser.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(tmp0_safe_receiver)) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    var tmp_1;
    if (tmp1_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.motorro.keeplink.testaction.MagicLinkHashParser.<anonymous>.<anonymous>' call
      tmp_1 = new Magic(tmp1_safe_receiver);
    }
    return tmp_1;
  }
  function MagicLinkParser$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_testActionParsers_kt__q0ar6u();
    return Companion_getInstance().nj_1;
  }
  function SearchParser$lambda($$this$with) {
    return function (components, _anonymous_parameter_1__qggqgd) {
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'com.motorro.keeplink.testaction.SearchParser.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_0 = components.getSearch();
        var tmp0_safe_receiver = getValue(tmp_0, 'type');
        var tmp_1;
        if (tmp0_safe_receiver == null) {
          tmp_1 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.motorro.keeplink.testaction.SearchParser.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_1 = Companion_instance_8.parse(tmp0_safe_receiver);
        }
        var value = tmp_1;
        tmp = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_2;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_2;
      }
      var this_0 = tmp;
      var tmp_3;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_3 = null;
      } else {
        var tmp_4 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_3 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      }
      var tmp0_elvis_lhs = tmp_3;
      var tmp_5;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var type = tmp_5;
      var tmp_6 = components.getSearch();
      var tmp1_elvis_lhs = getValue(tmp_6, 'from');
      var tmp_7;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_7 = tmp1_elvis_lhs;
      }
      var from = tmp_7;
      var tmp_8 = components.getSearch();
      var tmp2_elvis_lhs = getValue(tmp_8, 'to');
      var tmp_9;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_9 = tmp2_elvis_lhs;
      }
      var to = tmp_9;
      // Inline function 'kotlin.Result.getOrNull' call
      // Inline function 'kotlin.runCatching' call
      var tmp_10;
      try {
        // Inline function 'kotlin.Companion.success' call
        // Inline function 'com.motorro.keeplink.testaction.SearchParser.<anonymous>.<anonymous>.<anonymous>' call
        var tmp_11 = components.getSearch();
        var tmp0_safe_receiver_0 = getValue(tmp_11, 'date');
        var tmp_12;
        if (tmp0_safe_receiver_0 == null) {
          tmp_12 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'com.motorro.keeplink.testaction.SearchParser.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp_12 = Companion_getInstance_6().parse(tmp0_safe_receiver_0);
        }
        var value_0 = tmp_12;
        tmp_10 = _Result___init__impl__xyqfz8(value_0);
      } catch ($p) {
        var tmp_13;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_13 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_10 = tmp_13;
      }
      var this_1 = tmp_10;
      var tmp_14;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_14 = null;
      } else {
        var tmp_15 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_14 = (tmp_15 == null ? true : !(tmp_15 == null)) ? tmp_15 : THROW_CCE();
      }
      var tmp3_elvis_lhs = tmp_14;
      var tmp_16;
      if (tmp3_elvis_lhs == null) {
        return null;
      } else {
        tmp_16 = tmp3_elvis_lhs;
      }
      var date = tmp_16;
      return new Search(type, from, to, date);
    };
  }
  function ProfileParser$lambda() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return new Profile();
  }
  function RootActionParser$lambda(components, _anonymous_parameter_1__qggqgd) {
    _init_properties_testActionParsers_kt__q0ar6u();
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (components.getPath().length === 0) {
      tmp = new Root();
    } else {
      tmp = new Unknown(components);
    }
    return tmp;
  }
  var properties_initialized_testActionParsers_kt_dq8jr8;
  function _init_properties_testActionParsers_kt__q0ar6u() {
    if (!properties_initialized_testActionParsers_kt_dq8jr8) {
      properties_initialized_testActionParsers_kt_dq8jr8 = true;
      var tmp = MagicLinkHashParser$lambda;
      MagicLinkHashParser = new sam$com_motorro_keeplink_deeplink_ActionParser$0(tmp);
      var tmp_0 = listOf(get_MagicLinkHashParser());
      var tmp_1 = MagicLinkParser$lambda;
      MagicLinkParser = new SegmentCheckParser('magic', new BranchActionParser(tmp_0, new sam$com_motorro_keeplink_deeplink_ActionParser$0_0(tmp_1)));
      LoginParser = new SegmentCheckParser('login', BranchActionParser_init_$Create$([get_MagicLinkParser()]));
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.motorro.keeplink.testaction.SearchParser.<anonymous>' call
      var tmp_2 = SearchParser$lambda(Companion_instance_5);
      SearchParser = new SegmentCheckParser('search', new sam$com_motorro_keeplink_deeplink_ActionParser$0_1(tmp_2));
      ProfileParser = new SegmentCheckParser('profile', new DefaultActionParser(ProfileParser$lambda));
      rootParsers = listOf_0([get_ProfileParser(), get_LoginParser(), get_SearchParser()]);
      var tmp_3 = get_rootParsers();
      var tmp_4 = RootActionParser$lambda;
      RootActionParser = new BranchActionParser(tmp_3, new sam$com_motorro_keeplink_deeplink_ActionParser$0_2(tmp_4));
    }
  }
  function LinkParsers() {
    LinkParsers_instance = this;
    this.MOTORRO = new SchemeHostLinkParser(get_RootActionParser(), 'motorro', '');
    this.LOCALHOST_8080 = new SchemeHostLinkParser(get_RootActionParser(), 'http', 'localhost:8080');
  }
  protoOf(LinkParsers).wk = function () {
    return this.MOTORRO;
  };
  protoOf(LinkParsers).xk = function () {
    return this.LOCALHOST_8080;
  };
  var LinkParsers_instance;
  function LinkParsers_getInstance() {
    if (LinkParsers_instance == null)
      new LinkParsers();
    return LinkParsers_instance;
  }
  function LinkBuilders() {
    LinkBuilders_instance = this;
    this.MOTORRO = new SchemeHostLinkBuilder('motorro', '');
    this.LOCALHOST_8080 = new SchemeHostLinkBuilder('http', 'localhost:8080');
  }
  protoOf(LinkBuilders).wk = function () {
    return this.MOTORRO;
  };
  protoOf(LinkBuilders).xk = function () {
    return this.LOCALHOST_8080;
  };
  var LinkBuilders_instance;
  function LinkBuilders_getInstance() {
    if (LinkBuilders_instance == null)
      new LinkBuilders();
    return LinkBuilders_instance;
  }
  function fromDate(date) {
    return new LocalDateFields(date.getFullYear(), date.getMonth() + 1 | 0, date.getDate());
  }
  function toDate(localDateFields) {
    return new Date(localDateFields.year, localDateFields.month - 1 | 0, localDateFields.day);
  }
  function magicLink(token) {
    return new Magic(token);
  }
  function search(type, from, to, date) {
    return new Search(type, from, to, fromDate(date));
  }
  //region block: init
  Companion_instance_1 = new Companion_0();
  Companion_instance_2 = new Companion_1();
  Companion_instance_3 = new Companion_2();
  Companion_instance_4 = new Companion_3();
  Companion_instance_5 = new Companion_4();
  Companion_instance_8 = new Companion_7();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    $com$motorro$keeplink$testaction.TestAction = TestAction;
    $com$motorro$keeplink$testaction.TestAction.Invalid = Invalid;
    $com$motorro$keeplink$testaction.TestAction.Unknown = Unknown;
    $com$motorro$keeplink$testaction.TestAction.Root = Root;
    $com$motorro$keeplink$testaction.TestAction.Profile = Profile;
    $com$motorro$keeplink$testaction.TestAction.Login = Login;
    $com$motorro$keeplink$testaction.TestAction.Login.Magic = Magic;
    $com$motorro$keeplink$testaction.TestAction.Search = Search;
    defineProp($com$motorro$keeplink$testaction.TestAction, 'Companion', Companion_getInstance_5);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.LocalDateFields = LocalDateFields;
    defineProp($com$motorro$keeplink$testaction$data.LocalDateFields, 'Companion', Companion_getInstance_6);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.TransportType = TransportType;
    defineProp($com$motorro$keeplink$testaction$data.TransportType, 'Companion', Companion_getInstance_7);
    defineProp($com$motorro$keeplink$testaction$data, 'TransportTypes', TransportTypes_getInstance);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    defineProp($com$motorro$keeplink$testaction, 'LinkParsers', LinkParsers_getInstance);
    defineProp($com$motorro$keeplink$testaction, 'LinkBuilders', LinkBuilders_getInstance);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.fromDate = fromDate;
    $com$motorro$keeplink$testaction$data.toDate = toDate;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    $com$motorro$keeplink$testaction.magicLink = magicLink;
    $com$motorro$keeplink$testaction.search = search;
  }
  $jsExportAll$(_);
  kotlin_com_motorro_keeplink_uri.$jsExportAll$(_);
  kotlin_com_motorro_keeplink_deeplink.$jsExportAll$(_);
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./uri.js'), require('./deeplink.js')));

//# sourceMappingURL=testaction.js.map
