/*
 * Copyright 2022 Nikolai Kotchetkov.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *    http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri, kotlin_com_motorro_keeplink_deeplink) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var Unit_getInstance = kotlin_kotlin.$_$.l1;
  var classMeta = kotlin_kotlin.$_$.t2;
  var getKClass = kotlin_kotlin.$_$.b;
  var SealedClassSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.b;
  var of = kotlin_com_motorro_keeplink_uri.$_$.d;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.y3;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var Action_init_$Init$ = kotlin_com_motorro_keeplink_deeplink.$_$.h;
  var Action = kotlin_com_motorro_keeplink_deeplink.$_$.b;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.o;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var toInt = kotlin_kotlin.$_$.n3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.u;
  var padStart = kotlin_kotlin.$_$.l3;
  var THROW_CCE = kotlin_kotlin.$_$.u3;
  var ComponentValue = kotlin_com_motorro_keeplink_uri.$_$.a;
  var getStringHashCode = kotlin_kotlin.$_$.x2;
  var ActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.a;
  var getOrNull = kotlin_kotlin.$_$.a2;
  var isBlank = kotlin_kotlin.$_$.j3;
  var Companion_getInstance = kotlin_kotlin.$_$.k1;
  var getValue = kotlin_com_motorro_keeplink_uri.$_$.c;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w;
  var createFailure = kotlin_kotlin.$_$.w3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y;
  var isObject = kotlin_kotlin.$_$.b3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.x;
  var listOf = kotlin_kotlin.$_$.c2;
  var BranchActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.c;
  var SegmentCheckParser = kotlin_com_motorro_keeplink_deeplink.$_$.g;
  var BranchActionParser_init_$Create$ = kotlin_com_motorro_keeplink_deeplink.$_$.i;
  var DefaultActionParser = kotlin_com_motorro_keeplink_deeplink.$_$.d;
  var listOf_0 = kotlin_kotlin.$_$.d2;
  var LinkParser = kotlin_com_motorro_keeplink_deeplink.$_$.f;
  var LinkBuilder = kotlin_com_motorro_keeplink_deeplink.$_$.e;
  //endregion
  //region block: pre-declaration
  TestAction.prototype = Object.create(Action.prototype);
  TestAction.prototype.constructor = TestAction;
  Login.prototype = Object.create(TestAction.prototype);
  Login.prototype.constructor = Login;
  Magic.prototype = Object.create(Login.prototype);
  Magic.prototype.constructor = Magic;
  Invalid.prototype = Object.create(TestAction.prototype);
  Invalid.prototype.constructor = Invalid;
  Unknown.prototype = Object.create(TestAction.prototype);
  Unknown.prototype.constructor = Unknown;
  Root.prototype = Object.create(TestAction.prototype);
  Root.prototype.constructor = Root;
  Profile.prototype = Object.create(TestAction.prototype);
  Profile.prototype.constructor = Profile;
  Search.prototype = Object.create(TestAction.prototype);
  Search.prototype.constructor = Search;
  //endregion
  function Companion() {
    Companion_instance = this;
    this.ik_1 = new Invalid();
  }
  Companion.$metadata$ = objectMeta('Companion');
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.jk_1 = '';
  }
  Companion_0.$metadata$ = objectMeta('Companion');
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.kk_1 = 'profile';
  }
  Companion_1.$metadata$ = objectMeta('Companion');
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.lk_1 = 'magic';
  }
  Companion_2.$metadata$ = objectMeta('Companion');
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.mk_1 = 'login';
  }
  Companion_3.$metadata$ = objectMeta('Companion');
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Magic(token) {
    Companion_getInstance_3();
    Login.call(this);
    this.ok_1 = token;
  }
  Magic.prototype.pk = function () {
    return this.ok_1;
  };
  Magic.prototype.getPath = function () {
    var tmp$ret$9;
    {
      var tmp$ret$4;
      {
        var tmp0_plus = Login.prototype.getPath.call(this);
        Companion_getInstance_3();
        var tmp1_plus = 'magic';
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_plus;
        }
        var tmp$ret$3;
        {
          var tmp$ret$2;
          {
            var tmp$ret$1;
            {
              tmp$ret$1 = [tmp1_plus];
            }
            tmp$ret$2 = tmp$ret$1;
          }
          tmp$ret$3 = tmp$ret$2;
        }
        tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
      }
      var tmp2_plus = tmp$ret$4;
      var tmp3_plus = this.ok_1;
      var tmp$ret$5;
      {
        tmp$ret$5 = tmp2_plus;
      }
      var tmp$ret$8;
      {
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            tmp$ret$6 = [tmp3_plus];
          }
          tmp$ret$7 = tmp$ret$6;
        }
        tmp$ret$8 = tmp$ret$7;
      }
      tmp$ret$9 = tmp$ret$5.concat(tmp$ret$8);
    }
    return tmp$ret$9;
  };
  Magic.$metadata$ = classMeta('Magic', undefined, undefined, undefined, undefined, Login.prototype);
  Object.defineProperty(Magic.prototype, 'token', {
    configurable: true,
    get: Magic.prototype.pk
  });
  function Companion_4() {
    Companion_instance_4 = this;
    this.qk_1 = 'search';
    this.rk_1 = 'type';
    this.sk_1 = 'from';
    this.tk_1 = 'to';
    this.uk_1 = 'date';
  }
  Companion_4.prototype.vk = function () {
    return this.qk_1;
  };
  Companion_4.prototype.wk = function () {
    return this.rk_1;
  };
  Companion_4.prototype.xk = function () {
    return this.sk_1;
  };
  Companion_4.prototype.yk = function () {
    return this.tk_1;
  };
  Companion_4.prototype.zk = function () {
    return this.uk_1;
  };
  Companion_4.$metadata$ = objectMeta('Companion');
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function TestAction$Companion$$cachedSerializer$delegate$_anonymous__3c5otu() {
    return function () {
      var tmp = getKClass(TestAction);
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
      var tmp_0 = tmp$ret$2;
      var tmp$ret$5;
      {
        var tmp$ret$4;
        {
          var tmp$ret$3;
          {
            tmp$ret$3 = [];
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp$ret$5 = tmp$ret$4;
      }
      var tmp_1 = tmp$ret$5;
      var tmp$ret$8;
      {
        var tmp$ret$7;
        {
          var tmp$ret$6;
          {
            tmp$ret$6 = [];
          }
          tmp$ret$7 = tmp$ret$6;
        }
        tmp$ret$8 = tmp$ret$7;
      }
      return SealedClassSerializer_init_$Create$('com.motorro.keeplink.testaction.TestAction', tmp, tmp_0, tmp_1, tmp$ret$8);
    };
  }
  function Invalid() {
    Companion_getInstance_0();
    TestAction.call(this);
    this.bl_1 = false;
  }
  Invalid.prototype.gj = function () {
    return this.bl_1;
  };
  Invalid.$metadata$ = classMeta('Invalid', undefined, undefined, undefined, undefined, TestAction.prototype);
  function Unknown(components) {
    TestAction.call(this);
    this.dl_1 = components;
    this.el_1 = false;
  }
  Unknown.prototype.getPath = function () {
    return this.dl_1.getPath();
  };
  Unknown.prototype.getSearch = function () {
    return this.dl_1.getSearch();
  };
  Unknown.prototype.getHash = function () {
    return this.dl_1.getHash();
  };
  Unknown.prototype.gj = function () {
    return this.el_1;
  };
  Unknown.$metadata$ = classMeta('Unknown', undefined, undefined, undefined, undefined, TestAction.prototype);
  function Root() {
    Companion_getInstance_1();
    TestAction.call(this);
  }
  Root.prototype.getPath = function () {
    var tmp$ret$4;
    {
      var tmp0_plus = TestAction.prototype.getPath.call(this);
      Companion_getInstance_1();
      var tmp1_plus = '';
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_plus;
      }
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = [tmp1_plus];
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
    }
    return tmp$ret$4;
  };
  Root.$metadata$ = classMeta('Root', undefined, undefined, undefined, undefined, TestAction.prototype);
  function Profile() {
    Companion_getInstance_2();
    TestAction.call(this);
  }
  Profile.prototype.getPath = function () {
    var tmp$ret$4;
    {
      var tmp0_plus = TestAction.prototype.getPath.call(this);
      Companion_getInstance_2();
      var tmp1_plus = 'profile';
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_plus;
      }
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = [tmp1_plus];
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
    }
    return tmp$ret$4;
  };
  Profile.$metadata$ = classMeta('Profile', undefined, undefined, undefined, undefined, TestAction.prototype);
  function Login() {
    Companion_getInstance_4();
    TestAction.call(this);
  }
  Login.prototype.getPath = function () {
    var tmp$ret$4;
    {
      var tmp0_plus = TestAction.prototype.getPath.call(this);
      Companion_getInstance_4();
      var tmp1_plus = 'login';
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_plus;
      }
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = [tmp1_plus];
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
    }
    return tmp$ret$4;
  };
  Login.$metadata$ = classMeta('Login', undefined, undefined, undefined, undefined, TestAction.prototype);
  function Search(type, from, to, date) {
    Companion_getInstance_5();
    TestAction.call(this);
    this.gl_1 = type;
    this.hl_1 = from;
    this.il_1 = to;
    this.jl_1 = date;
  }
  Search.prototype.kl = function () {
    return this.gl_1;
  };
  Search.prototype.ll = function () {
    return this.hl_1;
  };
  Search.prototype.ml = function () {
    return this.il_1;
  };
  Search.prototype.nl = function () {
    return this.jl_1;
  };
  Search.prototype.getPath = function () {
    var tmp$ret$4;
    {
      var tmp0_plus = TestAction.prototype.getPath.call(this);
      Companion_getInstance_5();
      var tmp1_plus = 'search';
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_plus;
      }
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          var tmp$ret$1;
          {
            tmp$ret$1 = [tmp1_plus];
          }
          tmp$ret$2 = tmp$ret$1;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp$ret$4 = tmp$ret$0.concat(tmp$ret$3);
    }
    return tmp$ret$4;
  };
  Search.prototype.getSearch = function () {
    var tmp$ret$4;
    {
      var tmp1_plus = TestAction.prototype.getSearch.call(this);
      var tmp$ret$2;
      {
        Companion_getInstance_5();
        var tmp = of('type', this.gl_1.toComponentValue());
        Companion_getInstance_5();
        var tmp_0 = of('from', this.hl_1);
        Companion_getInstance_5();
        var tmp_1 = of('to', this.il_1);
        Companion_getInstance_5();
        var tmp0_arrayOf = [tmp, tmp_0, tmp_1, of('date', this.jl_1.toComponentValue())];
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
      var tmp2_plus = tmp$ret$2;
      var tmp$ret$3;
      {
        tmp$ret$3 = tmp1_plus;
      }
      tmp$ret$4 = tmp$ret$3.concat(tmp2_plus);
    }
    return tmp$ret$4;
  };
  Search.$metadata$ = classMeta('Search', undefined, undefined, undefined, undefined, TestAction.prototype);
  Object.defineProperty(Search.prototype, 'type', {
    configurable: true,
    get: Search.prototype.kl
  });
  Object.defineProperty(Search.prototype, 'from', {
    configurable: true,
    get: Search.prototype.ll
  });
  Object.defineProperty(Search.prototype, 'to', {
    configurable: true,
    get: Search.prototype.ml
  });
  Object.defineProperty(Search.prototype, 'date', {
    configurable: true,
    get: Search.prototype.nl
  });
  function Companion_5() {
    Companion_instance_5 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.ol_1 = lazy(tmp_0, TestAction$Companion$$cachedSerializer$delegate$_anonymous__3c5otu());
  }
  Companion_5.prototype.serializer = function () {
    return this.ol_1.n1();
  };
  Companion_5.prototype.ej = function (typeParamsSerializers) {
    return this.serializer();
  };
  Companion_5.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function TestAction_init_$Init$(seen1, isValid, serializationConstructorMarker, $this) {
    Action_init_$Init$(seen1, isValid, serializationConstructorMarker, $this);
    return $this;
  }
  function TestAction_init_$Create$(seen1, isValid, serializationConstructorMarker) {
    return TestAction_init_$Init$(seen1, isValid, serializationConstructorMarker, Object.create(TestAction.prototype));
  }
  function TestAction() {
    Companion_getInstance_6();
    Action.call(this);
  }
  TestAction.$metadata$ = classMeta('TestAction', undefined, undefined, {0: Companion_getInstance_6}, undefined, Action.prototype);
  function Companion_6() {
    Companion_instance_6 = this;
    var tmp = this;
    var tmp$ret$0;
    {
      tmp$ret$0 = Regex_init_$Create$('^(\\d{4})-(\\d{2})-(\\d{2})$');
    }
    tmp.pl_1 = tmp$ret$0;
  }
  Companion_6.prototype.parse = function (componentValue) {
    var tmp0_elvis_lhs = this.pl_1.lb(componentValue);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalArgumentException_init_$Create$('Not a valid local date');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var match = tmp;
    var tmp$ret$1;
    {
      var tmp0_run = match.v3();
      {
      }
      var tmp$ret$0;
      {
        tmp$ret$0 = new LocalDateFields(toInt(tmp0_run.l(1)), toInt(tmp0_run.l(2)), toInt(tmp0_run.l(3)));
      }
      tmp$ret$1 = tmp$ret$0;
    }
    return tmp$ret$1;
  };
  Companion_6.$metadata$ = objectMeta('Companion');
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function LocalDateFields(year, month, day) {
    Companion_getInstance_7();
    this.ql_1 = year;
    this.rl_1 = month;
    this.sl_1 = day;
  }
  LocalDateFields.prototype.tl = function () {
    return this.ql_1;
  };
  LocalDateFields.prototype.ul = function () {
    return this.rl_1;
  };
  LocalDateFields.prototype.vl = function () {
    return this.sl_1;
  };
  LocalDateFields.prototype.toComponentValue = function () {
    return '' + this.ql_1 + '-' + padStart(this.rl_1.toString(), 2, _Char___init__impl__6a9atx(48)) + '-' + padStart(this.sl_1.toString(), 2, _Char___init__impl__6a9atx(48));
  };
  LocalDateFields.prototype.component1 = function () {
    return this.ql_1;
  };
  LocalDateFields.prototype.component2 = function () {
    return this.rl_1;
  };
  LocalDateFields.prototype.component3 = function () {
    return this.sl_1;
  };
  LocalDateFields.prototype.copy = function (year, month, day) {
    return this.wl(year === void 1 ? this.ql_1 : year, month === void 1 ? this.rl_1 : month, day === void 1 ? this.sl_1 : day);
  };
  LocalDateFields.prototype.wl = function (year, month, day) {
    return new LocalDateFields(year, month, day);
  };
  LocalDateFields.prototype.xl = function (year, month, day, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      year = this.ql_1;
    if (!(($mask0 & 2) === 0))
      month = this.rl_1;
    if (!(($mask0 & 4) === 0))
      day = this.sl_1;
    return this.wl(year, month, day);
  };
  LocalDateFields.prototype.toString = function () {
    return 'LocalDateFields(year=' + this.ql_1 + ', month=' + this.rl_1 + ', day=' + this.sl_1 + ')';
  };
  LocalDateFields.prototype.hashCode = function () {
    var result = this.ql_1;
    result = imul(result, 31) + this.rl_1 | 0;
    result = imul(result, 31) + this.sl_1 | 0;
    return result;
  };
  LocalDateFields.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocalDateFields))
      return false;
    var tmp0_other_with_cast = other instanceof LocalDateFields ? other : THROW_CCE();
    if (!(this.ql_1 === tmp0_other_with_cast.ql_1))
      return false;
    if (!(this.rl_1 === tmp0_other_with_cast.rl_1))
      return false;
    if (!(this.sl_1 === tmp0_other_with_cast.sl_1))
      return false;
    return true;
  };
  LocalDateFields.$metadata$ = classMeta('LocalDateFields', [ComponentValue]);
  Object.defineProperty(LocalDateFields.prototype, 'year', {
    configurable: true,
    get: LocalDateFields.prototype.tl
  });
  Object.defineProperty(LocalDateFields.prototype, 'month', {
    configurable: true,
    get: LocalDateFields.prototype.ul
  });
  Object.defineProperty(LocalDateFields.prototype, 'day', {
    configurable: true,
    get: LocalDateFields.prototype.vl
  });
  function Companion_7() {
    Companion_instance_7 = this;
  }
  Companion_7.prototype.parse = function (componentValue) {
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = componentValue;
      }
      tmp$ret$1 = tmp$ret$0.toUpperCase();
    }
    var tmp0_subject = tmp$ret$1;
    var tmp;
    if (tmp0_subject === TransportTypes_getInstance().yl_1.am_1) {
      tmp = TransportTypes_getInstance().yl_1;
    } else if (tmp0_subject === TransportTypes_getInstance().zl_1.am_1) {
      tmp = TransportTypes_getInstance().zl_1;
    } else {
      throw IllegalArgumentException_init_$Create$('Unknown charter type: ' + componentValue);
    }
    return tmp;
  };
  Companion_7.$metadata$ = objectMeta('Companion');
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function TransportType(value) {
    Companion_getInstance_8();
    this.am_1 = value;
  }
  TransportType.prototype.n1 = function () {
    return this.am_1;
  };
  TransportType.prototype.toComponentValue = function () {
    return this.am_1;
  };
  TransportType.prototype.component1 = function () {
    return this.am_1;
  };
  TransportType.prototype.copy = function (value) {
    return this.bm(value === void 1 ? this.am_1 : value);
  };
  TransportType.prototype.bm = function (value) {
    return new TransportType(value);
  };
  TransportType.prototype.cm = function (value, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      value = this.am_1;
    return this.bm(value);
  };
  TransportType.prototype.toString = function () {
    return 'TransportType(value=' + this.am_1 + ')';
  };
  TransportType.prototype.hashCode = function () {
    return getStringHashCode(this.am_1);
  };
  TransportType.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransportType))
      return false;
    var tmp0_other_with_cast = other instanceof TransportType ? other : THROW_CCE();
    if (!(this.am_1 === tmp0_other_with_cast.am_1))
      return false;
    return true;
  };
  TransportType.$metadata$ = classMeta('TransportType', [ComponentValue]);
  Object.defineProperty(TransportType.prototype, 'value', {
    configurable: true,
    get: TransportType.prototype.n1
  });
  function TransportTypes() {
    TransportTypes_instance = this;
    this.yl_1 = new TransportType('FLIGHT');
    this.zl_1 = new TransportType('TRAIN');
  }
  TransportTypes.prototype.dm = function () {
    return this.yl_1;
  };
  TransportTypes.prototype.em = function () {
    return this.zl_1;
  };
  TransportTypes.$metadata$ = objectMeta('TransportTypes');
  Object.defineProperty(TransportTypes.prototype, 'FLIGHT', {
    configurable: true,
    get: TransportTypes.prototype.dm
  });
  Object.defineProperty(TransportTypes.prototype, 'TRAIN', {
    configurable: true,
    get: TransportTypes.prototype.em
  });
  var TransportTypes_instance;
  function TransportTypes_getInstance() {
    if (TransportTypes_instance == null)
      new TransportTypes();
    return TransportTypes_instance;
  }
  function get_MagicLinkHashParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return MagicLinkHashParser;
  }
  var MagicLinkHashParser;
  function get_MagicLinkParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return MagicLinkParser;
  }
  var MagicLinkParser;
  function get_LoginParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return LoginParser;
  }
  var LoginParser;
  function get_SearchParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return SearchParser;
  }
  var SearchParser;
  function get_ProfileParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return ProfileParser;
  }
  var ProfileParser;
  function get_rootParsers() {
    init_properties_testActionParsers_kt_r3bh60();
    return rootParsers;
  }
  var rootParsers;
  function get_RootActionParser() {
    init_properties_testActionParsers_kt_r3bh60();
    return RootActionParser;
  }
  var RootActionParser;
  function sam$com_motorro_keeplink_deeplink_ActionParser$0(function_0) {
    this.fm_1 = function_0;
  }
  sam$com_motorro_keeplink_deeplink_ActionParser$0.prototype.hj = function (components, pathIndex) {
    return this.fm_1(components, pathIndex);
  };
  sam$com_motorro_keeplink_deeplink_ActionParser$0.$metadata$ = classMeta('sam$com_motorro_keeplink_deeplink_ActionParser$0', [ActionParser]);
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_0(function_0) {
    this.gm_1 = function_0;
  }
  sam$com_motorro_keeplink_deeplink_ActionParser$0_0.prototype.hj = function (components, pathIndex) {
    return this.gm_1(components, pathIndex);
  };
  sam$com_motorro_keeplink_deeplink_ActionParser$0_0.$metadata$ = classMeta('sam$com_motorro_keeplink_deeplink_ActionParser$0', [ActionParser]);
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_1(function_0) {
    this.hm_1 = function_0;
  }
  sam$com_motorro_keeplink_deeplink_ActionParser$0_1.prototype.hj = function (components, pathIndex) {
    return this.hm_1(components, pathIndex);
  };
  sam$com_motorro_keeplink_deeplink_ActionParser$0_1.$metadata$ = classMeta('sam$com_motorro_keeplink_deeplink_ActionParser$0', [ActionParser]);
  function sam$com_motorro_keeplink_deeplink_ActionParser$0_2(function_0) {
    this.im_1 = function_0;
  }
  sam$com_motorro_keeplink_deeplink_ActionParser$0_2.prototype.hj = function (components, pathIndex) {
    return this.im_1(components, pathIndex);
  };
  sam$com_motorro_keeplink_deeplink_ActionParser$0_2.$metadata$ = classMeta('sam$com_motorro_keeplink_deeplink_ActionParser$0', [ActionParser]);
  function MagicLinkHashParser$lambda() {
    return function (components, pathIndex) {
      var tmp0_safe_receiver = getOrNull(components.getPath(), pathIndex);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$2;
        {
          {
          }
          var tmp_0;
          var tmp$ret$1;
          {
            var tmp$ret$0;
            {
              tmp$ret$0 = !isBlank(tmp0_safe_receiver);
            }
            tmp$ret$1 = tmp$ret$0;
          }
          if (tmp$ret$1) {
            tmp_0 = tmp0_safe_receiver;
          } else {
            tmp_0 = null;
          }
          tmp$ret$2 = tmp_0;
        }
        tmp = tmp$ret$2;
      }
      var tmp1_safe_receiver = tmp;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp$ret$4;
        {
          {
          }
          var tmp$ret$3;
          {
            tmp$ret$3 = new Magic(tmp1_safe_receiver);
          }
          tmp$ret$4 = tmp$ret$3;
        }
        tmp_1 = tmp$ret$4;
      }
      return tmp_1;
    };
  }
  function MagicLinkParser$lambda() {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return Companion_getInstance_0().ik_1;
    };
  }
  function SearchParser$lambda($tmp0_with) {
    return function (components, _anonymous_parameter_1__qggqgd) {
      var tmp$ret$6;
      {
        var tmp$ret$5;
        {
          var tmp;
          try {
            var tmp$ret$3;
            {
              var tmp0_success = Companion_getInstance();
              var tmp$ret$2;
              {
                var tmp0_safe_receiver = getValue(components.getSearch(), 'type');
                var tmp_0;
                if (tmp0_safe_receiver == null) {
                  tmp_0 = null;
                } else {
                  var tmp$ret$1;
                  {
                    {
                    }
                    var tmp$ret$0;
                    {
                      tmp$ret$0 = Companion_getInstance_8().parse(tmp0_safe_receiver);
                    }
                    tmp$ret$1 = tmp$ret$0;
                  }
                  tmp_0 = tmp$ret$1;
                }
                tmp$ret$2 = tmp_0;
              }
              var tmp1_success = tmp$ret$2;
              tmp$ret$3 = _Result___init__impl__xyqfz8(tmp1_success);
            }
            tmp = tmp$ret$3;
          } catch ($p) {
            var tmp_1;
            if ($p instanceof Error) {
              var tmp$ret$4;
              {
                var tmp2_failure = Companion_getInstance();
                tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure($p));
              }
              tmp_1 = tmp$ret$4;
            } else {
              throw $p;
            }
            tmp = tmp_1;
          }
          tmp$ret$5 = tmp;
        }
        var tmp0_getOrNull = tmp$ret$5;
        var tmp_2;
        if (_Result___get_isFailure__impl__jpiriv(tmp0_getOrNull)) {
          tmp_2 = null;
        } else {
          var tmp_3 = _Result___get_value__impl__bjfvqg(tmp0_getOrNull);
          tmp_2 = (tmp_3 == null ? true : isObject(tmp_3)) ? tmp_3 : THROW_CCE();
        }
        tmp$ret$6 = tmp_2;
      }
      var tmp0_elvis_lhs = tmp$ret$6;
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
      var tmp$ret$13;
      {
        var tmp$ret$12;
        {
          var tmp_7;
          try {
            var tmp$ret$10;
            {
              var tmp0_success_0 = Companion_getInstance();
              var tmp$ret$9;
              {
                var tmp0_safe_receiver_0 = getValue(components.getSearch(), 'date');
                var tmp_8;
                if (tmp0_safe_receiver_0 == null) {
                  tmp_8 = null;
                } else {
                  var tmp$ret$8;
                  {
                    {
                    }
                    var tmp$ret$7;
                    {
                      tmp$ret$7 = Companion_getInstance_7().parse(tmp0_safe_receiver_0);
                    }
                    tmp$ret$8 = tmp$ret$7;
                  }
                  tmp_8 = tmp$ret$8;
                }
                tmp$ret$9 = tmp_8;
              }
              var tmp1_success_0 = tmp$ret$9;
              tmp$ret$10 = _Result___init__impl__xyqfz8(tmp1_success_0);
            }
            tmp_7 = tmp$ret$10;
          } catch ($p) {
            var tmp_9;
            if ($p instanceof Error) {
              var tmp$ret$11;
              {
                var tmp2_failure_0 = Companion_getInstance();
                tmp$ret$11 = _Result___init__impl__xyqfz8(createFailure($p));
              }
              tmp_9 = tmp$ret$11;
            } else {
              throw $p;
            }
            tmp_7 = tmp_9;
          }
          tmp$ret$12 = tmp_7;
        }
        var tmp1_getOrNull = tmp$ret$12;
        var tmp_10;
        if (_Result___get_isFailure__impl__jpiriv(tmp1_getOrNull)) {
          tmp_10 = null;
        } else {
          var tmp_11 = _Result___get_value__impl__bjfvqg(tmp1_getOrNull);
          tmp_10 = (tmp_11 == null ? true : isObject(tmp_11)) ? tmp_11 : THROW_CCE();
        }
        tmp$ret$13 = tmp_10;
      }
      var tmp3_elvis_lhs = tmp$ret$13;
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
    return function () {
      return new Profile();
    };
  }
  function RootActionParser$lambda() {
    return function (components, _anonymous_parameter_1__qggqgd) {
      var tmp;
      var tmp$ret$0;
      {
        var tmp0_isEmpty = components.getPath();
        tmp$ret$0 = tmp0_isEmpty.length === 0;
      }
      if (tmp$ret$0) {
        tmp = new Root();
      } else {
        tmp = new Unknown(components);
      }
      return tmp;
    };
  }
  var properties_initialized_testActionParsers_kt_dq8jr8;
  function init_properties_testActionParsers_kt_r3bh60() {
    if (properties_initialized_testActionParsers_kt_dq8jr8) {
    } else {
      properties_initialized_testActionParsers_kt_dq8jr8 = true;
      var tmp = MagicLinkHashParser$lambda();
      MagicLinkHashParser = new sam$com_motorro_keeplink_deeplink_ActionParser$0(tmp);
      Companion_getInstance_3();
      var tmp_0 = listOf(get_MagicLinkHashParser());
      var tmp_1 = MagicLinkParser$lambda();
      MagicLinkParser = new SegmentCheckParser('magic', new BranchActionParser(tmp_0, new sam$com_motorro_keeplink_deeplink_ActionParser$0_0(tmp_1)));
      Companion_getInstance_4();
      LoginParser = new SegmentCheckParser('login', BranchActionParser_init_$Create$([get_MagicLinkParser()]));
      var tmp$ret$1;
      {
        var tmp0_with = Companion_getInstance_5();
        {
        }
        var tmp$ret$0;
        {
          var tmp_2 = SearchParser$lambda(tmp0_with);
          tmp$ret$0 = new SegmentCheckParser('search', new sam$com_motorro_keeplink_deeplink_ActionParser$0_1(tmp_2));
        }
        tmp$ret$1 = tmp$ret$0;
      }
      SearchParser = tmp$ret$1;
      Companion_getInstance_2();
      ProfileParser = new SegmentCheckParser('profile', new DefaultActionParser(ProfileParser$lambda()));
      rootParsers = listOf_0([get_ProfileParser(), get_LoginParser(), get_SearchParser()]);
      var tmp_3 = get_rootParsers();
      var tmp_4 = RootActionParser$lambda();
      RootActionParser = new BranchActionParser(tmp_3, new sam$com_motorro_keeplink_deeplink_ActionParser$0_2(tmp_4));
    }
  }
  function LinkParsers() {
    LinkParsers_instance = this;
    this.jm_1 = new LinkParser(get_RootActionParser(), 'motorro', '');
    this.km_1 = new LinkParser(get_RootActionParser(), 'http', 'localhost:8080');
  }
  LinkParsers.prototype.lm = function () {
    return this.jm_1;
  };
  LinkParsers.prototype.mm = function () {
    return this.km_1;
  };
  LinkParsers.$metadata$ = objectMeta('LinkParsers');
  Object.defineProperty(LinkParsers.prototype, 'MOTORRO', {
    configurable: true,
    get: LinkParsers.prototype.lm
  });
  Object.defineProperty(LinkParsers.prototype, 'LOCALHOST_8080', {
    configurable: true,
    get: LinkParsers.prototype.mm
  });
  var LinkParsers_instance;
  function LinkParsers_getInstance() {
    if (LinkParsers_instance == null)
      new LinkParsers();
    return LinkParsers_instance;
  }
  function LinkBuilders() {
    LinkBuilders_instance = this;
    this.nm_1 = new LinkBuilder('motorro', '');
    this.om_1 = new LinkBuilder('http', 'localhost:8080');
  }
  LinkBuilders.prototype.lm = function () {
    return this.nm_1;
  };
  LinkBuilders.prototype.mm = function () {
    return this.om_1;
  };
  LinkBuilders.$metadata$ = objectMeta('LinkBuilders');
  Object.defineProperty(LinkBuilders.prototype, 'MOTORRO', {
    configurable: true,
    get: LinkBuilders.prototype.lm
  });
  Object.defineProperty(LinkBuilders.prototype, 'LOCALHOST_8080', {
    configurable: true,
    get: LinkBuilders.prototype.mm
  });
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
    return new Date(localDateFields.ql_1, localDateFields.rl_1 - 1 | 0, localDateFields.sl_1);
  }
  function magicLink(token) {
    return new Magic(token);
  }
  function search(type, from, to, date) {
    return new Search(type, from, to, fromDate(date));
  }
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    $com$motorro$keeplink$testaction.TestAction = TestAction;
    $com$motorro$keeplink$testaction.TestAction.TestAction_init_$Create$ = TestAction_init_$Create$;
    Object.defineProperty($com$motorro$keeplink$testaction.TestAction, 'Companion', {
      configurable: true,
      get: Companion_getInstance_6
    });
    $com$motorro$keeplink$testaction.TestAction.Invalid = Invalid;
    $com$motorro$keeplink$testaction.TestAction.Unknown = Unknown;
    $com$motorro$keeplink$testaction.TestAction.Root = Root;
    $com$motorro$keeplink$testaction.TestAction.Profile = Profile;
    $com$motorro$keeplink$testaction.TestAction.Login = Login;
    $com$motorro$keeplink$testaction.TestAction.Login.Magic = Magic;
    $com$motorro$keeplink$testaction.TestAction.Search = Search;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.LocalDateFields = LocalDateFields;
    Object.defineProperty($com$motorro$keeplink$testaction$data.LocalDateFields, 'Companion', {
      configurable: true,
      get: Companion_getInstance_7
    });
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    var $com$motorro$keeplink$testaction$data = $com$motorro$keeplink$testaction.data || ($com$motorro$keeplink$testaction.data = {});
    $com$motorro$keeplink$testaction$data.TransportType = TransportType;
    Object.defineProperty($com$motorro$keeplink$testaction$data.TransportType, 'Companion', {
      configurable: true,
      get: Companion_getInstance_8
    });
    Object.defineProperty($com$motorro$keeplink$testaction$data, 'TransportTypes', {
      configurable: true,
      get: TransportTypes_getInstance
    });
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$testaction = $com$motorro$keeplink.testaction || ($com$motorro$keeplink.testaction = {});
    Object.defineProperty($com$motorro$keeplink$testaction, 'LinkParsers', {
      configurable: true,
      get: LinkParsers_getInstance
    });
    Object.defineProperty($com$motorro$keeplink$testaction, 'LinkBuilders', {
      configurable: true,
      get: LinkBuilders_getInstance
    });
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
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./uri.js'), require('./deeplink.js')));

//# sourceMappingURL=testaction.js.map