(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri) {
  'use strict';
  //region block: imports
  var getKClass = kotlin_kotlin.$_$.b;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.c4;
  var protoOf = kotlin_kotlin.$_$.z2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.u2;
  var PshComponents = kotlin_com_motorro_keeplink_uri.$_$.b;
  var defineProp = kotlin_kotlin.$_$.n2;
  var initMetadataForClass = kotlin_kotlin.$_$.t2;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForInterface = kotlin_kotlin.$_$.v2;
  var asIterable = kotlin_kotlin.$_$.l1;
  var objectCreate = kotlin_kotlin.$_$.y2;
  var equals = kotlin_kotlin.$_$.o2;
  var FunctionAdapter = kotlin_kotlin.$_$.j2;
  var isInterface = kotlin_kotlin.$_$.x2;
  var hashCode = kotlin_kotlin.$_$.s2;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var $serializer_getInstance = kotlin_com_motorro_keeplink_uri.$_$.j;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var toString = kotlin_kotlin.$_$.a3;
  var utm = kotlin_com_motorro_keeplink_uri.$_$.f;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.q3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var UriComponents_init_$Create$ = kotlin_com_motorro_keeplink_uri.$_$.i;
  var build = kotlin_com_motorro_keeplink_uri.$_$.g;
  var Companion_instance = kotlin_kotlin.$_$.f1;
  var toComponents = kotlin_com_motorro_keeplink_uri.$_$.h;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.q;
  var createFailure = kotlin_kotlin.$_$.a4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.s;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.r;
  var parseUtm = kotlin_com_motorro_keeplink_uri.$_$.e;
  var getOrNull = kotlin_kotlin.$_$.u1;
  var equals_0 = kotlin_kotlin.$_$.f3;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Action, 'Action', VOID, PshComponents, VOID, VOID, VOID, {0: Companion_getInstance});
  initMetadataForInterface(ActionParser, 'ActionParser');
  initMetadataForClass(sam$com_motorro_keeplink_deeplink_ActionParser$0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', VOID, VOID, [ActionParser, FunctionAdapter]);
  initMetadataForClass(BranchActionParser, 'BranchActionParser', VOID, VOID, [ActionParser]);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForInterface(WithAction, 'WithAction');
  initMetadataForClass(DeepLink, 'DeepLink', VOID, PshComponents, [WithAction, PshComponents], VOID, VOID, {0: Companion_getInstance_0});
  initMetadataForClass(DeepLinkSerializer, 'DeepLinkSerializer', VOID, VOID, [KSerializer]);
  initMetadataForClass(DefaultActionParser, 'DefaultActionParser', VOID, VOID, [ActionParser]);
  initMetadataForInterface(LinkBuilder, 'LinkBuilder');
  initMetadataForClass(SchemeHostLinkBuilder, 'SchemeHostLinkBuilder', VOID, VOID, [LinkBuilder]);
  initMetadataForInterface(LinkParser, 'LinkParser');
  initMetadataForClass(SchemeHostLinkParser, 'SchemeHostLinkParser', VOID, VOID, [LinkParser]);
  initMetadataForClass(SegmentCheckParser, 'SegmentCheckParser', VOID, VOID, [ActionParser]);
  //endregion
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.fj_1.j1();
  }
  function Action$Companion$_anonymous__old2xz() {
    var tmp = getKClass(Action);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [];
    return PolymorphicSerializer_init_$Create$(tmp, tmp$ret$2);
  }
  function Companion() {
    Companion_instance_0 = this;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_PUBLICATION_getInstance();
    tmp.fj_1 = lazy(tmp_0, Action$Companion$_anonymous__old2xz);
  }
  protoOf(Companion).gi = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).gj = function (typeParamsSerializers) {
    return this.gi();
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function Action() {
    Companion_getInstance();
    PshComponents.call(this);
    this.hj_1 = true;
  }
  protoOf(Action).getPath = function () {
    // Inline function 'kotlin.emptyArray' call
    return [];
  };
  protoOf(Action).getSearch = function () {
    // Inline function 'kotlin.emptyArray' call
    return [];
  };
  protoOf(Action).getHash = function () {
    return '';
  };
  protoOf(Action).ij = function () {
    return this.hj_1;
  };
  function ActionParser() {
  }
  function BranchActionParser_init_$Init$(children, $this) {
    var tmp = asIterable(children);
    var tmp_0 = BranchActionParser$_init_$lambda_siwkdo;
    BranchActionParser.call($this, tmp, new sam$com_motorro_keeplink_deeplink_ActionParser$0(tmp_0));
    return $this;
  }
  function BranchActionParser_init_$Create$(children) {
    return BranchActionParser_init_$Init$(children, objectCreate(protoOf(BranchActionParser)));
  }
  function sam$com_motorro_keeplink_deeplink_ActionParser$0(function_0) {
    this.kj_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).jj = function (components, pathIndex) {
    return this.kj_1(components, pathIndex);
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).o2 = function () {
    return this.kj_1;
  };
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ActionParser) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.o2(), other.o2());
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
    return hashCode(this.o2());
  };
  function BranchActionParser$_init_$lambda_siwkdo(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return null;
  }
  function BranchActionParser(children, default_0) {
    this.lj_1 = children;
    this.mj_1 = default_0;
  }
  protoOf(BranchActionParser).jj = function (components, pathIndex) {
    var _iterator__ex2g4s = this.lj_1.j();
    while (_iterator__ex2g4s.k()) {
      var child = _iterator__ex2g4s.l();
      var tmp0_safe_receiver = child.jj(components, pathIndex + 1 | 0);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    return this.mj_1.jj(components, pathIndex);
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.oj_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer)));
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', null, 2);
    tmp0_serialDesc.xg('action', false);
    tmp0_serialDesc.xg('utm', false);
    this.pj_1 = tmp0_serialDesc;
  }
  protoOf(Companion_0).qj = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_0).gj = function (typeParamsSerializers) {
    return this.qj(typeParamsSerializers[0]);
  };
  protoOf(Companion_0).rj = function () {
    return this.pj_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', this, 2);
    tmp0_serialDesc.xg('action', false);
    tmp0_serialDesc.xg('utm', false);
    this.nj_1 = tmp0_serialDesc;
  }
  protoOf($serializer).qd = function () {
    return this.nj_1;
  };
  protoOf($serializer).zg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.oj_1, $serializer_getInstance()];
  };
  protoOf($serializer).ah = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.oj_1];
  };
  function DeepLink(action, utm) {
    Companion_getInstance_0();
    PshComponents.call(this);
    this.sj_1 = action;
    this.utm = utm;
  }
  protoOf(DeepLink).tj = function () {
    return this.sj_1;
  };
  protoOf(DeepLink).uj = function () {
    return this.utm;
  };
  protoOf(DeepLink).ij = function () {
    return this.sj_1.isValid;
  };
  protoOf(DeepLink).withUtm = function (utm) {
    return new DeepLink(this.sj_1, utm);
  };
  protoOf(DeepLink).getPath = function () {
    return this.sj_1.getPath();
  };
  protoOf(DeepLink).getSearch = function () {
    var tmp0 = this.sj_1.getSearch();
    // Inline function 'kotlin.collections.plus' call
    var elements = this.utm.getSearch();
    // Inline function 'kotlin.js.asDynamic' call
    return tmp0.concat(elements);
  };
  protoOf(DeepLink).getHash = function () {
    return this.sj_1.getHash();
  };
  protoOf(DeepLink).toString = function () {
    return 'DeepLink(action=' + toString(this.sj_1) + ', utm=' + this.utm.toString() + ')';
  };
  function deepLink(action) {
    return new DeepLink(action, utm(''));
  }
  function DeepLinkSerializer(builder, parser) {
    this.vj_1 = builder;
    this.wj_1 = parser;
    this.xj_1 = PrimitiveSerialDescriptor('DeepLink', STRING_getInstance());
  }
  protoOf(DeepLinkSerializer).qd = function () {
    return this.xj_1;
  };
  protoOf(DeepLinkSerializer).yj = function (encoder, value) {
    encoder.zj(this.vj_1.build(value));
  };
  protoOf(DeepLinkSerializer).ak = function (encoder, value) {
    return this.yj(encoder, value instanceof DeepLink ? value : THROW_CCE());
  };
  protoOf(DeepLinkSerializer).bk = function (decoder) {
    var tmp0 = this.wj_1.parse(decoder.ck());
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      if (tmp0 == null) {
        // Inline function 'com.motorro.keeplink.deeplink.DeepLinkSerializer.deserialize.<anonymous>' call
        var message = 'Tried to deserialize invalid link: ' + decoder.ck();
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = tmp0;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  function DefaultActionParser(action) {
    this.dk_1 = action;
  }
  protoOf(DefaultActionParser).jj = function (components, pathIndex) {
    return this.dk_1();
  };
  function LinkBuilder() {
  }
  function SchemeHostLinkBuilder(targetScheme, targetHost) {
    this.ek_1 = targetScheme;
    this.fk_1 = targetHost;
  }
  protoOf(SchemeHostLinkBuilder).build = function (link) {
    return build(UriComponents_init_$Create$(this.ek_1, this.fk_1, link));
  };
  function LinkParser() {
  }
  function isTargetUri(_this__u8e3s4, $this) {
    return _this__u8e3s4.bi_1 === $this.hk_1 && _this__u8e3s4.ci_1 === $this.ik_1;
  }
  function parseUri($this, uri) {
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseUri.<anonymous>' call
      // Inline function 'kotlin.takeIf' call
      var this_0 = toComponents(uri);
      var tmp_0;
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseUri.<anonymous>.<anonymous>' call
      if (isTargetUri(this_0, $this)) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
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
    var this_1 = tmp;
    var tmp_2;
    if (_Result___get_isFailure__impl__jpiriv(this_1)) {
      tmp_2 = null;
    } else {
      var tmp_3 = _Result___get_value__impl__bjfvqg(this_1);
      tmp_2 = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
    }
    return tmp_2;
  }
  function parseLink($this, components) {
    var tmp0_safe_receiver = $this.gk_1.jj(components, -1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseLink.<anonymous>' call
      tmp = new DeepLink(tmp0_safe_receiver, parseUtm(components));
    }
    return tmp;
  }
  function SchemeHostLinkParser(parser, targetScheme, targetHost) {
    this.gk_1 = parser;
    this.hk_1 = targetScheme;
    this.ik_1 = targetHost;
  }
  protoOf(SchemeHostLinkParser).parse = function (uri) {
    var tmp0_safe_receiver = parseUri(this, uri);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parse.stub_for_inlining' call
      tmp = parseLink(this, tmp0_safe_receiver);
    }
    return tmp;
  };
  function SegmentCheckParser(segment, next) {
    this.jk_1 = segment;
    this.kk_1 = next;
  }
  protoOf(SegmentCheckParser).jj = function (components, pathIndex) {
    return false === equals_0(this.jk_1, getOrNull(components.getPath(), pathIndex), true) ? null : this.kk_1.jj(components, pathIndex);
  };
  function WithAction() {
  }
  //region block: post-declaration
  defineProp(protoOf(Action), 'isValid', function () {
    return this.ij();
  });
  defineProp(protoOf(Companion_0), '$cachedDescriptor', protoOf(Companion_0).rj);
  defineProp(protoOf(DeepLink), 'action', function () {
    return this.tj();
  });
  defineProp(protoOf(DeepLink), 'isValid', protoOf(DeepLink).ij);
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.Action = Action;
    defineProp($com$motorro$keeplink$deeplink.Action, 'Companion', Companion_getInstance);
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.DeepLink = DeepLink;
    defineProp($com$motorro$keeplink$deeplink.DeepLink, 'Companion', Companion_getInstance_0);
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
    $com$motorro$keeplink$deeplink.SchemeHostLinkBuilder = SchemeHostLinkBuilder;
    var $com = _.com || (_.com = {});
    var $com$motorro = $com.motorro || ($com.motorro = {});
    var $com$motorro$keeplink = $com$motorro.keeplink || ($com$motorro.keeplink = {});
    var $com$motorro$keeplink$deeplink = $com$motorro$keeplink.deeplink || ($com$motorro$keeplink.deeplink = {});
    $com$motorro$keeplink$deeplink.SchemeHostLinkParser = SchemeHostLinkParser;
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
  _.$_$.e = SchemeHostLinkBuilder;
  _.$_$.f = SchemeHostLinkParser;
  _.$_$.g = SegmentCheckParser;
  _.$_$.h = BranchActionParser_init_$Create$;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./uri.js')));

//# sourceMappingURL=deeplink.js.map
