(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri) {
  'use strict';
  //region block: imports
  var getKClass = kotlin_kotlin.$_$.b;
  var Unit_getInstance = kotlin_kotlin.$_$.l1;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.c;
  var lazy = kotlin_kotlin.$_$.y3;
  var SerializerFactory = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.k;
  var objectMeta = kotlin_kotlin.$_$.c3;
  var PshComponents = kotlin_com_motorro_keeplink_uri.$_$.b;
  var classMeta = kotlin_kotlin.$_$.t2;
  var interfaceMeta = kotlin_kotlin.$_$.z2;
  var asIterable = kotlin_kotlin.$_$.q1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var $serializer_getInstance = kotlin_com_motorro_keeplink_uri.$_$.j;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var THROW_CCE = kotlin_kotlin.$_$.u3;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var utm = kotlin_com_motorro_keeplink_uri.$_$.f;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.d;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g;
  var toString = kotlin_kotlin.$_$.d3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.q;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var UriComponents_init_$Create$ = kotlin_com_motorro_keeplink_uri.$_$.i;
  var build = kotlin_com_motorro_keeplink_uri.$_$.g;
  var Companion_getInstance = kotlin_kotlin.$_$.k1;
  var toComponents = kotlin_com_motorro_keeplink_uri.$_$.h;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.w;
  var createFailure = kotlin_kotlin.$_$.w3;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.y;
  var isObject = kotlin_kotlin.$_$.b3;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.x;
  var parseUtm = kotlin_com_motorro_keeplink_uri.$_$.e;
  var getOrNull = kotlin_kotlin.$_$.a2;
  var equals = kotlin_kotlin.$_$.i3;
  //endregion
  //region block: pre-declaration
  Action.prototype = Object.create(PshComponents.prototype);
  Action.prototype.constructor = Action;
  DeepLink.prototype = Object.create(PshComponents.prototype);
  DeepLink.prototype.constructor = DeepLink;
  //endregion
  function Action$Companion$$cachedSerializer$delegate$_anonymous__v9cq2o() {
    return function () {
      var tmp = getKClass(Action);
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
      return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
    };
  }
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.dj_1 = lazy(tmp_0, Action$Companion$$cachedSerializer$delegate$_anonymous__v9cq2o());
  }
  Companion.prototype.serializer = function () {
    return this.dj_1.n1();
  };
  Companion.prototype.ej = function (typeParamsSerializers) {
    return this.serializer();
  };
  Companion.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Action_init_$Init$(seen1, isValid, serializationConstructorMarker, $this) {
    PshComponents.call($this);
    if (0 === (seen1 & 1))
      $this.fj_1 = true;
    else
      $this.fj_1 = isValid;
    return $this;
  }
  function Action_init_$Create$(seen1, isValid, serializationConstructorMarker) {
    return Action_init_$Init$(seen1, isValid, serializationConstructorMarker, Object.create(Action.prototype));
  }
  function Action() {
    Companion_getInstance_0();
    PshComponents.call(this);
    this.fj_1 = true;
  }
  Action.prototype.getPath = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = [];
    }
    return tmp$ret$0;
  };
  Action.prototype.getSearch = function () {
    var tmp$ret$0;
    {
      tmp$ret$0 = [];
    }
    return tmp$ret$0;
  };
  Action.prototype.getHash = function () {
    return '';
  };
  Action.prototype.gj = function () {
    return this.fj_1;
  };
  Action.$metadata$ = classMeta('Action', undefined, undefined, {0: Companion_getInstance_0}, undefined, PshComponents.prototype);
  Object.defineProperty(Action.prototype, 'isValid', {
    configurable: true,
    get: function () {
      return this.gj();
    }
  });
  function ActionParser() {
  }
  ActionParser.$metadata$ = interfaceMeta('ActionParser');
  function BranchActionParser_init_$Init$(children, $this) {
    var tmp = asIterable(children);
    var tmp_0 = BranchActionParser$_init_$lambda_siwkdo();
    BranchActionParser.call($this, tmp, new sam$com_motorro_keeplink_deeplink_ActionParser$0(tmp_0));
    return $this;
  }
  function BranchActionParser_init_$Create$(children) {
    return BranchActionParser_init_$Init$(children, Object.create(BranchActionParser.prototype));
  }
  function sam$com_motorro_keeplink_deeplink_ActionParser$0(function_0) {
    this.ij_1 = function_0;
  }
  sam$com_motorro_keeplink_deeplink_ActionParser$0.prototype.hj = function (components, pathIndex) {
    return this.ij_1(components, pathIndex);
  };
  sam$com_motorro_keeplink_deeplink_ActionParser$0.$metadata$ = classMeta('sam$com_motorro_keeplink_deeplink_ActionParser$0', [ActionParser]);
  function BranchActionParser$_init_$lambda_siwkdo() {
    return function (_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
      return null;
    };
  }
  function BranchActionParser(children, default_0) {
    this.jj_1 = children;
    this.kj_1 = default_0;
  }
  BranchActionParser.prototype.hj = function (components, pathIndex) {
    var tmp0_iterator = this.jj_1.g();
    while (tmp0_iterator.i()) {
      var child = tmp0_iterator.j();
      var tmp1_safe_receiver = child.hj(components, pathIndex + 1 | 0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        var tmp$ret$0;
        {
          {
          }
          return tmp1_safe_receiver;
        }
      }
    }
    return this.kj_1.hj(components, pathIndex);
  };
  BranchActionParser.$metadata$ = classMeta('BranchActionParser', [ActionParser]);
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.mj_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, Object.create($serializer.prototype));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', null, 2);
    tmp0_serialDesc.ng('action', false);
    tmp0_serialDesc.ng('utm', false);
    Companion_getInstance_1().nj_1 = tmp0_serialDesc;
  }
  Companion_0.prototype.serializer = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  Companion_0.prototype.ej = function (typeParamsSerializers) {
    return this.serializer(typeParamsSerializers[0]);
  };
  Companion_0.$metadata$ = objectMeta('Companion', [SerializerFactory]);
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', this, 2);
    tmp0_serialDesc.ng('action', false);
    tmp0_serialDesc.ng('utm', false);
    this.lj_1 = tmp0_serialDesc;
  }
  $serializer.prototype.ld = function () {
    return this.lj_1;
  };
  $serializer.prototype.kg = function () {
    var tmp$ret$2;
    {
      var tmp0_arrayOf = [this.mj_1, $serializer_getInstance()];
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
    var tmp0_desc = this.lj_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.hh(tmp0_desc);
    if (tmp6_input.kh()) {
      tmp4_local0 = tmp6_input.oj(tmp0_desc, 0, this.mj_1, tmp4_local0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.oj(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.ih(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.oj(tmp0_desc, 0, this.mj_1, tmp4_local0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.oj(tmp0_desc, 1, $serializer_getInstance(), tmp5_local1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.lh(tmp0_desc);
    return DeepLink_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  $serializer.prototype.pj = function (encoder, value) {
    var tmp0_desc = this.lj_1;
    var tmp1_output = encoder.hh(tmp0_desc);
    tmp1_output.sj(tmp0_desc, 0, this.mj_1, value.qj_1);
    tmp1_output.sj(tmp0_desc, 1, $serializer_getInstance(), value.rj_1);
    tmp1_output.lh(tmp0_desc);
  };
  $serializer.prototype.qh = function (encoder, value) {
    return this.pj(encoder, value instanceof DeepLink ? value : THROW_CCE());
  };
  $serializer.prototype.lg = function () {
    var tmp$ret$2;
    {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = [this.mj_1];
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp$ret$2 = tmp$ret$1;
    }
    return tmp$ret$2;
  };
  $serializer.$metadata$ = classMeta('$serializer', [GeneratedSerializer]);
  function DeepLink_init_$Init$(seen1, action, utm, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen1)))
      throwMissingFieldException(seen1, 3, Companion_getInstance_1().nj_1);
    PshComponents.call($this);
    $this.qj_1 = action;
    $this.rj_1 = utm;
    return $this;
  }
  function DeepLink_init_$Create$(seen1, action, utm, serializationConstructorMarker) {
    return DeepLink_init_$Init$(seen1, action, utm, serializationConstructorMarker, Object.create(DeepLink.prototype));
  }
  function DeepLink(action, utm) {
    Companion_getInstance_1();
    PshComponents.call(this);
    this.qj_1 = action;
    this.rj_1 = utm;
  }
  DeepLink.prototype.tj = function () {
    return this.qj_1;
  };
  DeepLink.prototype.uj = function () {
    return this.rj_1;
  };
  DeepLink.prototype.gj = function () {
    return this.qj_1.isValid;
  };
  DeepLink.prototype.withUtm = function (utm) {
    return new DeepLink(this.qj_1, utm);
  };
  DeepLink.prototype.getPath = function () {
    return this.qj_1.getPath();
  };
  DeepLink.prototype.getSearch = function () {
    var tmp$ret$1;
    {
      var tmp0_plus = this.qj_1.getSearch();
      var tmp1_plus = this.rj_1.getSearch();
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_plus;
      }
      tmp$ret$1 = tmp$ret$0.concat(tmp1_plus);
    }
    return tmp$ret$1;
  };
  DeepLink.prototype.getHash = function () {
    return this.qj_1.getHash();
  };
  DeepLink.prototype.toString = function () {
    return 'DeepLink(action=' + this.qj_1 + ', utm=' + this.rj_1 + ')';
  };
  DeepLink.$metadata$ = classMeta('DeepLink', [WithAction], undefined, {0: Companion_getInstance_1}, undefined, PshComponents.prototype);
  Object.defineProperty(DeepLink.prototype, 'action', {
    configurable: true,
    get: function () {
      return this.tj();
    }
  });
  Object.defineProperty(DeepLink.prototype, 'utm', {
    configurable: true,
    get: DeepLink.prototype.uj
  });
  Object.defineProperty(DeepLink.prototype, 'isValid', {
    configurable: true,
    get: DeepLink.prototype.gj
  });
  function deepLink(action) {
    return new DeepLink(action, utm(''));
  }
  function DeepLinkSerializer(builder, parser) {
    this.vj_1 = builder;
    this.wj_1 = parser;
    this.xj_1 = PrimitiveSerialDescriptor('DeepLink', STRING_getInstance());
  }
  DeepLinkSerializer.prototype.ld = function () {
    return this.xj_1;
  };
  DeepLinkSerializer.prototype.pj = function (encoder, value) {
    encoder.yj(this.vj_1.build(value));
  };
  DeepLinkSerializer.prototype.qh = function (encoder, value) {
    return this.pj(encoder, value instanceof DeepLink ? value : THROW_CCE());
  };
  DeepLinkSerializer.prototype.gh = function (decoder) {
    var tmp$ret$1;
    $l$block: {
      var tmp0_requireNotNull = this.wj_1.parse(decoder.zj());
      {
      }
      if (tmp0_requireNotNull == null) {
        var tmp$ret$0;
        {
          tmp$ret$0 = 'Tried to deserialize invalid link: ' + decoder.zj();
        }
        var message = tmp$ret$0;
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0_requireNotNull;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  DeepLinkSerializer.$metadata$ = classMeta('DeepLinkSerializer', [KSerializer]);
  function DefaultActionParser(action) {
    this.ak_1 = action;
  }
  DefaultActionParser.prototype.hj = function (components, pathIndex) {
    return this.ak_1();
  };
  DefaultActionParser.$metadata$ = classMeta('DefaultActionParser', [ActionParser]);
  function LinkBuilder(targetScheme, targetHost) {
    this.bk_1 = targetScheme;
    this.ck_1 = targetHost;
  }
  LinkBuilder.prototype.build = function (link) {
    return build(UriComponents_init_$Create$(this.bk_1, this.ck_1, link));
  };
  LinkBuilder.$metadata$ = classMeta('LinkBuilder');
  function isTargetUri(_this__u8e3s4, $this) {
    return _this__u8e3s4.ah_1 === $this.ek_1 ? _this__u8e3s4.bh_1 === $this.fk_1 : false;
  }
  function parseUri($this, uri) {
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
              var tmp$ret$1;
              {
                var tmp0_takeIf = toComponents(uri);
                {
                }
                var tmp_0;
                var tmp$ret$0;
                {
                  tmp$ret$0 = isTargetUri(tmp0_takeIf, $this);
                }
                if (tmp$ret$0) {
                  tmp_0 = tmp0_takeIf;
                } else {
                  tmp_0 = null;
                }
                tmp$ret$1 = tmp_0;
              }
              tmp$ret$2 = tmp$ret$1;
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
    return tmp$ret$6;
  }
  function parseLink($this, components) {
    var tmp0_safe_receiver = $this.dk_1.hj(components, -1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          tmp$ret$0 = new DeepLink(tmp0_safe_receiver, parseUtm(components));
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    return tmp;
  }
  function LinkParser(parser, targetScheme, targetHost) {
    this.dk_1 = parser;
    this.ek_1 = targetScheme;
    this.fk_1 = targetHost;
  }
  LinkParser.prototype.parse = function (uri) {
    var tmp0_safe_receiver = parseUri(this, uri);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = parseLink(this, tmp0_safe_receiver);
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  };
  LinkParser.$metadata$ = classMeta('LinkParser');
  function SegmentCheckParser(segment, next) {
    this.gk_1 = segment;
    this.hk_1 = next;
  }
  SegmentCheckParser.prototype.hj = function (components, pathIndex) {
    return false === equals(this.gk_1, getOrNull(components.getPath(), pathIndex), true) ? null : this.hk_1.hj(components, pathIndex);
  };
  SegmentCheckParser.$metadata$ = classMeta('SegmentCheckParser', [ActionParser]);
  function WithAction() {
  }
  WithAction.$metadata$ = interfaceMeta('WithAction');
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.Action = Action;
    $com$motorro$keeplink$deeplink.Action.Action_init_$Create$ = Action_init_$Create$;
    Object.defineProperty($com$motorro$keeplink$deeplink.Action, 'Companion', {
      configurable: true,
      get: Companion_getInstance_0
    });
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.DeepLink = DeepLink;
    $com$motorro$keeplink$deeplink.DeepLink.DeepLink_init_$Create$ = DeepLink_init_$Create$;
    Object.defineProperty($com$motorro$keeplink$deeplink.DeepLink, 'Companion', {
      configurable: true,
      get: Companion_getInstance_1
    });
    $com$motorro$keeplink$deeplink.DeepLink.$serializer = $serializer;
    $com$motorro$keeplink$deeplink.DeepLink.$serializer.$serializer_init_$Create$ = $serializer_init_$Create$;
    $com$motorro$keeplink$deeplink.deepLink = deepLink;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.DeepLinkSerializer = DeepLinkSerializer;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.LinkBuilder = LinkBuilder;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.LinkParser = LinkParser;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = ActionParser;
  _.$_$.b = Action;
  _.$_$.c = BranchActionParser;
  _.$_$.d = DefaultActionParser;
  _.$_$.e = LinkBuilder;
  _.$_$.f = LinkParser;
  _.$_$.g = SegmentCheckParser;
  _.$_$.h = Action_init_$Init$;
  _.$_$.i = BranchActionParser_init_$Create$;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'), require('./kotlinx-serialization-kotlinx-serialization-core-js-ir.js'), require('./uri.js')));

//# sourceMappingURL=deeplink.js.map