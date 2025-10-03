(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri, kotlin_com_motorro_keeplink_deeplink) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.x2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.s2;
  var initMetadataForClass = kotlin_kotlin.$_$.r2;
  var VOID = kotlin_kotlin.$_$.a;
  var getKClass = kotlin_kotlin.$_$.b3;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var of = kotlin_com_motorro_keeplink_uri.$_$.d;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.b;
  var lazy = kotlin_kotlin.$_$.f4;
  var Action = kotlin_com_motorro_keeplink_deeplink.$_$.b;
  var defineProp = kotlin_kotlin.$_$.m2;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.j;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k;
  var toInt = kotlin_kotlin.$_$.m3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.n;
  var padStart = kotlin_kotlin.$_$.i3;
  var ComponentValue = kotlin_com_motorro_keeplink_uri.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.p2;
  var initMetadataForObject = kotlin_kotlin.$_$.u2;
  var equals = kotlin_kotlin.$_$.n2;
  var FunctionAdapter = kotlin_kotlin.$_$.i2;
  var isInterface = kotlin_kotlin.$_$.v2;
  var ActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.a;
  var hashCode = kotlin_kotlin.$_$.q2;
  var getOrNull = kotlin_kotlin.$_$.t1;
  var isBlank = kotlin_kotlin.$_$.h3;
  var Companion_instance = kotlin_kotlin.$_$.e1;
  var getValue = kotlin_com_motorro_keeplink_uri.$_$.c;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.o;
  var createFailure = kotlin_kotlin.$_$.d4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.q;
  var THROW_CCE = kotlin_kotlin.$_$.t3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.p;
  var Unit_instance = kotlin_kotlin.$_$.j1;
  var listOf = kotlin_kotlin.$_$.x1;
  var BranchActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.c;
  var SegmentCheckParser = kotlin_com_motorro_keeplink_deeplink.$_$.g;
  var BranchActionParser_init_$Create$ = kotlin_com_motorro_keeplink_deeplink.$_$.h;
  var DefaultActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.d;
  var listOf_0 = kotlin_kotlin.$_$.y1;
  var SchemeHostLinkParser = kotlin_com_motorro_keeplink_deeplink.$_$.f;
  var SchemeHostLinkBuilder = kotlin_com_motorro_keeplink_deeplink.$_$.e;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForCompanion(Companion_0);
  initMetadataForCompanion(Companion_1);
  initMetadataForCompanion(Companion_2);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(TestAction, 'TestAction', VOID, Action, VOID, VOID, VOID, {0: Companion_getInstance_5});
  initMetadataForClass(Login, 'Login', VOID, TestAction);
  initMetadataForClass(Magic, 'Magic', VOID, Login);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Invalid, 'Invalid', VOID, TestAction);
  initMetadataForClass(Unknown, 'Unknown', VOID, TestAction);
  initMetadataForClass(Root, 'Root', Root, TestAction);
  initMetadataForClass(Profile, 'Profile', Profile, TestAction);
  initMetadataForClass(Search, 'Search', VOID, TestAction);
  initMetadataForCompanion(Companion_5);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(LocalDateFields, 'LocalDateFields', VOID, VOID, [ComponentValue]);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(TransportType, 'TransportType', VOID, VOID, [ComponentValue]);
  initMetadataForObject(TransportTypes, 'TransportTypes');
  initMetadataForClass(sam$com_motorro_keeplink_deeplink_ActionParser$0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', VOID, VOID, [ActionParser, FunctionAdapter]);
  initMetadataForClass(sam$com_motorro_keeplink_deeplink_ActionParser$0_0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', VOID, VOID, [ActionParser, FunctionAdapter]);
  initMetadataForClass(sam$com_motorro_keeplink_deeplink_ActionParser$0_1, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', VOID, VOID, [ActionParser, FunctionAdapter]);
  initMetadataForClass(sam$com_motorro_keeplink_deeplink_ActionParser$0_2, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', VOID, VOID, [ActionParser, FunctionAdapter]);
  initMetadataForObject(LinkParsers, 'LinkParsers');
  initMetadataForObject(LinkBuilders, 'LinkBuilders');
  //endregion
  function Companion() {
    Companion_instance_0 = this;
    this.lk_1 = new Invalid();
  }
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Companion_0() {
    this.mk_1 = '';
  }
  var Companion_instance_1;
  function Companion_getInstance_0() {
    return Companion_instance_1;
  }
  function Companion_1() {
    this.nk_1 = 'profile';
  }
  var Companion_instance_2;
  function Companion_getInstance_1() {
    return Companion_instance_2;
  }
  function Companion_2() {
    this.ok_1 = 'magic';
  }
  var Companion_instance_3;
  function Companion_getInstance_2() {
    return Companion_instance_3;
  }
  function Companion_3() {
    this.pk_1 = 'login';
  }
  var Companion_instance_4;
  function Companion_getInstance_3() {
    return Companion_instance_4;
  }
  function Magic(token) {
    Login.call(this);
    this.token = token;
  }
  protoOf(Magic).rk = function () {
    return this.token;
  };
  protoOf(Magic).getPath = function () {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$0 = protoOf(Login).getPath.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = ['magic'];
    var tmp0 = tmp$ret$0.concat(tmp$ret$3);
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$8 = [this.token];
    return tmp0.concat(tmp$ret$8);
  };
  function Companion_4() {
    this.sk_1 = 'search';
    this.tk_1 = 'type';
    this.uk_1 = 'from';
    this.vk_1 = 'to';
    this.wk_1 = 'date';
  }
  var Companion_instance_5;
  function Companion_getInstance_4() {
    return Companion_instance_5;
  }
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.xk_1.l1();
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
    this.zk_1 = false;
  }
  protoOf(Invalid).ij = function () {
    return this.zk_1;
  };
  function Unknown(components) {
    TestAction.call(this);
    this.bl_1 = components;
    this.cl_1 = false;
  }
  protoOf(Unknown).getPath = function () {
    return this.bl_1.getPath();
  };
  protoOf(Unknown).getSearch = function () {
    return this.bl_1.getSearch();
  };
  protoOf(Unknown).getHash = function () {
    return this.bl_1.getHash();
  };
  protoOf(Unknown).ij = function () {
    return this.cl_1;
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
  protoOf(Search).el = function () {
    return this.type;
  };
  protoOf(Search).fl = function () {
    return this.from;
  };
  protoOf(Search).gl = function () {
    return this.to;
  };
  protoOf(Search).hl = function () {
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
    var tmp0 = protoOf(TestAction).getSearch.call(this);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.collections.plus' call
    var elements = [of('type', this.type.toComponentValue()), of('from', this.from), of('to', this.to), of('date', this.date.toComponentValue())];
    // Inline function 'kotlin.js.asDynamic' call
    return tmp0.concat(elements);
  };
  function Companion_5() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.xk_1 = lazy(tmp_0, TestAction$Companion$_anonymous__lnvpp5);
  }
  protoOf(Companion_5).gi = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion_5).gj = function (typeParamsSerializers) {
    return this.gi();
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
    tmp.il_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Companion_6).parse = function (componentValue) {
    var tmp0_elvis_lhs = this.il_1.w7(componentValue);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Not a valid local date');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var match = tmp;
    // Inline function 'kotlin.run' call
    var $this$run = match.l8();
    return new LocalDateFields(toInt($this$run.p(1)), toInt($this$run.p(2)), toInt($this$run.p(3)));
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
  protoOf(LocalDateFields).jl = function () {
    return this.year;
  };
  protoOf(LocalDateFields).kl = function () {
    return this.month;
  };
  protoOf(LocalDateFields).ll = function () {
    return this.day;
  };
  protoOf(LocalDateFields).toComponentValue = function () {
    return '' + this.year + '-' + padStart(this.month.toString(), 2, _Char___init__impl__6a9atx(48)) + '-' + padStart(this.day.toString(), 2, _Char___init__impl__6a9atx(48));
  };
  protoOf(LocalDateFields).k9 = function () {
    return this.year;
  };
  protoOf(LocalDateFields).l9 = function () {
    return this.month;
  };
  protoOf(LocalDateFields).bj = function () {
    return this.day;
  };
  protoOf(LocalDateFields).ml = function (year, month, day) {
    return new LocalDateFields(year, month, day);
  };
  protoOf(LocalDateFields).copy = function (year, month, day, $super) {
    year = year === VOID ? this.year : year;
    month = month === VOID ? this.month : month;
    day = day === VOID ? this.day : day;
    return $super === VOID ? this.ml(year, month, day) : $super.ml.call(this, year, month, day);
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
    if (!(this.year === other.year))
      return false;
    if (!(this.month === other.month))
      return false;
    if (!(this.day === other.day))
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
  protoOf(TransportType).l1 = function () {
    return this.value;
  };
  protoOf(TransportType).toComponentValue = function () {
    return this.value;
  };
  protoOf(TransportType).k9 = function () {
    return this.value;
  };
  protoOf(TransportType).nl = function (value) {
    return new TransportType(value);
  };
  protoOf(TransportType).copy = function (value, $super) {
    value = value === VOID ? this.value : value;
    return $super === VOID ? this.nl(value) : $super.nl.call(this, value);
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
    if (!(this.value === other.value))
      return false;
    return true;
  };
  function TransportTypes() {
    TransportTypes_instance = this;
    this.FLIGHT = new TransportType('FLIGHT');
    this.TRAIN = new TransportType('TRAIN');
  }
  protoOf(TransportTypes).ol = function () {
    return this.FLIGHT;
  };
  protoOf(TransportTypes).pl = function () {
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
    this.ql_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).jj = function (components, pathIndex) {
    return this.ql_1(components, pathIndex);
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).c2 = function () {
    return this.ql_1;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ActionParser) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c2(), other.c2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).hashCode = function () {
    return hashCode(this.c2());
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_0(function_0) {
    this.rl_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_0).jj = function (components, pathIndex) {
    return this.rl_1(components, pathIndex);
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_0).c2 = function () {
    return this.rl_1;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ActionParser) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c2(), other.c2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_0).hashCode = function () {
    return hashCode(this.c2());
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_1(function_0) {
    this.sl_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_1).jj = function (components, pathIndex) {
    return this.sl_1(components, pathIndex);
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_1).c2 = function () {
    return this.sl_1;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ActionParser) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c2(), other.c2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_1).hashCode = function () {
    return hashCode(this.c2());
  };
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_2(function_0) {
    this.tl_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_2).jj = function (components, pathIndex) {
    return this.tl_1(components, pathIndex);
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_2).c2 = function () {
    return this.tl_1;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ActionParser) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.c2(), other.c2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0_2).hashCode = function () {
    return hashCode(this.c2());
  };
  function MagicLinkHashParser$lambda(components, pathIndex) {
    _init_properties_testActionParsers_kt__q0ar6u();
    var tmp0_safe_receiver = getOrNull(components.getPath(), pathIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
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
      tmp_1 = new Magic(tmp1_safe_receiver);
    }
    return tmp_1;
  }
  function MagicLinkParser$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_testActionParsers_kt__q0ar6u();
    return Companion_getInstance().lk_1;
  }
  function SearchParser$lambda($$this$with) {
    return function (components, _unused_var__etf5q3) {
      // Inline function 'kotlin.runCatching' call
      var tmp;
      try {
        var tmp0_safe_receiver = getValue(components.getSearch(), 'type');
        var tmp_0;
        if (tmp0_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_0 = Companion_instance_8.parse(tmp0_safe_receiver);
        }
        // Inline function 'kotlin.Companion.success' call
        var value = tmp_0;
        tmp = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp;
      var tmp_2;
      if (_Result___get_isFailure__impl__jpiriv(this_0)) {
        tmp_2 = null;
      } else {
        var tmp_3 = _Result___get_value__impl__bjfvqg(this_0);
        tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      }
      var tmp0_elvis_lhs = tmp_2;
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        return null;
      } else {
        tmp_4 = tmp0_elvis_lhs;
      }
      var type = tmp_4;
      var tmp1_elvis_lhs = getValue(components.getSearch(), 'from');
      var tmp_5;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      var from = tmp_5;
      var tmp2_elvis_lhs = getValue(components.getSearch(), 'to');
      var tmp_6;
      if (tmp2_elvis_lhs == null) {
        return null;
      } else {
        tmp_6 = tmp2_elvis_lhs;
      }
      var to = tmp_6;
      // Inline function 'kotlin.runCatching' call
      var tmp_7;
      try {
        var tmp0_safe_receiver_0 = getValue(components.getSearch(), 'date');
        var tmp_8;
        if (tmp0_safe_receiver_0 == null) {
          tmp_8 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_8 = Companion_getInstance_6().parse(tmp0_safe_receiver_0);
        }
        // Inline function 'kotlin.Companion.success' call
        var value_0 = tmp_8;
        tmp_7 = _Result___init__impl__xyqfz8(value_0);
      } catch ($p) {
        var tmp_9;
        if ($p instanceof Error) {
          var e_0 = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_9 = _Result___init__impl__xyqfz8(createFailure(e_0));
        } else {
          throw $p;
        }
        tmp_7 = tmp_9;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_1 = tmp_7;
      var tmp_10;
      if (_Result___get_isFailure__impl__jpiriv(this_1)) {
        tmp_10 = null;
      } else {
        var tmp_11 = _Result___get_value__impl__bjfvqg(this_1);
        tmp_10 = (tmp_11 == null ? true : !(tmp_11 == null)) ? tmp_11 : THROW_CCE();
      }
      var tmp3_elvis_lhs = tmp_10;
      var tmp_12;
      if (tmp3_elvis_lhs == null) {
        return null;
      } else {
        tmp_12 = tmp3_elvis_lhs;
      }
      var date = tmp_12;
      return new Search(type, from, to, date);
    };
  }
  function ProfileParser$lambda() {
    _init_properties_testActionParsers_kt__q0ar6u();
    return new Profile();
  }
  function RootActionParser$lambda(components, _unused_var__etf5q3) {
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
  protoOf(LinkParsers).ul = function () {
    return this.MOTORRO;
  };
  protoOf(LinkParsers).vl = function () {
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
  protoOf(LinkBuilders).ul = function () {
    return this.MOTORRO;
  };
  protoOf(LinkBuilders).vl = function () {
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
    defineProp($com$motorro$keeplink$testaction.TestAction, 'Companion', Companion_getInstance_5, VOID, true);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.LocalDateFields = LocalDateFields;
    defineProp($com$motorro$keeplink$testaction$data.LocalDateFields, 'Companion', Companion_getInstance_6, VOID, true);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.TransportType = TransportType;
    defineProp($com$motorro$keeplink$testaction$data.TransportType, 'Companion', Companion_getInstance_7, VOID, true);
    defineProp($com$motorro$keeplink$testaction$data, 'TransportTypes', TransportTypes_getInstance, VOID, true);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    defineProp($com$motorro$keeplink$testaction, 'LinkParsers', LinkParsers_getInstance, VOID, true);
    defineProp($com$motorro$keeplink$testaction, 'LinkBuilders', LinkBuilders_getInstance, VOID, true);
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
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./keeplink-uri.js'), require('./keeplink-deeplink.js')));

//# sourceMappingURL=keeplink-testaction.js.map
