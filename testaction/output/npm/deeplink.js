(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_com_motorro_keeplink_uri) {
  'use strict';
  //region block: imports
  var getKClass = kotlin_kotlin.$_$.b;
  var PolymorphicSerializer_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.a;
  var LazyThreadSafetyMode_PUBLICATION_getInstance = kotlin_kotlin.$_$.d;
  var lazy = kotlin_kotlin.$_$.e4;
  var protoOf = kotlin_kotlin.$_$.z2;
  var objectMeta = kotlin_kotlin.$_$.y2;
  var setMetadataFor = kotlin_kotlin.$_$.a3;
  var PshComponents = kotlin_com_motorro_keeplink_uri.$_$.b;
  var defineProp = kotlin_kotlin.$_$.p2;
  var classMeta = kotlin_kotlin.$_$.o2;
  var VOID = kotlin_kotlin.$_$.c;
  var asIterable = kotlin_kotlin.$_$.m1;
  var objectCreate = kotlin_kotlin.$_$.x2;
  var Unit_instance = kotlin_kotlin.$_$.k1;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.i;
  var $serializer_getInstance = kotlin_com_motorro_keeplink_uri.$_$.j;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.h;
  var utm = kotlin_com_motorro_keeplink_uri.$_$.f;
  var STRING_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var PrimitiveSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.f;
  var THROW_CCE = kotlin_kotlin.$_$.s3;
  var toString = kotlin_kotlin.$_$.b3;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.m;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.j;
  var interfaceMeta = kotlin_kotlin.$_$.v2;
  var UriComponents_init_$Create$ = kotlin_com_motorro_keeplink_uri.$_$.i;
  var build = kotlin_com_motorro_keeplink_uri.$_$.g;
  var Companion_instance = kotlin_kotlin.$_$.f1;
  var toComponents = kotlin_com_motorro_keeplink_uri.$_$.h;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.r;
  var createFailure = kotlin_kotlin.$_$.c4;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.t;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.s;
  var parseUtm = kotlin_com_motorro_keeplink_uri.$_$.e;
  var getOrNull = kotlin_kotlin.$_$.v1;
  var equals = kotlin_kotlin.$_$.g3;
  //endregion
  //region block: pre-declaration
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Action, 'Action', classMeta, PshComponents, VOID, VOID, VOID, {0: Companion_getInstance});
  setMetadataFor(sam$com_motorro_keeplink_deeplink_ActionParser$0, 'sam$com_motorro_keeplink_deeplink_ActionParser$0', classMeta);
  setMetadataFor(BranchActionParser, 'BranchActionParser', classMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor($serializer, '$serializer', classMeta, VOID, [GeneratedSerializer]);
  setMetadataFor(WithAction, 'WithAction', interfaceMeta);
  setMetadataFor(DeepLink, 'DeepLink', classMeta, PshComponents, [WithAction, PshComponents], VOID, VOID, {0: Companion_getInstance_0});
  setMetadataFor(DeepLinkSerializer, 'DeepLinkSerializer', classMeta, VOID, [KSerializer]);
  setMetadataFor(DefaultActionParser, 'DefaultActionParser', classMeta);
  setMetadataFor(LinkBuilder, 'LinkBuilder', interfaceMeta);
  setMetadataFor(SchemeHostLinkBuilder, 'SchemeHostLinkBuilder', classMeta, VOID, [LinkBuilder]);
  setMetadataFor(LinkParser, 'LinkParser', interfaceMeta);
  setMetadataFor(SchemeHostLinkParser, 'SchemeHostLinkParser', classMeta, VOID, [LinkParser]);
  setMetadataFor(SegmentCheckParser, 'SegmentCheckParser', classMeta);
  //endregion
  function _get_$cachedSerializer__te6jhj($this) {
    return $this.hi_1.f4();
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
    tmp.hi_1 = lazy(tmp_0, Action$Companion$_anonymous__old2xz);
  }
  protoOf(Companion).ih = function () {
    return _get_$cachedSerializer__te6jhj(this);
  };
  protoOf(Companion).ii = function (typeParamsSerializers) {
    return this.ih();
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
    this.ji_1 = true;
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
  protoOf(Action).ki = function () {
    return this.ji_1;
  };
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
    this.li_1 = function_0;
  }
  protoOf(sam$com_motorro_keeplink_deeplink_ActionParser$0).mi = function (components, pathIndex) {
    return this.li_1(components, pathIndex);
  };
  function BranchActionParser$_init_$lambda_siwkdo(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return null;
  }
  function BranchActionParser(children, default_0) {
    this.ni_1 = children;
    this.oi_1 = default_0;
  }
  protoOf(BranchActionParser).mi = function (components, pathIndex) {
    var tmp0_iterator = this.ni_1.n();
    while (tmp0_iterator.u()) {
      var child = tmp0_iterator.v();
      var tmp1_safe_receiver = child.mi(components, pathIndex + 1 | 0);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        return tmp1_safe_receiver;
      }
    }
    return this.oi_1.mi(components, pathIndex);
  };
  function $serializer_init_$Init$(typeSerial0, $this) {
    $serializer.call($this);
    $this.qi_1 = typeSerial0;
    return $this;
  }
  function $serializer_init_$Create$(typeSerial0) {
    return $serializer_init_$Init$(typeSerial0, objectCreate(protoOf($serializer)));
  }
  function Companion_0() {
    Companion_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', null, 2);
    tmp0_serialDesc.zf('action', false);
    tmp0_serialDesc.zf('utm', false);
    this.ri_1 = tmp0_serialDesc;
  }
  protoOf(Companion_0).si = function (typeSerial0) {
    return $serializer_init_$Create$(typeSerial0);
  };
  protoOf(Companion_0).ii = function (typeParamsSerializers) {
    return this.si(typeParamsSerializers[0]);
  };
  protoOf(Companion_0).ti = function () {
    return this.ri_1;
  };
  var Companion_instance_1;
  function Companion_getInstance_0() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function $serializer() {
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.motorro.keeplink.deeplink.DeepLink', this, 2);
    tmp0_serialDesc.zf('action', false);
    tmp0_serialDesc.zf('utm', false);
    this.pi_1 = tmp0_serialDesc;
  }
  protoOf($serializer).tc = function () {
    return this.pi_1;
  };
  protoOf($serializer).bg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.qi_1, $serializer_getInstance()];
  };
  protoOf($serializer).cg = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [this.qi_1];
  };
  function DeepLink(action, utm) {
    Companion_getInstance_0();
    PshComponents.call(this);
    this.ui_1 = action;
    this.utm = utm;
  }
  protoOf(DeepLink).vi = function () {
    return this.ui_1;
  };
  protoOf(DeepLink).wi = function () {
    return this.utm;
  };
  protoOf(DeepLink).ki = function () {
    return this.ui_1.isValid;
  };
  protoOf(DeepLink).withUtm = function (utm) {
    return new DeepLink(this.ui_1, utm);
  };
  protoOf(DeepLink).getPath = function () {
    return this.ui_1.getPath();
  };
  protoOf(DeepLink).getSearch = function () {
    // Inline function 'kotlin.collections.plus' call
    var this_0 = this.ui_1.getSearch();
    var elements = this.utm.getSearch();
    // Inline function 'kotlin.js.asDynamic' call
    return this_0.concat(elements);
  };
  protoOf(DeepLink).getHash = function () {
    return this.ui_1.getHash();
  };
  protoOf(DeepLink).toString = function () {
    return 'DeepLink(action=' + this.ui_1 + ', utm=' + this.utm + ')';
  };
  function deepLink(action) {
    return new DeepLink(action, utm(''));
  }
  function DeepLinkSerializer(builder, parser) {
    this.xi_1 = builder;
    this.yi_1 = parser;
    this.zi_1 = PrimitiveSerialDescriptor('DeepLink', STRING_getInstance());
  }
  protoOf(DeepLinkSerializer).tc = function () {
    return this.zi_1;
  };
  protoOf(DeepLinkSerializer).aj = function (encoder, value) {
    encoder.bj(this.xi_1.build(value));
  };
  protoOf(DeepLinkSerializer).cj = function (encoder, value) {
    return this.aj(encoder, value instanceof DeepLink ? value : THROW_CCE());
  };
  protoOf(DeepLinkSerializer).dj = function (decoder) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.requireNotNull' call
      var value = this.yi_1.parse(decoder.ej());
      // Inline function 'kotlin.contracts.contract' call
      if (value == null) {
        // Inline function 'com.motorro.keeplink.deeplink.DeepLinkSerializer.deserialize.<anonymous>' call
        var message = 'Tried to deserialize invalid link: ' + decoder.ej();
        throw IllegalArgumentException_init_$Create$(toString(message));
      } else {
        tmp$ret$1 = value;
        break $l$block;
      }
    }
    return tmp$ret$1;
  };
  function DefaultActionParser(action) {
    this.fj_1 = action;
  }
  protoOf(DefaultActionParser).mi = function (components, pathIndex) {
    return this.fj_1();
  };
  function LinkBuilder() {
  }
  function SchemeHostLinkBuilder(targetScheme, targetHost) {
    this.gj_1 = targetScheme;
    this.hj_1 = targetHost;
  }
  protoOf(SchemeHostLinkBuilder).build = function (link) {
    return build(UriComponents_init_$Create$(this.gj_1, this.hj_1, link));
  };
  function LinkParser() {
  }
  function isTargetUri(_this__u8e3s4, $this) {
    return _this__u8e3s4.dh_1 === $this.jj_1 ? _this__u8e3s4.eh_1 === $this.kj_1 : false;
  }
  function parseUri($this, uri) {
    // Inline function 'kotlin.Result.getOrNull' call
    // Inline function 'kotlin.runCatching' call
    var tmp;
    try {
      // Inline function 'kotlin.Companion.success' call
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseUri.<anonymous>' call
      // Inline function 'kotlin.takeIf' call
      var this_0 = toComponents(uri);
      // Inline function 'kotlin.contracts.contract' call
      var tmp_0;
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseUri.<anonymous>.<anonymous>' call
      if (isTargetUri(this_0, $this)) {
        tmp_0 = this_0;
      } else {
        tmp_0 = null;
      }
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
    var tmp0_safe_receiver = $this.ij_1.mi(components, -1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'com.motorro.keeplink.deeplink.SchemeHostLinkParser.parseLink.<anonymous>' call
      tmp = new DeepLink(tmp0_safe_receiver, parseUtm(components));
    }
    return tmp;
  }
  function SchemeHostLinkParser(parser, targetScheme, targetHost) {
    this.ij_1 = parser;
    this.jj_1 = targetScheme;
    this.kj_1 = targetHost;
  }
  protoOf(SchemeHostLinkParser).parse = function (uri) {
    var tmp0_safe_receiver = parseUri(this, uri);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      tmp = parseLink(this, tmp0_safe_receiver);
    }
    return tmp;
  };
  function SegmentCheckParser(segment, next) {
    this.lj_1 = segment;
    this.mj_1 = next;
  }
  protoOf(SegmentCheckParser).mi = function (components, pathIndex) {
    return false === equals(this.lj_1, getOrNull(components.getPath(), pathIndex), true) ? null : this.mj_1.mi(components, pathIndex);
  };
  function WithAction() {
  }
  //region block: post-declaration
  defineProp(protoOf(Action), 'isValid', function () {
    return this.ki();
  });
  defineProp(protoOf(Companion_0), '$cachedDescriptor', protoOf(Companion_0).ti);
  defineProp(protoOf(DeepLink), 'action', function () {
    return this.vi();
  });
  defineProp(protoOf(DeepLink), 'isValid', protoOf(DeepLink).ki);
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
  _.$_$.a = Action;
  _.$_$.b = BranchActionParser;
  _.$_$.c = DefaultActionParser;
  _.$_$.d = SchemeHostLinkBuilder;
  _.$_$.e = SchemeHostLinkParser;
  _.$_$.f = SegmentCheckParser;
  _.$_$.g = BranchActionParser_init_$Create$;
  //endregion
  return _;
}(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./uri.js')));

//# sourceMappingURL=deeplink.js.map
