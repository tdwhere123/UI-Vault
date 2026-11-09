if(window.__paperLifecycle){try{var Wae,Zae,Xae,qae,Yae,Kae,Jae,Qae,ese,tse,nse,ise,rse,ose,ase,sse,lse,use,cse,fse,dse,hse,pse,mse,gse,vse,yse,_se,bse,xse,Sse,wse,Tse,Ese,Mse,Ase,Cse,Rse,kse,Ise,Pse,Dse,zse,Nse,Ose,Use,Lse,$se,Fse,Bse,Hse,Vse,Gse,jse,Wse,Zse,Xse,qse,Yse,Kse,Jse,Qse,ele,tle,nle,ile,rle,ole,ale,sle,lle,ule,cle,fle,dle,hle,ple,mle,gle,vle,yle,_le,ble,xle,Sle,wle,Tle,Ele,Mle,Ale,Cle,Rle,kle,Ile,Ple,Dle,zle,Nle,Ole,Ule,Lle,$le,Fle,Ble,Hle,Vle,Gle,jle,Wle,Zle,Xle,qle,Yle,Kle,Jle,Qle,eue,tue,nue,iue,rue,oue,aue,sue,lue,uue,cue,fue,due,hue,pue,mue,gue,vue,yue,_ue,bue,xue,Sue,wue,Tue,Eue,Wt,rt,cl,KT,Mue,cG,sg,Pue,Due,zue,rb,H8,$P,FP,BP,HP,Nue,fh,dh,sb,Wue,fG,jP,dG,hG,pG,W8,Z8,X8,q8,Y8,WP,ZP,XP,VP,lg,Nce,Oce,Q8,Fce,JT,Wce,Zce,qce,Kce,Qce,tfe,ife,sfe,YP,KP,mfe,_fe,bfe,xfe,Sfe,lG,ob,GP,Mfe,Afe,JP,QP,Cfe,gG,Ife,$l,hh,_i=V0(()=>{LP();LP();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */Wae=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zae=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xae=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qae=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yae=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kae=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jae=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Qae=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ese=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,tse=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nse=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ise=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rse=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ose=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ase=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sse=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,lse=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,use=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cse=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fse=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dse=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hse=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pse=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,mse=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,gse=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vse=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,yse=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_se=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bse=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xse=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sse="gl_FragColor = linearToOutputTexel( gl_FragColor );",wse=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tse=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ese=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mse=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ase=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cse=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rse=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kse=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ise=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pse=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dse=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zse=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nse=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ose=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Use=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Lse=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$se=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fse=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bse=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hse=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vse=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Gse=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jse=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Wse=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zse=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xse=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qse=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yse=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kse=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jse=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qse=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ele=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tle=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,nle=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ile=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rle=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ole=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ale=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sle=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lle=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ule=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cle=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fle=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dle=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hle=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ple=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,mle=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gle=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vle=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yle=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_le=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ble=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xle=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sle=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wle=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tle=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ele=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mle=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ale=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cle=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Rle=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kle=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ile=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ple=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dle=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zle=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nle=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ole=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ule=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lle=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$le=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fle=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ble=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Hle=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vle=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gle=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jle=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wle=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zle=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xle=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qle=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yle=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kle=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jle=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Qle=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eue=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tue=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,nue=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iue=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rue=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oue=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aue=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sue=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lue=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uue=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cue=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fue=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,due=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hue=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pue=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mue=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gue=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vue=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yue=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_ue=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bue=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xue=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sue=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wue=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tue=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eue=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wt={alphahash_fragment:Wae,alphahash_pars_fragment:Zae,alphamap_fragment:Xae,alphamap_pars_fragment:qae,alphatest_fragment:Yae,alphatest_pars_fragment:Kae,aomap_fragment:Jae,aomap_pars_fragment:Qae,batching_pars_vertex:ese,batching_vertex:tse,begin_vertex:nse,beginnormal_vertex:ise,bsdfs:rse,iridescence_fragment:ose,bumpmap_pars_fragment:ase,clipping_planes_fragment:sse,clipping_planes_pars_fragment:lse,clipping_planes_pars_vertex:use,clipping_planes_vertex:cse,color_fragment:fse,color_pars_fragment:dse,color_pars_vertex:hse,color_vertex:pse,common:mse,cube_uv_reflection_fragment:gse,defaultnormal_vertex:vse,displacementmap_pars_vertex:yse,displacementmap_vertex:_se,emissivemap_fragment:bse,emissivemap_pars_fragment:xse,colorspace_fragment:Sse,colorspace_pars_fragment:wse,envmap_fragment:Tse,envmap_common_pars_fragment:Ese,envmap_pars_fragment:Mse,envmap_pars_vertex:Ase,envmap_physical_pars_fragment:Lse,envmap_vertex:Cse,fog_vertex:Rse,fog_pars_vertex:kse,fog_fragment:Ise,fog_pars_fragment:Pse,gradientmap_pars_fragment:Dse,lightmap_pars_fragment:zse,lights_lambert_fragment:Nse,lights_lambert_pars_fragment:Ose,lights_pars_begin:Use,lights_toon_fragment:$se,lights_toon_pars_fragment:Fse,lights_phong_fragment:Bse,lights_phong_pars_fragment:Hse,lights_physical_fragment:Vse,lights_physical_pars_fragment:Gse,lights_fragment_begin:jse,lights_fragment_maps:Wse,lights_fragment_end:Zse,lightprobes_pars_fragment:Xse,logdepthbuf_fragment:qse,logdepthbuf_pars_fragment:Yse,logdepthbuf_pars_vertex:Kse,logdepthbuf_vertex:Jse,map_fragment:Qse,map_pars_fragment:ele,map_particle_fragment:tle,map_particle_pars_fragment:nle,metalnessmap_fragment:ile,metalnessmap_pars_fragment:rle,morphinstance_vertex:ole,morphcolor_vertex:ale,morphnormal_vertex:sle,morphtarget_pars_vertex:lle,morphtarget_vertex:ule,normal_fragment_begin:cle,normal_fragment_maps:fle,normal_pars_fragment:dle,normal_pars_vertex:hle,normal_vertex:ple,normalmap_pars_fragment:mle,clearcoat_normal_fragment_begin:gle,clearcoat_normal_fragment_maps:vle,clearcoat_pars_fragment:yle,iridescence_pars_fragment:_le,opaque_fragment:ble,packing:xle,premultiplied_alpha_fragment:Sle,project_vertex:wle,dithering_fragment:Tle,dithering_pars_fragment:Ele,roughnessmap_fragment:Mle,roughnessmap_pars_fragment:Ale,shadowmap_pars_fragment:Cle,shadowmap_pars_vertex:Rle,shadowmap_vertex:kle,shadowmask_pars_fragment:Ile,skinbase_vertex:Ple,skinning_pars_vertex:Dle,skinning_vertex:zle,skinnormal_vertex:Nle,specularmap_fragment:Ole,specularmap_pars_fragment:Ule,tonemapping_fragment:Lle,tonemapping_pars_fragment:$le,transmission_fragment:Fle,transmission_pars_fragment:Ble,uv_pars_fragment:Hle,uv_pars_vertex:Vle,uv_vertex:Gle,worldpos_vertex:jle,background_vert:Wle,background_frag:Zle,backgroundCube_vert:Xle,backgroundCube_frag:qle,cube_vert:Yle,cube_frag:Kle,depth_vert:Jle,depth_frag:Qle,distance_vert:eue,distance_frag:tue,equirect_vert:nue,equirect_frag:iue,linedashed_vert:rue,linedashed_frag:oue,meshbasic_vert:aue,meshbasic_frag:sue,meshlambert_vert:lue,meshlambert_frag:uue,meshmatcap_vert:cue,meshmatcap_frag:fue,meshnormal_vert:due,meshnormal_frag:hue,meshphong_vert:pue,meshphong_frag:mue,meshphysical_vert:gue,meshphysical_frag:vue,meshtoon_vert:yue,meshtoon_frag:_ue,points_vert:bue,points_frag:xue,shadow_vert:Sue,shadow_frag:wue,sprite_vert:Tue,sprite_frag:Eue},rt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new Ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},cl={basic:{uniforms:fo([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:fo([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Oe(0)},envMapIntensity:{value:1}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:fo([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:fo([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:fo([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:fo([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:fo([rt.points,rt.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:fo([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:fo([rt.common,rt.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:fo([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:fo([rt.sprite,rt.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distance:{uniforms:fo([rt.common,rt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distance_vert,fragmentShader:Wt.distance_frag},shadow:{uniforms:fo([rt.lights,rt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};cl.physical={uniforms:fo([cl.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new Ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new Ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new Ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};KT={r:0,b:0,g:0},Mue=new Ct,cG=new Ft;cG.set(-1,0,0,0,1,0,0,0,1);sg=4,Pue=6,Due=20,zue=256,rb=new ys,H8=new Oe,$P=null,FP=0,BP=0,HP=!1,Nue=new F,fh=new F,dh=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){let{size:a=256,position:s=Nue}=o;$P=this._renderer.getRenderTarget(),FP=this._renderer.getActiveCubeFace(),BP=this._renderer.getActiveMipmapLevel(),HP=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,s),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j8(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=G8(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($P,FP,BP),this._renderer.xr.enabled=HP,e.scissorTest=!1,ag(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ul||e.mapping===Iu?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$P=this._renderer.getRenderTarget(),FP=this._renderer.getActiveCubeFace(),BP=this._renderer.getActiveMipmapLevel(),HP=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wn,minFilter:wn,generateMipmaps:!1,type:bs,format:rr,colorSpace:Pr,depthBuffer:!1},r=V8(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V8(e,n,i);let{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Oue(o)),this._blurMaterial=Lue(o,e,n),this._ggxMaterial=Uue(o,e,n)}return r}_compileMaterial(e){let n=new Kn(new Rt,e);this._renderer.compile(n,rb)}_sceneToCubeUV(e,n,i,r,o){let l=new vi(90,1,n,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],c=this._renderer,p=c.autoClear,m=c.toneMapping;c.getClearColor(H8),c.toneMapping=ta,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Kn(new Xc,new Br({name:"PMREM.Background",side:co,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,b=_.material,y=!1,x=e.background;x?x.isColor&&(b.color.copy(x),e.background=null,y=!0):(b.color.copy(H8),y=!0);for(let T=0;T<6;T++){let w=T%3;w===0?(l.up.set(0,u[T],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+f[T],o.y,o.z)):w===1?(l.up.set(0,0,u[T]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+f[T],o.z)):(l.up.set(0,u[T],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+f[T]));let E=this._cubeSize;ag(r,w*E,T>2?E:0,E,E),c.setRenderTarget(r),y&&c.render(_,l),c.render(e,l)}c.toneMapping=m,c.autoClear=p,e.background=x}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===ul||e.mapping===Iu;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=j8()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=G8());let o=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=o;let s=o.uniforms;s.envMap.value=e;let l=this._cubeSize;ag(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,rb)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){let r=this._renderer,o=this._pingPongRenderTarget,a=this._ggxMaterial,s=this._lodMeshes[i];s.material=a;let l=a.uniforms,u=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),c=Math.sqrt(u*u-f*f),p=u*1.25,m=c*p,{_lodMax:g}=this,_=this._sizeLods[i],b=3*_*(i>g-sg?i-g+sg:0),y=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,ag(o,b,y,3*_,2*_),r.setRenderTarget(o),r.render(s,rb),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-i,ag(e,b,y,3*_,2*_),r.setRenderTarget(e),r.render(s,rb)}_blur(e,n,i,r){let o=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,o,n,i,a),this._blurPass(o,e,i,i,a)}_blurPass(e,n,i,r,o){let a=this._renderer,s=this._blurMaterial,l=this._lodMeshes[r];l.material=s;let u=s.uniforms;u.envMap.value=e.texture,u.sigma.value=o,u.mipInt.value=this._lodMax-i;let f=this._sizeLods[r],c=3*f*(r>this._lodMax-sg?r-this._lodMax+sg:0),p=4*(this._cubeSize-f);ag(n,c,p,3*f,2*f),a.setRenderTarget(n),a.render(l,rb)}};sb=class extends or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Zc(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xc(5,5,5),o=new sr({name:"CubemapFromEquirect",uniforms:ch(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:co,blending:ll});o.uniforms.tEquirect.value=n;let a=new Kn(r,o),s=n.minFilter;return n.minFilter===na&&(n.minFilter=wn),new f_(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){let o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}};Wue={[OT]:"LINEAR_TONE_MAPPING",[UT]:"REINHARD_TONE_MAPPING",[LT]:"CINEON_TONE_MAPPING",[tf]:"ACES_FILMIC_TONE_MAPPING",[Zm]:"AGX_TONE_MAPPING",[Xm]:"NEUTRAL_TONE_MAPPING",[$T]:"CUSTOM_TONE_MAPPING"};fG=new fi,jP=new Au(1,1),dG=new $d,hG=new Fd,pG=new Zc,W8=[],Z8=[],X8=new Float32Array(16),q8=new Float32Array(9),Y8=new Float32Array(4);WP=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=hce(n.type)}},ZP=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Dce(n.type)}},XP=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let o=0,a=r.length;o!==a;++o){let s=r[o];s.setValue(e,n[s.id],i)}}},VP=/(\w+)(\])?(\[|\.)?/g;lg=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let s=e.getActiveUniform(n,a),l=e.getUniformLocation(n,s.name);zce(s,l,this)}let r=[],o=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):o.push(a);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){let o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){let s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,o=e.length;r!==o;++r){let a=e[r];a.id in n&&i.push(a)}return i}};Nce=37297,Oce=0;Q8=new Ft;Fce={[OT]:"Linear",[UT]:"Reinhard",[LT]:"Cineon",[tf]:"ACESFilmic",[Zm]:"AgX",[Xm]:"Neutral",[$T]:"Custom"};JT=new F;Wce=/^[ \t]*#include +<([\w\d./]+)>/gm;Zce=new Map;qce=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Kce={[Qc]:"SHADOWMAP_TYPE_PCF",[ku]:"SHADOWMAP_TYPE_VSM"};Qce={[ul]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE",[oh]:"ENVMAP_TYPE_CUBE_UV"};tfe={[Iu]:"ENVMAP_MODE_REFRACTION"};ife={[Wm]:"ENVMAP_BLENDING_MULTIPLY",[cP]:"ENVMAP_BLENDING_MIX",[fP]:"ENVMAP_BLENDING_ADD"};sfe=0,YP=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new KP(e),n.set(e,i)),i}},KP=class{constructor(e){this.id=sfe++,this.code=e,this.usedTimes=0}};mfe=0;_fe=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bfe=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xfe=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],Sfe=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],lG=new Ct,ob=new F,GP=new F;Mfe=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Afe=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,JP=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Em(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new sr({vertexShader:Mfe,fragmentShader:Afe,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Kn(new Dr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},QP=class extends Jo{constructor(e,n){super();let i=this,r=null,o=1,a=null,s="local-floor",l=1,u=null,f=null,c=null,p=null,m=null,g=null,_=typeof XRWebGLBinding!="undefined",b=new JP,y={},x=n.getContextAttributes(),T=null,w=null,E=[],A=[],R=new Ce,M=null,I=null,P=new vi;P.viewport=new hn;let z=new vi;z.viewport=new hn;let $=[P,z],B=new d_,L=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(fe){let he=E[fe];return he===void 0&&(he=new Bd,E[fe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(fe){let he=E[fe];return he===void 0&&(he=new Bd,E[fe]=he),he.getGripSpace()},this.getHand=function(fe){let he=E[fe];return he===void 0&&(he=new Bd,E[fe]=he),he.getHandSpace()};function j(fe){let he=A.indexOf(fe.inputSource);if(he===-1)return;let Ue=E[he];Ue!==void 0&&(Ue.update(fe.inputSource,fe.frame,u||a),Ue.dispatchEvent({type:fe.type,data:fe.inputSource}))}function W(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let fe=0;fe<E.length;fe++){let he=A[fe];he!==null&&(A[fe]=null,E[fe].disconnect(he))}L=null,V=null,b.reset();for(let fe in y)delete y[fe];if(e.setRenderTarget(T),m=null,p=null,c=null,r=null,w=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(R.width,R.height,!1),I!==null){let fe=I.camera;fe.fov=I.fov,fe.zoom=I.zoom,fe.updateProjectionMatrix(),I=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(fe){o=fe,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(fe){s=fe,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(fe){u=fe},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(r,n)),c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(fe){if(r=fe,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Ye=null,je=null;x.depth&&(je=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ue=x.stencil?Du:nl,Ye=x.stencil?sh:$a);let ct={colorFormat:n.RGBA8,depthFormat:je,scaleFactor:o};c=this.getBinding(),p=c.createProjectionLayer(ct),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new or(p.textureWidth,p.textureHeight,{format:rr,type:ur,depthTexture:new Au(p.textureWidth,p.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let Ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,n,Ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new or(m.framebufferWidth,m.framebufferHeight,{format:rr,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),Xe.setContext(r),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function K(fe){for(let he=0;he<fe.removed.length;he++){let Ue=fe.removed[he],Ye=A.indexOf(Ue);Ye>=0&&(A[Ye]=null,E[Ye].disconnect(Ue))}for(let he=0;he<fe.added.length;he++){let Ue=fe.added[he],Ye=A.indexOf(Ue);if(Ye===-1){for(let ct=0;ct<E.length;ct++)if(ct>=A.length){A.push(Ue),Ye=ct;break}else if(A[ct]===null){A[ct]=Ue,Ye=ct;break}if(Ye===-1)break}let je=E[Ye];je&&je.connect(Ue)}}let Y=new F,ne=new F;function ae(fe,he,Ue){Y.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(Ue.matrixWorld);let Ye=Y.distanceTo(ne),je=he.projectionMatrix.elements,ct=Ue.projectionMatrix.elements,Vt=je[14]/(je[10]-1),ce=je[14]/(je[10]+1),ke=(je[9]+1)/je[5],Re=(je[9]-1)/je[5],De=(je[8]-1)/je[0],Ve=(ct[8]+1)/ct[0],bt=Vt*De,vt=Vt*Ve,Et=Ye/(-De+Ve),Mt=Et*-De;if(he.matrixWorld.decompose(fe.position,fe.quaternion,fe.scale),fe.translateX(Mt),fe.translateZ(Et),fe.matrixWorld.compose(fe.position,fe.quaternion,fe.scale),fe.matrixWorldInverse.copy(fe.matrixWorld).invert(),je[10]===-1)fe.projectionMatrix.copy(he.projectionMatrix),fe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let Z=Vt+Et,an=ce+Et,Gt=bt-Mt,G=vt+(Ye-Mt),D=ke*ce/an*Z,ie=Re*ce/an*Z;fe.projectionMatrix.makePerspective(Gt,G,D,ie,Z,an),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert()}}function we(fe,he){he===null?fe.matrixWorld.copy(fe.matrix):fe.matrixWorld.multiplyMatrices(he.matrixWorld,fe.matrix),fe.matrixWorldInverse.copy(fe.matrixWorld).invert()}this.updateCamera=function(fe){if(r===null)return;let he=fe.near,Ue=fe.far;b.texture!==null&&(b.depthNear>0&&(he=b.depthNear),b.depthFar>0&&(Ue=b.depthFar)),B.near=z.near=P.near=he,B.far=z.far=P.far=Ue,(L!==B.near||V!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,V=B.far),B.layers.mask=fe.layers.mask|6,P.layers.mask=B.layers.mask&-5,z.layers.mask=B.layers.mask&-3;let Ye=fe.parent,je=B.cameras;we(B,Ye);for(let ct=0;ct<je.length;ct++)we(je[ct],Ye);je.length===2?ae(B,P,z):B.projectionMatrix.copy(P.projectionMatrix),I===null&&fe.isPerspectiveCamera&&(I={camera:fe,fov:fe.fov,zoom:fe.zoom}),Te(fe,B,Ye)};function Te(fe,he,Ue){Ue===null?fe.matrix.copy(he.matrixWorld):(fe.matrix.copy(Ue.matrixWorld),fe.matrix.invert(),fe.matrix.multiply(he.matrixWorld)),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.updateMatrixWorld(!0),fe.projectionMatrix.copy(he.projectionMatrix),fe.projectionMatrixInverse.copy(he.projectionMatrixInverse),fe.isPerspectiveCamera&&(fe.fov=Ld*2*Math.atan(1/fe.projectionMatrix.elements[5]),fe.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(fe){l=fe,p!==null&&(p.fixedFoveation=fe),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=fe)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(B)},this.getCameraTexture=function(fe){return y[fe]};let ot=null;function Fe(fe,he){if(f=he.getViewerPose(u||a),g=he,f!==null){let Ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let Ye=!1;Ue.length!==B.cameras.length&&(B.cameras.length=0,Ye=!0);for(let ce=0;ce<Ue.length;ce++){let ke=Ue[ce],Re=null;if(m!==null)Re=m.getViewport(ke);else{let Ve=c.getViewSubImage(p,ke);Re=Ve.viewport,ce===0&&(e.setRenderTargetTextures(w,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(w))}let De=$[ce];De===void 0&&(De=new vi,De.layers.enable(ce),De.viewport=new hn,$[ce]=De),De.matrix.fromArray(ke.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(ke.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Re.x,Re.y,Re.width,Re.height),ce===0&&(B.matrix.copy(De.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ye===!0&&B.cameras.push(De)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){c=i.getBinding();let ce=c.getDepthInformation(Ue[0]);ce&&ce.isValid&&ce.texture&&b.init(ce,r.renderState)}if(je&&je.includes("camera-access")&&_){e.state.unbindTexture(),c=i.getBinding();for(let ce=0;ce<Ue.length;ce++){let ke=Ue[ce].camera;if(ke){let Re=y[ke];Re||(Re=new Em,y[ke]=Re);let De=c.getCameraImage(ke);Re.sourceTexture=De}}}}for(let Ue=0;Ue<E.length;Ue++){let Ye=A[Ue],je=E[Ue];Ye!==null&&je!==void 0&&je.update(Ye,he,u||a)}ot&&ot(fe,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}let Xe=new uG;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function(fe){ot=fe},this.dispose=function(){}}},Cfe=new Ct,gG=new Ft;gG.set(-1,0,0,0,1,0,0,0,1);Ife=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$l=null;hh=class{constructor(e={}){let{canvas:n=EP(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:p=!1,outputBufferType:m=ur}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let _=m,b=new Set([w_,S_,Km]),y=new Set([ur,$a,ah,sh,b_,x_]),x=new Uint32Array(4),T=new Int32Array(4),w=new F,E=null,A=null,R=[],M=[],I=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ta,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,z=!1,$=null,B=null,L=null,V=null;this._outputColorSpace=zn;let j=0,W=0,K=null,Y=-1,ne=null,ae=new hn,we=new hn,Te=null,ot=new Oe(0),Fe=0,Xe=n.width,fe=n.height,he=1,Ue=null,Ye=null,je=new hn(0,0,Xe,fe),ct=new hn(0,0,Xe,fe),Vt=!1,ce=new Il,ke=!1,Re=!1,De=new Ct,Ve=new F,bt=new hn,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function Mt(){return K===null?he:1}let Z=i;function an(N,q){return n.getContext(N,q)}let Gt,G,D,ie,se,pe,Le,Ge,ve,Ae,qe,xt,Ke,Je,pt,Tt,Nt,J,We,_e,Ze,tt,Ie;try{let N={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"186"}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",ye,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),Z===null){let q="webgl2";if(Z=an(q,N),Z===null)throw an(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}_t()}catch(N){throw n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),wt("WebGLRenderer: "+N.message),N}function _t(){Gt=new Fue(Z),Gt.init(),Ze=new mG(Z,Gt),G=new kue(Z,Gt,e,Ze),D=new Tfe(Z,Gt),G.reversedDepthBuffer&&p&&D.buffers.depth.setReversed(!0),B=Z.createFramebuffer(),L=Z.createFramebuffer(),V=Z.createFramebuffer(),ie=new Vue(Z),se=new cfe,pe=new Efe(Z,Gt,D,se,G,Ze,ie),Le=new $ue(P),Ge=new jae(Z),tt=new Cue(Z,Ge),ve=new Bue(Z,Ge,ie,tt),Ae=new jue(Z,ve,Ge,tt,ie),J=new Gue(Z,G,pe),pt=new Iue(se),qe=new ufe(P,Le,Gt,G,tt,pt),xt=new Rfe(P,se),Ke=new dfe,Je=new yfe(Gt),Nt=new Aue(P,Le,D,Ae,g,l),Tt=new wfe(P,Ae,G),Ie=new kfe(Z,ie,G,D),We=new Rue(Z,Gt,ie),_e=new Hue(Z,Gt,ie),ie.programs=qe.programs,P.capabilities=G,P.extensions=Gt,P.properties=se,P.renderLists=Ke,P.shadowMap=Tt,P.state=D,P.info=ie}_!==ur&&(I=new Zue(_,n.width,n.height,s,r,o));let dt=new QP(P,Z);this.xr=dt,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){let N=Gt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){let N=Gt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(N){N!==void 0&&(he=N,this.setSize(Xe,fe,!1))},this.getSize=function(N){return N.set(Xe,fe)},this.setSize=function(N,q,ue=!0){if(dt.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=N,fe=q,n.width=Math.floor(N*he),n.height=Math.floor(q*he),ue===!0&&(n.style.width=N+"px",n.style.height=q+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(Xe*he,fe*he).floor()},this.setDrawingBufferSize=function(N,q,ue){Xe=N,fe=q,he=ue,n.width=Math.floor(N*ue),n.height=Math.floor(q*ue),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(_===ur){wt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ae)},this.getViewport=function(N){return N.copy(je)},this.setViewport=function(N,q,ue,le){N.isVector4?je.set(N.x,N.y,N.z,N.w):je.set(N,q,ue,le),D.viewport(ae.copy(je).multiplyScalar(he).round())},this.getScissor=function(N){return N.copy(ct)},this.setScissor=function(N,q,ue,le){N.isVector4?ct.set(N.x,N.y,N.z,N.w):ct.set(N,q,ue,le),D.scissor(we.copy(ct).multiplyScalar(he).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(N){D.setScissorTest(Vt=N)},this.setOpaqueSort=function(N){Ue=N},this.setTransparentSort=function(N){Ye=N},this.getClearColor=function(N){return N.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,ue=!0){let le=0;if(N){let ee=!1;if(K!==null){let nt=K.texture.format;ee=b.has(nt)}if(ee){let nt=K.texture.type,lt=y.has(nt),it=Nt.getClearColor(),mt=Nt.getClearAlpha(),St=it.r,jt=it.g,rn=it.b;lt?(x[0]=St,x[1]=jt,x[2]=rn,x[3]=mt,Z.clearBufferuiv(Z.COLOR,0,x)):(T[0]=St,T[1]=jt,T[2]=rn,T[3]=mt,Z.clearBufferiv(Z.COLOR,0,T))}else le|=Z.COLOR_BUFFER_BIT}q&&(le|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),$=N},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",ye,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Nt.dispose(),Ke.dispose(),Je.dispose(),se.dispose(),Le.dispose(),Ae.dispose(),tt.dispose(),Ie.dispose(),qe.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",ti),dt.removeEventListener("sessionend",pr),eo.stop()};function oe(N){N.preventDefault(),bm("WebGLRenderer: Context Lost."),z=!0}function ye(){bm("WebGLRenderer: Context Restored."),z=!1;let N=ie.autoReset,q=Tt.enabled,ue=Tt.autoUpdate,le=Tt.needsUpdate,ee=Tt.type;_t(),ie.autoReset=N,Tt.enabled=q,Tt.autoUpdate=ue,Tt.needsUpdate=le,Tt.type=ee}function Ne(N){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function gt(N){let q=N.target;q.removeEventListener("dispose",gt),Kt(q)}function Kt(N){Gn(N),se.remove(N)}function Gn(N){let q=se.get(N).programs;q!==void 0&&(q.forEach(function(ue){qe.releaseProgram(ue)}),N.isShaderMaterial&&qe.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,ue,le,ee,nt){q===null&&(q=vt);let lt=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,it=yc(N,q,ue,le,ee);D.setMaterial(le,lt);let mt=ue.index,St=1;if(le.wireframe===!0){if(mt=ve.getWireframeAttribute(ue),mt===void 0)return;St=2}let jt=ue.drawRange,rn=ue.attributes.position,ht=jt.start*St,$t=(jt.start+jt.count)*St;nt!==null&&(ht=Math.max(ht,nt.start*St),$t=Math.min($t,(nt.start+nt.count)*St)),mt!==null?(ht=Math.max(ht,0),$t=Math.min($t,mt.count)):rn!=null&&(ht=Math.max(ht,0),$t=Math.min($t,rn.count));let Jt=$t-ht;if(Jt<0||Jt===1/0)return;tt.setup(ee,le,it,ue,mt);let Dn,Sn=We;if(mt!==null&&(Dn=Ge.get(mt),Sn=_e,Sn.setIndex(Dn)),ee.isMesh)le.wireframe===!0?(D.setLineWidth(le.wireframeLinewidth*Mt()),Sn.setMode(Z.LINES)):Sn.setMode(Z.TRIANGLES);else if(ee.isLine){let Gi=le.linewidth;Gi===void 0&&(Gi=1),D.setLineWidth(Gi*Mt()),ee.isLineSegments?Sn.setMode(Z.LINES):ee.isLineLoop?Sn.setMode(Z.LINE_LOOP):Sn.setMode(Z.LINE_STRIP)}else ee.isPoints?Sn.setMode(Z.POINTS):ee.isSprite&&Sn.setMode(Z.TRIANGLES);if(ee.isBatchedMesh)if(Gt.get("WEBGL_multi_draw"))Sn.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let Gi=ee._multiDrawStarts,st=ee._multiDrawCounts,ai=ee._multiDrawCount,sn=mt?Ge.get(mt).bytesPerElement:1,to=se.get(le).currentProgram.getUniforms();for(let Vo=0;Vo<ai;Vo++)to.setValue(Z,"_gl_DrawID",Vo),Sn.render(Gi[Vo]/sn,st[Vo])}else if(ee.isInstancedMesh)Sn.renderInstances(ht,Jt,ee.count);else if(ue.isInstancedBufferGeometry){let Gi=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,st=Math.min(ue.instanceCount,Gi);Sn.renderInstances(ht,Jt,st)}else Sn.render(ht,Jt)};function Hi(N,q,ue,le){$!==null&&N.isNodeMaterial&&$.setObject(le,N),ke===!0&&pt.setState(N,ue,!1),N.transparent===!0&&N.side===Hr&&N.forceSinglePass===!1?(N.side=co,N.needsUpdate=!0,wa(N,q,le),N.side=sl,N.needsUpdate=!0,wa(N,q,le),N.side=Hr):wa(N,q,le)}this.compile=function(N,q,ue=null){ue===null&&(ue=N),$!==null&&$.renderStart(N,q,ue),A=Je.get(ue),A.init(q),M.push(A),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),N!==ue&&N.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(A.pushLight(ee),ee.castShadow&&A.pushShadow(ee))}),A.setupLights(),$!==null&&$.updateLights(A.state.lightsArray),Re=this.localClippingEnabled,ke=pt.init(this.clippingPlanes,Re),ke===!0&&pt.setGlobalState(this.clippingPlanes,q),$!==null&&Tt.render(A.state.shadowsArray,ue,q);let le=new Set;return N.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let nt=ee.material;if(nt)if(Array.isArray(nt))for(let lt=0;lt<nt.length;lt++){let it=nt[lt];Hi(it,ue,q,ee),le.add(it)}else Hi(nt,ue,q,ee),le.add(nt)}),A=M.pop(),$!==null&&$.renderEnd(),le},this.compileAsync=function(N,q,ue=null){let le=this.compile(N,q,ue);return new Promise(ee=>{function nt(){if(le.forEach(function(lt){let mt=se.get(lt).currentProgram;(mt===void 0||mt.isReady())&&le.delete(lt)}),le.size===0){ee(N);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Vi=null;function Ht(N){Vi&&Vi(N)}function ti(){eo.stop()}function pr(){eo.start()}let eo=new uG;eo.setAnimationLoop(Ht),typeof self!="undefined"&&eo.setContext(self),this.setAnimationLoop=function(N){Vi=N,dt.setAnimationLoop(N),N===null?eo.stop():eo.start()},dt.addEventListener("sessionstart",ti),dt.addEventListener("sessionend",pr),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;$!==null&&$.renderStart(N,q);let ue=dt.enabled===!0&&dt.isPresenting===!0,le=I!==null&&(K===null||ue)&&I.begin(P,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(q),q=dt.getCamera()),N.isScene===!0&&N.onBeforeRender(P,N,q,K),A=Je.get(N,M.length),A.init(q),A.state.textureUnits=pe.getTextureUnits(),M.push(A),De.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ce.setFromProjectionMatrix(De,Ko,q.reversedDepth),Re=this.localClippingEnabled,ke=pt.init(this.clippingPlanes,Re),E=Ke.get(N,R.length),E.init(),R.push(E),dt.enabled===!0&&dt.isPresenting===!0){let lt=P.xr.getDepthSensingMesh();lt!==null&&Ho(lt,q,-1/0,P.sortObjects)}Ho(N,q,0,P.sortObjects),E.finish(),$!==null&&$.updateLights(A.state.lightsArray),P.sortObjects===!0&&E.sort(Ue,Ye),Et=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Et&&Nt.addToRenderList(E,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&pt.beginShadows();let ee=A.state.shadowsArray;if(Tt.render(ee,N,q),ke===!0&&pt.endShadows(),(le&&I.hasRenderPass())===!1){let lt=E.opaque,it=E.transmissive;if(A.setupLights(),q.isArrayCamera){let mt=q.cameras;if(it.length>0)for(let St=0,jt=mt.length;St<jt;St++){let rn=mt[St];Sl(lt,it,N,rn)}Et&&Nt.render(N);for(let St=0,jt=mt.length;St<jt;St++){let rn=mt[St];_o(E,N,rn,rn.viewport)}}else it.length>0&&Sl(lt,it,N,q),Et&&Nt.render(N),_o(E,N,q)}K!==null&&W===0&&(pe.updateMultisampleRenderTarget(K),pe.updateRenderTargetMipmap(K)),le&&I.end(P),N.isScene===!0&&N.onAfterRender(P,N,q),tt.resetDefaultState(),Y=-1,ne=null,M.pop(),M.length>0?(A=M[M.length-1],pe.setTextureUnits(A.state.textureUnits),ke===!0&&pt.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,$!==null&&$.renderEnd()};function Ho(N,q,ue,le){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLightProbeGrid)A.pushLightProbeGrid(N);else if(N.isLight)A.pushLight(N),N.castShadow&&A.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||N.intersectsFrustum(ce)){le&&bt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(De);let lt=Ae.update(N),it=N.material;it.visible&&E.push(N,lt,it,ue,bt.z,null,q)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||N.intersectsFrustum(ce))){let lt=Ae.update(N),it=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),bt.copy(N.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),bt.copy(lt.boundingSphere.center)),bt.applyMatrix4(N.matrixWorld).applyMatrix4(De)),Array.isArray(it)){let mt=lt.groups;for(let St=0,jt=mt.length;St<jt;St++){let rn=mt[St],ht=it[rn.materialIndex];ht&&ht.visible&&E.push(N,lt,ht,ue,bt.z,rn,q)}}else it.visible&&E.push(N,lt,it,ue,bt.z,null,q)}}let nt=N.children;for(let lt=0,it=nt.length;lt<it;lt++)Ho(nt[lt],q,ue,le)}function _o(N,q,ue,le){let{opaque:ee,transmissive:nt,transparent:lt}=N;A.setupLightsView(ue),ke===!0&&pt.setGlobalState(P.clippingPlanes,ue),le&&D.viewport(ae.copy(le)),ee.length>0&&Sa(ee,q,ue),nt.length>0&&Sa(nt,q,ue),lt.length>0&&Sa(lt,q,ue),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Sl(N,q,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[le.id]===void 0){let ht=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[le.id]=new or(1,1,{generateMipmaps:!0,type:ht?bs:ur,minFilter:na,samples:Math.max(4,G.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let nt=A.state.transmissionRenderTarget[le.id],lt=le.viewport||ae;nt.setSize(lt.z*P.transmissionResolutionScale,lt.w*P.transmissionResolutionScale);let it=P.getRenderTarget(),mt=P.getActiveCubeFace(),St=P.getActiveMipmapLevel();P.setRenderTarget(nt),P.getClearColor(ot),Fe=P.getClearAlpha(),Fe<1&&P.setClearColor(16777215,.5),P.clear(),Et&&Nt.render(ue);let jt=P.toneMapping;P.toneMapping=ta;let rn=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),A.setupLightsView(le),ke===!0&&pt.setGlobalState(P.clippingPlanes,le),Sa(N,ue,le),pe.updateMultisampleRenderTarget(nt),pe.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let $t=0,Jt=q.length;$t<Jt;$t++){let Dn=q[$t],{object:Sn,geometry:Gi,material:st,group:ai}=Dn;if(st.side===Hr&&Sn.layers.test(le.layers)){let sn=st.side;st.side=co,st.needsUpdate=!0,ss(Sn,ue,le,Gi,st,ai),st.side=sn,st.needsUpdate=!0,ht=!0}}ht===!0&&(pe.updateMultisampleRenderTarget(nt),pe.updateRenderTargetMipmap(nt))}P.setRenderTarget(it,mt,St),P.setClearColor(ot,Fe),rn!==void 0&&(le.viewport=rn),P.toneMapping=jt}function Sa(N,q,ue){let le=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,nt=N.length;ee<nt;ee++){let lt=N[ee],{object:it,geometry:mt,group:St}=lt,jt=lt.material;jt.allowOverride===!0&&le!==null&&(jt=le),it.layers.test(ue.layers)&&ss(it,q,ue,mt,jt,St)}}function ss(N,q,ue,le,ee,nt){$!==null&&ee.isNodeMaterial&&$.setObject(N,ee),N.onBeforeRender(P,q,ue,le,ee,nt),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ee.onBeforeRender(P,q,ue,le,N,nt),ee.transparent===!0&&ee.side===Hr&&ee.forceSinglePass===!1?(ee.side=co,ee.needsUpdate=!0,P.renderBufferDirect(ue,q,le,ee,N,nt),ee.side=sl,ee.needsUpdate=!0,P.renderBufferDirect(ue,q,le,ee,N,nt),ee.side=Hr):P.renderBufferDirect(ue,q,le,ee,N,nt),N.onAfterRender(P,q,ue,le,ee,nt)}function wa(N,q,ue){q.isScene!==!0&&(q=vt);let le=se.get(N),ee=A.state.lights,nt=A.state.shadowsArray,lt=ee.state.version,it=qe.getParameters(N,ee.state,nt,q,ue,A.state.lightProbeGridArray),mt=qe.getProgramCacheKey(it),St=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,le.fog=q.fog;let jt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=Le.get(N.envMap||le.environment,jt),le.envMapRotation=le.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,St===void 0&&(N.addEventListener("dispose",gt),St=new Map,le.programs=St);let rn=St.get(mt);if(rn!==void 0){if(le.currentProgram===rn&&le.lightsStateVersion===lt)return vc(N,it),rn}else it.uniforms=qe.getUniforms(N),$!==null&&N.isNodeMaterial&&$.build(N,ue,it),N.onBeforeCompile(it,P),rn=qe.acquireProgram(it,mt),St.set(mt,rn),le.uniforms=it.uniforms;let ht=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ht.clippingPlanes=pt.uniform),vc(N,it),le.needsLights=Mr(N),le.lightsStateVersion=lt,le.needsLights&&(ht.ambientLightColor.value=ee.state.ambient,ht.lightProbe.value=ee.state.probe,ht.sunLights.value=ee.state.sun,ht.sunLightShadows.value=ee.state.sunShadow,ht.directionalLights.value=ee.state.directional,ht.directionalLightShadows.value=ee.state.directionalShadow,ht.spotLights.value=ee.state.spot,ht.spotLightShadows.value=ee.state.spotShadow,ht.rectAreaLights.value=ee.state.rectArea,ht.ltc_1.value=ee.state.rectAreaLTC1,ht.ltc_2.value=ee.state.rectAreaLTC2,ht.pointLights.value=ee.state.point,ht.pointLightShadows.value=ee.state.pointShadow,ht.hemisphereLights.value=ee.state.hemi,ht.sunShadowMatrix.value=ee.state.sunShadowMatrix,ht.sunShadowCascade.value=ee.state.sunShadowCascade,ht.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,ht.spotLightMatrix.value=ee.state.spotLightMatrix,ht.spotLightMap.value=ee.state.spotLightMap,ht.pointShadowMatrix.value=ee.state.pointShadowMatrix),le.lightProbeGrid=A.state.lightProbeGridArray.length>0,le.currentProgram=rn,le.uniformsList=null,rn}function gc(N){if(N.uniformsList===null){let q=N.currentProgram.getUniforms();N.uniformsList=lg.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function vc(N,q){let ue=se.get(N);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function ud(N,q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;w.setFromMatrixPosition(q.matrixWorld);for(let ue=0,le=N.length;ue<le;ue++){let ee=N[ue];if(ee.texture!==null&&ee.boundingBox.containsPoint(w))return ee}return null}function yc(N,q,ue,le,ee){q.isScene!==!0&&(q=vt),pe.resetTextureUnits();let nt=q.fog,lt=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?q.environment:null,it=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yt.workingColorSpace,mt=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,St=Le.get(le.envMap||lt,mt),jt=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,rn=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),ht=!!ue.morphAttributes.position,$t=!!ue.morphAttributes.normal,Jt=!!ue.morphAttributes.color,Dn=ta;le.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Dn=P.toneMapping);let Sn=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Gi=Sn!==void 0?Sn.length:0,st=se.get(le),ai=A.state.lights;if(ke===!0&&(Re===!0||N!==ne)){let Ln=N===ne&&le.id===Y;pt.setState(le,N,Ln)}let sn=!1;le.version===st.__version?(st.needsLights&&st.lightsStateVersion!==ai.state.version||st.outputColorSpace!==it||ee.isBatchedMesh&&st.batching===!1||!ee.isBatchedMesh&&st.batching===!0||ee.isBatchedMesh&&st.batchingColor===!0&&ee._colorsTexture===null||ee.isBatchedMesh&&st.batchingColor===!1&&ee._colorsTexture!==null||ee.isInstancedMesh&&st.instancing===!1||!ee.isInstancedMesh&&st.instancing===!0||ee.isSkinnedMesh&&st.skinning===!1||!ee.isSkinnedMesh&&st.skinning===!0||ee.isInstancedMesh&&st.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&st.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&st.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&st.instancingMorph===!1&&ee.morphTexture!==null||st.envMap!==St||le.fog===!0&&st.fog!==nt||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==pt.numPlanes||st.numIntersection!==pt.numIntersection)||st.vertexAlphas!==jt||st.vertexTangents!==rn||st.morphTargets!==ht||st.morphNormals!==$t||st.morphColors!==Jt||st.toneMapping!==Dn||st.morphTargetsCount!==Gi||!!st.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(sn=!0):(sn=!0,st.__version=le.version);let to=st.currentProgram;sn===!0&&(to=wa(le,q,ee),$&&le.isNodeMaterial&&$.onUpdateProgram(le,to,st));let Vo=!1,Bs=!1,ou=!1,Cn=to.getUniforms(),gi=st.uniforms;if(D.useProgram(to.program)&&(Vo=!0,Bs=!0,ou=!0),le.id!==Y&&(Y=le.id,Bs=!0),st.needsLights){let Ln=ud(A.state.lightProbeGridArray,ee);st.lightProbeGrid!==Ln&&(st.lightProbeGrid=Ln,Bs=!0)}if(Vo||ne!==N){D.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Cn.setValue(Z,"projectionMatrix",N.projectionMatrix),Cn.setValue(Z,"viewMatrix",N.matrixWorldInverse);let ls=Cn.map.cameraPosition;ls!==void 0&&ls.setValue(Z,Ve.setFromMatrixPosition(N.matrixWorld)),G.logarithmicDepthBuffer&&Cn.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Cn.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),ne!==N&&(ne=N,Bs=!0,ou=!0)}if(st.needsLights&&(ai.state.sunShadowMap.length>0&&Cn.setValue(Z,"sunShadowMap",ai.state.sunShadowMap,pe),ai.state.directionalShadowMap.length>0&&Cn.setValue(Z,"directionalShadowMap",ai.state.directionalShadowMap,pe),ai.state.spotShadowMap.length>0&&Cn.setValue(Z,"spotShadowMap",ai.state.spotShadowMap,pe),ai.state.pointShadowMap.length>0&&Cn.setValue(Z,"pointShadowMap",ai.state.pointShadowMap,pe)),ee.isSkinnedMesh){Cn.setOptional(Z,ee,"bindMatrix"),Cn.setOptional(Z,ee,"bindMatrixInverse");let Ln=ee.skeleton;Ln&&(Ln.boneTexture===null&&Ln.computeBoneTexture(),Cn.setValue(Z,"boneTexture",Ln.boneTexture,pe))}ee.isBatchedMesh&&(Cn.setOptional(Z,ee,"batchingTexture"),Cn.setValue(Z,"batchingTexture",ee._matricesTexture,pe),Cn.setOptional(Z,ee,"batchingIdTexture"),Cn.setValue(Z,"batchingIdTexture",ee._indirectTexture,pe),Cn.setOptional(Z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Cn.setValue(Z,"batchingColorTexture",ee._colorsTexture,pe));let Hs=ue.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&J.update(ee,ue,to),(Bs||st.receiveShadow!==ee.receiveShadow)&&(st.receiveShadow=ee.receiveShadow,Cn.setValue(Z,"receiveShadow",ee.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&q.environment!==null&&(gi.envMapIntensity.value=q.environmentIntensity),gi.dfgLUT!==void 0&&(gi.dfgLUT.value=Pfe()),Bs){if(Cn.setValue(Z,"toneMappingExposure",P.toneMappingExposure),st.needsLights&&Ta(gi,ou),nt&&le.fog===!0&&xt.refreshFogUniforms(gi,nt),xt.refreshMaterialUniforms(gi,le,he,fe,A.state.transmissionRenderTarget[N.id]),st.needsLights&&st.lightProbeGrid){let Ln=st.lightProbeGrid;gi.probesSH.value=Ln.texture,gi.probesMin.value.copy(Ln.boundingBox.min),gi.probesMax.value.copy(Ln.boundingBox.max),gi.probesResolution.value.copy(Ln.resolution)}lg.upload(Z,gc(st),gi,pe)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(lg.upload(Z,gc(st),gi,pe),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Cn.setValue(Z,"center",ee.center),Cn.setValue(Z,"modelViewMatrix",ee.modelViewMatrix),Cn.setValue(Z,"normalMatrix",ee.normalMatrix),Cn.setValue(Z,"modelMatrix",ee.matrixWorld),le.uniformsGroups!==void 0){let Ln=le.uniformsGroups;for(let ls=0,au=Ln.length;ls<au;ls++){let jS=Ln[ls];Ie.update(jS,to),Ie.bind(jS,to)}}return to}function Ta(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.sunLights.needsUpdate=q,N.sunLightShadows.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function Mr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,q,ue){let le=se.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),se.get(N.texture).__webglTexture=q,se.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){let ue=se.get(N);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,ue=0){K=N,j=q,W=ue;let le=null,ee=!1,nt=!1;if(N){let it=se.get(N);if(it.__useDefaultFramebuffer!==void 0){D.bindFramebuffer(Z.FRAMEBUFFER,it.__webglFramebuffer),ae.copy(N.viewport),we.copy(N.scissor),Te=N.scissorTest,D.viewport(ae),D.scissor(we),D.setScissorTest(Te),Y=-1;return}else if(it.__webglFramebuffer===void 0)pe.setupRenderTarget(N);else if(it.__hasExternalTextures)pe.rebindTextures(N,se.get(N.texture).__webglTexture,se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){let jt=N.depthTexture;if(it.__boundDepthTexture!==jt){if(jt!==null&&se.has(jt)&&(N.width!==jt.image.width||N.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(N)}}let mt=N.texture;(mt.isData3DTexture||mt.isDataArrayTexture||mt.isCompressedArrayTexture)&&(nt=!0);let St=se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(St[q])?le=St[q][ue]:le=St[q],ee=!0):N.samples>0&&pe.useMultisampledRTT(N)===!1?le=se.get(N).__webglMultisampledFramebuffer:Array.isArray(St)?le=St[ue]:le=St,ae.copy(N.viewport),we.copy(N.scissor),Te=N.scissorTest}else ae.copy(je).multiplyScalar(he).floor(),we.copy(ct).multiplyScalar(he).floor(),Te=Vt;if(ue!==0&&(le=B),D.bindFramebuffer(Z.FRAMEBUFFER,le)&&D.drawBuffers(N,le),D.viewport(ae),D.scissor(we),D.setScissorTest(Te),ee){let it=se.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+q,it.__webglTexture,ue)}else if(nt){let it=q;for(let mt=0;mt<N.textures.length;mt++){let St=se.get(N.textures[mt]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+mt,St.__webglTexture,ue,it)}}else if(N!==null&&ue!==0){let it=se.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,it.__webglTexture,ue)}Y=-1};function Ea(N){let q=se.get(N);return(q.__readFormat!==N.format||q.__readType!==N.type)&&(q.__readFormat=N.format,q.__readType=N.type,q.__formatReadable=G.textureFormatReadable(N.format),q.__typeReadable=G.textureTypeReadable(N.type)),q}this.readRenderTargetPixels=function(N,q,ue,le,ee,nt,lt,it=0){if(!(N&&N.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt){D.bindFramebuffer(Z.FRAMEBUFFER,mt);try{let St=N.textures[it],jt=St.format,rn=St.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+it);let ht=Ea(St);if(ht.__formatReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ht.__typeReadable===!1){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-le&&ue>=0&&ue<=N.height-ee&&Z.readPixels(q,ue,le,ee,Ze.convert(jt),Ze.convert(rn),nt)}finally{let St=K!==null?se.get(K).__webglFramebuffer:null;D.bindFramebuffer(Z.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(N,q,ue,le,ee,nt,lt,it=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&lt!==void 0&&(mt=mt[lt]),mt)if(q>=0&&q<=N.width-le&&ue>=0&&ue<=N.height-ee){D.bindFramebuffer(Z.FRAMEBUFFER,mt);let St=N.textures[it],jt=St.format,rn=St.type;N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+it);let ht=Ea(St);if(ht.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ht.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $t=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,$t),Z.bufferData(Z.PIXEL_PACK_BUFFER,nt.byteLength,Z.STREAM_READ),Z.readPixels(q,ue,le,ee,Ze.convert(jt),Ze.convert(rn),0),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null);let Jt=K!==null?se.get(K).__webglFramebuffer:null;D.bindFramebuffer(Z.FRAMEBUFFER,Jt);let Dn=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await k8(Z,Dn,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,$t),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,nt),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,null),Z.deleteBuffer($t),Z.deleteSync(Dn),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,ue=0){let le=Math.pow(2,-ue),ee=Math.floor(N.image.width*le),nt=Math.floor(N.image.height*le),lt=q!==null?q.x:0,it=q!==null?q.y:0;pe.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,ue,0,0,lt,it,ee,nt),D.unbindTexture()},this.copyTextureToTexture=function(N,q,ue=null,le=null,ee=0,nt=0){let lt,it,mt,St,jt,rn,ht,$t,Jt,Dn=N.isCompressedTexture?N.mipmaps[nt]:N.image;if(ue!==null)lt=ue.max.x-ue.min.x,it=ue.max.y-ue.min.y,mt=ue.isBox3?ue.max.z-ue.min.z:1,St=ue.min.x,jt=ue.min.y,rn=ue.isBox3?ue.min.z:0;else{let gi=Math.pow(2,-ee);lt=Math.floor(Dn.width*gi),it=Math.floor(Dn.height*gi),N.isDataArrayTexture?mt=Dn.depth:N.isData3DTexture?mt=Math.floor(Dn.depth*gi):mt=1,St=0,jt=0,rn=0}le!==null?(ht=le.x,$t=le.y,Jt=le.z):(ht=0,$t=0,Jt=0);let Sn=Ze.convert(q.format),Gi=Ze.convert(q.type),st;q.isData3DTexture?(pe.setTexture3D(q,0),st=Z.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(pe.setTexture2DArray(q,0),st=Z.TEXTURE_2D_ARRAY):(pe.setTexture2D(q,0),st=Z.TEXTURE_2D),D.activeTexture(Z.TEXTURE0),D.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,q.flipY),D.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),D.pixelStorei(Z.UNPACK_ALIGNMENT,q.unpackAlignment);let ai=D.getParameter(Z.UNPACK_ROW_LENGTH),sn=D.getParameter(Z.UNPACK_IMAGE_HEIGHT),to=D.getParameter(Z.UNPACK_SKIP_PIXELS),Vo=D.getParameter(Z.UNPACK_SKIP_ROWS),Bs=D.getParameter(Z.UNPACK_SKIP_IMAGES);D.pixelStorei(Z.UNPACK_ROW_LENGTH,Dn.width),D.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Dn.height),D.pixelStorei(Z.UNPACK_SKIP_PIXELS,St),D.pixelStorei(Z.UNPACK_SKIP_ROWS,jt),D.pixelStorei(Z.UNPACK_SKIP_IMAGES,rn);let ou=N.isDataArrayTexture||N.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){let gi=se.get(N),Hs=se.get(q),Ln=se.get(gi.__renderTarget),ls=se.get(Hs.__renderTarget);D.bindFramebuffer(Z.READ_FRAMEBUFFER,Ln.__webglFramebuffer),D.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let au=0;au<mt;au++)ou&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(N).__webglTexture,ee,rn+au),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,se.get(q).__webglTexture,nt,Jt+au)),Z.blitFramebuffer(St,jt,lt,it,ht,$t,lt,it,Z.DEPTH_BUFFER_BIT,Z.NEAREST);D.bindFramebuffer(Z.READ_FRAMEBUFFER,null),D.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||N.isRenderTargetTexture||se.has(N)){let gi=se.get(N),Hs=se.get(q);D.bindFramebuffer(Z.READ_FRAMEBUFFER,L),D.bindFramebuffer(Z.DRAW_FRAMEBUFFER,V);for(let Ln=0;Ln<mt;Ln++)ou?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,gi.__webglTexture,ee,rn+Ln):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,gi.__webglTexture,ee),Cn?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Hs.__webglTexture,nt,Jt+Ln):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Hs.__webglTexture,nt),ee!==0?Z.blitFramebuffer(St,jt,lt,it,ht,$t,lt,it,Z.COLOR_BUFFER_BIT,Z.NEAREST):Cn?Z.copyTexSubImage3D(st,nt,ht,$t,Jt+Ln,St,jt,lt,it):Z.copyTexSubImage2D(st,nt,ht,$t,St,jt,lt,it);D.bindFramebuffer(Z.READ_FRAMEBUFFER,null),D.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Cn?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(st,nt,ht,$t,Jt,lt,it,mt,Sn,Gi,Dn.data):q.isCompressedArrayTexture?Z.compressedTexSubImage3D(st,nt,ht,$t,Jt,lt,it,mt,Sn,Dn.data):Z.texSubImage3D(st,nt,ht,$t,Jt,lt,it,mt,Sn,Gi,Dn):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,nt,ht,$t,lt,it,Sn,Gi,Dn.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,nt,ht,$t,Dn.width,Dn.height,Sn,Dn.data):Z.texSubImage2D(Z.TEXTURE_2D,nt,ht,$t,lt,it,Sn,Gi,Dn);D.pixelStorei(Z.UNPACK_ROW_LENGTH,ai),D.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,sn),D.pixelStorei(Z.UNPACK_SKIP_PIXELS,to),D.pixelStorei(Z.UNPACK_SKIP_ROWS,Vo),D.pixelStorei(Z.UNPACK_SKIP_IMAGES,Bs),nt===0&&q.generateMipmaps&&Z.generateMipmap(st),D.unbindTexture()},this.initRenderTarget=function(N){se.get(N).__webglFramebuffer===void 0&&pe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?pe.setTextureCube(N,0):N.isData3DTexture?pe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?pe.setTexture2DArray(N,0):pe.setTexture2D(N,0),D.unbindTexture()},this.resetState=function(){j=0,W=0,K=null,D.reset(),tt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ko}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Yt._getUnpackColorSpace()}}});
var yG=Xo(vG=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg=Wn();function Dfe(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zfe=typeof Object.is=="function"?Object.is:Dfe,Nfe=cg.useState,Ofe=cg.useEffect,Ufe=cg.useLayoutEffect,Lfe=cg.useDebugValue;function $fe(t,e){var n=e(),i=Nfe({inst:{value:n,getSnapshot:e}}),r=i[0].inst,o=i[1];return Ufe(function(){r.value=n,r.getSnapshot=e,eD(r)&&o({inst:r})},[t,n,e]),Ofe(function(){return eD(r)&&o({inst:r}),t(function(){eD(r)&&o({inst:r})})},[t]),Lfe(n),n}function eD(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zfe(t,n)}catch(i){return!0}}function Ffe(t,e){return e()}var Bfe=typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"?Ffe:$fe;vG.useSyncExternalStore=cg.useSyncExternalStore!==void 0?cg.useSyncExternalStore:Bfe});
var bG=Xo((dwe,_G)=>{"use strict";_G.exports=yG()});
var SG=Xo(xG=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE=Wn(),Hfe=bG();function Vfe(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gfe=typeof Object.is=="function"?Object.is:Vfe,jfe=Hfe.useSyncExternalStore,Wfe=tE.useRef,Zfe=tE.useEffect,Xfe=tE.useMemo,qfe=tE.useDebugValue;xG.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var o=Wfe(null);if(o.current===null){var a={hasValue:!1,value:null};o.current=a}else a=o.current;o=Xfe(function(){function l(m){if(!u){if(u=!0,f=m,m=i(m),r!==void 0&&a.hasValue){var g=a.value;if(r(g,m))return c=g}return c=m}if(g=c,Gfe(f,m))return g;var _=i(m);return r!==void 0&&r(g,_)?(f=m,g):(f=m,c=_)}var u=!1,f,c,p=n===void 0?null:n;return[function(){return l(e())},p===null?void 0:function(){return l(p())}]},[e,n,i,r]);var s=jfe(t,o[0],o[1]);return Zfe(function(){a.hasValue=!0,a.value=s},[s]),qfe(s),s}});
var TG=Xo((pwe,wG)=>{"use strict";wG.exports=SG()});
var jG=Xo(bi=>{"use strict";/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function rD(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<nE(r,e))t[i]=e,t[n]=r,n=i;else break e}}function Fl(t){return t.length===0?null:t[0]}function rE(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,o=r>>>1;i<o;){var a=2*(i+1)-1,s=t[a],l=a+1,u=t[l];if(0>nE(s,n))l<r&&0>nE(u,s)?(t[i]=u,t[l]=n,i=l):(t[i]=s,t[a]=n,i=a);else if(l<r&&0>nE(u,n))t[i]=u,t[l]=n,i=l;else break e}}return e}function nE(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}bi.unstable_now=void 0;typeof performance=="object"&&typeof performance.now=="function"?(OG=performance,bi.unstable_now=function(){return OG.now()}):(tD=Date,UG=tD.now(),bi.unstable_now=function(){return tD.now()-UG});var OG,tD,UG,Nu=[],of=[],ede=1,Ss=null,ho=3,oD=!1,lb=!1,ub=!1,aD=!1,FG=typeof setTimeout=="function"?setTimeout:null,BG=typeof clearTimeout=="function"?clearTimeout:null,LG=typeof setImmediate!="undefined"?setImmediate:null;function iE(t){for(var e=Fl(of);e!==null;){if(e.callback===null)rE(of);else if(e.startTime<=t)rE(of),e.sortIndex=e.expirationTime,rD(Nu,e);else break;e=Fl(of)}}function sD(t){if(ub=!1,iE(t),!lb)if(Fl(Nu)!==null)lb=!0,dg||(dg=!0,fg());else{var e=Fl(of);e!==null&&lD(sD,e.startTime-t)}}var dg=!1,cb=-1,HG=5,VG=-1;function GG(){return aD?!0:!(bi.unstable_now()-VG<HG)}function nD(){if(aD=!1,dg){var t=bi.unstable_now();VG=t;var e=!0;try{e:{lb=!1,ub&&(ub=!1,BG(cb),cb=-1),oD=!0;var n=ho;try{t:{for(iE(t),Ss=Fl(Nu);Ss!==null&&!(Ss.expirationTime>t&&GG());){var i=Ss.callback;if(typeof i=="function"){Ss.callback=null,ho=Ss.priorityLevel;var r=i(Ss.expirationTime<=t);if(t=bi.unstable_now(),typeof r=="function"){Ss.callback=r,iE(t),e=!0;break t}Ss===Fl(Nu)&&rE(Nu),iE(t)}else rE(Nu);Ss=Fl(Nu)}if(Ss!==null)e=!0;else{var o=Fl(of);o!==null&&lD(sD,o.startTime-t),e=!1}}break e}finally{Ss=null,ho=n,oD=!1}e=void 0}}finally{e?fg():dg=!1}}}var fg;typeof LG=="function"?fg=function(){LG(nD)}:typeof MessageChannel!="undefined"?(iD=new MessageChannel,$G=iD.port2,iD.port1.onmessage=nD,fg=function(){$G.postMessage(null)}):fg=function(){FG(nD,0)};var iD,$G;function lD(t,e){cb=FG(function(){t(bi.unstable_now())},e)}bi.unstable_IdlePriority=5;bi.unstable_ImmediatePriority=1;bi.unstable_LowPriority=4;bi.unstable_NormalPriority=3;bi.unstable_Profiling=null;bi.unstable_UserBlockingPriority=2;bi.unstable_cancelCallback=function(t){t.callback=null};bi.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):HG=0<t?Math.floor(1e3/t):5};bi.unstable_getCurrentPriorityLevel=function(){return ho};bi.unstable_next=function(t){switch(ho){case 1:case 2:case 3:var e=3;break;default:e=ho}var n=ho;ho=e;try{return t()}finally{ho=n}};bi.unstable_requestPaint=function(){aD=!0};bi.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=ho;ho=t;try{return e()}finally{ho=n}};bi.unstable_scheduleCallback=function(t,e,n){var i=bi.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:ede++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,rD(of,t),Fl(Nu)===null&&t===Fl(of)&&(ub?(BG(cb),cb=-1):ub=!0,lD(sD,n-i))):(t.sortIndex=r,rD(Nu,t),lb||oD||(lb=!0,dg||(dg=!0,fg()))),t};bi.unstable_shouldYield=GG;bi.unstable_wrapCallback=function(t){var e=ho;return function(){var n=ho;ho=e;try{return t.apply(this,arguments)}finally{ho=n}}}});
var oE=Xo((bwe,WG)=>{"use strict";WG.exports=jG()});
var XG=Xo(aE=>{"use strict";/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tde=Symbol.for("react.transitional.element"),nde=Symbol.for("react.fragment");function ZG(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var r in e)r!=="key"&&(n[r]=e[r])}else n=e;return e=n.ref,{$$typeof:tde,type:t,key:i,ref:e!==void 0?e:null,props:n}}aE.Fragment=nde;aE.jsx=ZG;aE.jsxs=ZG});
var ii=Xo((Swe,qG)=>{"use strict";qG.exports=XG()});
var NZ=Xo(Oo=>{"use strict";/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pve=Wn();function zZ(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function yf(){}var No={d:{f:yf,r:function(){throw Error(zZ(522))},D:yf,C:yf,L:yf,m:yf,X:yf,S:yf,M:yf},p:0,findDOMNode:null},Dve=Symbol.for("react.portal");function zve(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dve,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var fx=Pve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function MA(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Oo.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=No;Oo.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(zZ(299));return zve(t,e,null,n)};Oo.flushSync=function(t){var e=fx.T,n=No.p;try{if(fx.T=null,No.p=2,t)return t()}finally{fx.T=e,No.p=n,No.d.f()}};Oo.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,No.d.C(t,e))};Oo.prefetchDNS=function(t){typeof t=="string"&&No.d.D(t)};Oo.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=MA(n,e.crossOrigin),r=typeof e.integrity=="string"?e.integrity:void 0,o=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?No.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:o}):n==="script"&&No.d.X(t,{crossOrigin:i,integrity:r,fetchPriority:o,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Oo.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=MA(e.as,e.crossOrigin);No.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&No.d.M(t)};Oo.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=MA(n,e.crossOrigin);No.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Oo.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=MA(e.as,e.crossOrigin);No.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else No.d.m(t)};Oo.requestFormReset=function(t){No.d.r(t)};Oo.unstable_batchedUpdates=function(t,e){return t(e)};Oo.useFormState=function(t,e,n){return fx.H.useFormState(t,e,n)};Oo.useFormStatus=function(){return fx.H.useHostTransitionStatus()};Oo.version="19.2.8"});
var LZ=Xo((e2e,UZ)=>{"use strict";function OZ(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(OZ)}catch(t){console.error(t)}}OZ(),UZ.exports=NZ()});
var YK=Xo(K2=>{"use strict";/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tr=oE(),cq=Wn(),Nve=LZ();function Pe(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function fq(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Kx(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dq(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hq(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $Z(t){if(Kx(t)!==t)throw Error(Pe(188))}function Ove(t){var e=t.alternate;if(!e){if(e=Kx(t),e===null)throw Error(Pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return $Z(r),t;if(o===i)return $Z(r),e;o=o.sibling}throw Error(Pe(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(Pe(189))}}if(n.alternate!==i)throw Error(Pe(190))}if(n.tag!==3)throw Error(Pe(188));return n.stateNode.current===n?t:e}function pq(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=pq(t),e!==null)return e;t=t.sibling}return null}var mi=Object.assign,Uve=Symbol.for("react.element"),AA=Symbol.for("react.transitional.element"),_x=Symbol.for("react.portal"),fv=Symbol.for("react.fragment"),mq=Symbol.for("react.strict_mode"),FL=Symbol.for("react.profiler"),gq=Symbol.for("react.consumer"),qu=Symbol.for("react.context"),N4=Symbol.for("react.forward_ref"),BL=Symbol.for("react.suspense"),HL=Symbol.for("react.suspense_list"),O4=Symbol.for("react.memo"),_f=Symbol.for("react.lazy");Symbol.for("react.scope");var VL=Symbol.for("react.activity");Symbol.for("react.legacy_hidden");Symbol.for("react.tracing_marker");var Lve=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var FZ=Symbol.iterator;function dx(t){return t===null||typeof t!="object"?null:(t=FZ&&t[FZ]||t["@@iterator"],typeof t=="function"?t:null)}var $ve=Symbol.for("react.client.reference");function GL(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===$ve?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fv:return"Fragment";case FL:return"Profiler";case mq:return"StrictMode";case BL:return"Suspense";case HL:return"SuspenseList";case VL:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case _x:return"Portal";case qu:return t.displayName||"Context";case gq:return(t._context.displayName||"Context")+".Consumer";case N4:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O4:return e=t.displayName||null,e!==null?e:GL(t.type)||"Memo";case _f:e=t._payload,t=t._init;try{return GL(t(e))}catch(n){}}return null}var bx=Array.isArray,Ut=cq.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,In=Nve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Bh={pending:!1,data:null,method:null,action:null},jL=[],dv=-1;function Kl(t){return{current:t}}function Ur(t){0>dv||(t.current=jL[dv],jL[dv]=null,dv--)}function oi(t,e){dv++,jL[dv]=t.current,t.current=e}var Yl=Kl(null),Ux=Kl(null),kf=Kl(null),a2=Kl(null);function s2(t,e){switch(oi(kf,e),oi(Ux,t),oi(Yl,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ZX(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ZX(e),t=OK(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ur(Yl),oi(Yl,t)}function kv(){Ur(Yl),Ur(Ux),Ur(kf)}function WL(t){t.memoizedState!==null&&oi(a2,t);var e=Yl.current,n=OK(e,t.type);e!==n&&(oi(Ux,t),oi(Yl,n))}function l2(t){Ux.current===t&&(Ur(Yl),Ur(Ux)),a2.current===t&&(Ur(a2),Xx._currentValue=Bh)}var sL,BZ;function Uh(t){if(sL===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sL=e&&e[1]||"",BZ=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+sL+t+BZ}var lL=!1;function uL(t,e){if(!t||lL)return"";lL=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var c=function(){throw Error()};if(Object.defineProperty(c.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(c,[])}catch(m){var p=m}Reflect.construct(t,[],c)}else{try{c.call()}catch(m){p=m}t.call(c.prototype)}}else{try{throw Error()}catch(m){p=m}(c=t())&&typeof c.catch=="function"&&c.catch(function(){})}}catch(m){if(m&&p&&typeof m.stack=="string")return[m.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var o=i.DetermineComponentFrameRoot(),a=o[0],s=o[1];if(a&&s){var l=a.split(`
`),u=s.split(`
`);for(r=i=0;i<l.length&&!l[i].includes("DetermineComponentFrameRoot");)i++;for(;r<u.length&&!u[r].includes("DetermineComponentFrameRoot");)r++;if(i===l.length||r===u.length)for(i=l.length-1,r=u.length-1;1<=i&&0<=r&&l[i]!==u[r];)r--;for(;1<=i&&0<=r;i--,r--)if(l[i]!==u[r]){if(i!==1||r!==1)do if(i--,r--,0>r||l[i]!==u[r]){var f=`
`+l[i].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=i&&0<=r);break}}}finally{lL=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Uh(n):""}function Fve(t,e){switch(t.tag){case 26:case 27:case 5:return Uh(t.type);case 16:return Uh("Lazy");case 13:return t.child!==e&&e!==null?Uh("Suspense Fallback"):Uh("Suspense");case 19:return Uh("SuspenseList");case 0:case 15:return uL(t.type,!1);case 11:return uL(t.type.render,!1);case 1:return uL(t.type,!0);case 31:return Uh("Activity");default:return""}}function HZ(t){try{var e="",n=null;do e+=Fve(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var ZL=Object.prototype.hasOwnProperty,U4=Tr.unstable_scheduleCallback,cL=Tr.unstable_cancelCallback,Bve=Tr.unstable_shouldYield,Hve=Tr.unstable_requestPaint,Xa=Tr.unstable_now,Vve=Tr.unstable_getCurrentPriorityLevel,vq=Tr.unstable_ImmediatePriority,yq=Tr.unstable_UserBlockingPriority,u2=Tr.unstable_NormalPriority,Gve=Tr.unstable_LowPriority,_q=Tr.unstable_IdlePriority,jve=Tr.log,Wve=Tr.unstable_setDisableYieldValue,Jx=null,qa=null;function Ef(t){if(typeof jve=="function"&&Wve(t),qa&&typeof qa.setStrictMode=="function")try{qa.setStrictMode(Jx,t)}catch(e){}}var Ya=Math.clz32?Math.clz32:qve,Zve=Math.log,Xve=Math.LN2;function qve(t){return t>>>=0,t===0?32:31-(Zve(t)/Xve|0)|0}var CA=256,RA=262144,kA=4194304;function Lh(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function N2(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,o=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var s=i&134217727;return s!==0?(i=s&~o,i!==0?r=Lh(i):(a&=s,a!==0?r=Lh(a):n||(n=s&~t,n!==0&&(r=Lh(n))))):(s=i&~o,s!==0?r=Lh(s):a!==0?r=Lh(a):n||(n=i&~t,n!==0&&(r=Lh(n)))),r===0?0:e!==0&&e!==r&&(e&o)===0&&(o=r&-r,n=e&-e,o>=n||o===32&&(n&4194048)!==0)?e:r}function Qx(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Yve(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bq(){var t=kA;return kA<<=1,(kA&62914560)===0&&(kA=4194304),t}function fL(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function eS(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Kve(t,e,n,i,r,o){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var s=t.entanglements,l=t.expirationTimes,u=t.hiddenUpdates;for(n=a&~n;0<n;){var f=31-Ya(n),c=1<<f;s[f]=0,l[f]=-1;var p=u[f];if(p!==null)for(u[f]=null,f=0;f<p.length;f++){var m=p[f];m!==null&&(m.lane&=-536870913)}n&=~c}i!==0&&xq(t,i,0),o!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=o&~(a&~e))}function xq(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-Ya(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function Sq(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ya(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}function wq(t,e){var n=e&-e;return n=(n&42)!==0?1:L4(n),(n&(t.suspendedLanes|e))!==0?0:n}function L4(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $4(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Tq(){var t=In.p;return t!==0?t:(t=window.event,t===void 0?32:ZK(t.type))}function VZ(t,e){var n=In.p;try{return In.p=t,e()}finally{In.p=n}}var Vf=Math.random().toString(36).slice(2),Zr="__reactFiber$"+Vf,pa="__reactProps$"+Vf,Bv="__reactContainer$"+Vf,XL="__reactEvents$"+Vf,Jve="__reactListeners$"+Vf,Qve="__reactHandles$"+Vf,GZ="__reactResources$"+Vf,tS="__reactMarker$"+Vf;function F4(t){delete t[Zr],delete t[pa],delete t[XL],delete t[Jve],delete t[Qve]}function hv(t){var e=t[Zr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bv]||n[Zr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=JX(t);t!==null;){if(n=t[Zr])return n;t=JX(t)}return e}t=n,n=t.parentNode}return null}function Hv(t){if(t=t[Zr]||t[Bv]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function xx(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(Pe(33))}function wv(t){var e=t[GZ];return e||(e=t[GZ]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Or(t){t[tS]=!0}var Eq=new Set,Mq={};function Kh(t,e){Iv(t,e),Iv(t+"Capture",e)}function Iv(t,e){for(Mq[t]=e,t=0;t<e.length;t++)Eq.add(e[t])}var e0e=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jZ={},WZ={};function t0e(t){return ZL.call(WZ,t)?!0:ZL.call(jZ,t)?!1:e0e.test(t)?WZ[t]=!0:(jZ[t]=!0,!1)}function jA(t,e,n){if(t0e(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function IA(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Hu(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function Ms(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Aq(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n0e(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i!="undefined"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,o=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qL(t){if(!t._valueTracker){var e=Aq(t)?"checked":"value";t._valueTracker=n0e(t,e,""+t[e])}}function Cq(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Aq(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function c2(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch(e){return t.body}}var i0e=/[\n"\\]/g;function Rs(t){return t.replace(i0e,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function YL(t,e,n,i,r,o,a,s){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+Ms(e)):t.value!==""+Ms(e)&&(t.value=""+Ms(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?KL(t,a,Ms(e)):n!=null?KL(t,a,Ms(n)):i!=null&&t.removeAttribute("value"),r==null&&o!=null&&(t.defaultChecked=!!o),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+Ms(s):t.removeAttribute("name")}function Rq(t,e,n,i,r,o,a,s){if(o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(t.type=o),e!=null||n!=null){if(!(o!=="submit"&&o!=="reset"||e!=null)){qL(t);return}n=n!=null?""+Ms(n):"",e=e!=null?""+Ms(e):n,s||e===t.value||(t.value=e),t.defaultValue=e}i=i!=null?i:r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=s?t.checked:!!i,t.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),qL(t)}function KL(t,e,n){e==="number"&&c2(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Tv(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ms(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function kq(t,e,n){if(e!=null&&(e=""+Ms(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+Ms(n):""}function Iq(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(Pe(92));if(bx(i)){if(1<i.length)throw Error(Pe(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=Ms(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),qL(t)}function Pv(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var r0e=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ZZ(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||r0e.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Pq(t,e,n){if(e!=null&&typeof e!="object")throw Error(Pe(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var r in e)i=e[r],e.hasOwnProperty(r)&&n[r]!==i&&ZZ(t,r,i)}else for(var o in e)e.hasOwnProperty(o)&&ZZ(t,o,e[o])}function B4(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0e=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),a0e=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function WA(t){return a0e.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Yu(){}var JL=null;function H4(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pv=null,Ev=null;function XZ(t){var e=Hv(t);if(e&&(t=e.stateNode)){var n=t[pa]||null;e:switch(t=e.stateNode,e.type){case"input":if(YL(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Rs(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=i[pa]||null;if(!r)throw Error(Pe(90));YL(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&Cq(i)}break e;case"textarea":kq(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Tv(t,!!n.multiple,e,!1)}}}var dL=!1;function Dq(t,e,n){if(dL)return t(e,n);dL=!0;try{var i=t(e);return i}finally{if(dL=!1,(pv!==null||Ev!==null)&&(Z2(),pv&&(e=pv,t=Ev,Ev=pv=null,XZ(e),t)))for(e=0;e<t.length;e++)XZ(t[e])}}function Lx(t,e){var n=t.stateNode;if(n===null)return null;var i=n[pa]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Pe(231,e,typeof n));return n}var tc=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),QL=!1;if(tc)try{av={},Object.defineProperty(av,"passive",{get:function(){QL=!0}}),window.addEventListener("test",av,av),window.removeEventListener("test",av,av)}catch(t){QL=!1}var av,Mf=null,V4=null,ZA=null;function zq(){if(ZA)return ZA;var t,e=V4,n=e.length,i,r="value"in Mf?Mf.value:Mf.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return ZA=r.slice(t,1<i?1-i:void 0)}function XA(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function PA(){return!0}function qZ(){return!1}function ma(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?PA:qZ,this.isPropagationStopped=qZ,this}return mi(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=PA)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=PA)},persist:function(){},isPersistent:PA}),e}var Jh={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},O2=ma(Jh),nS=mi({},Jh,{view:0,detail:0}),s0e=ma(nS),hL,pL,hx,U2=mi({},nS,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:G4,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==hx&&(hx&&t.type==="mousemove"?(hL=t.screenX-hx.screenX,pL=t.screenY-hx.screenY):pL=hL=0,hx=t),hL)},movementY:function(t){return"movementY"in t?t.movementY:pL}}),YZ=ma(U2),l0e=mi({},U2,{dataTransfer:0}),u0e=ma(l0e),c0e=mi({},nS,{relatedTarget:0}),mL=ma(c0e),f0e=mi({},Jh,{animationName:0,elapsedTime:0,pseudoElement:0}),d0e=ma(f0e),h0e=mi({},Jh,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),p0e=ma(h0e),m0e=mi({},Jh,{data:0}),KZ=ma(m0e),g0e={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v0e={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},y0e={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _0e(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=y0e[t])?!!e[t]:!1}function G4(){return _0e}var b0e=mi({},nS,{key:function(t){if(t.key){var e=g0e[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=XA(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?v0e[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:G4,charCode:function(t){return t.type==="keypress"?XA(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?XA(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),x0e=ma(b0e),S0e=mi({},U2,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),JZ=ma(S0e),w0e=mi({},nS,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:G4}),T0e=ma(w0e),E0e=mi({},Jh,{propertyName:0,elapsedTime:0,pseudoElement:0}),M0e=ma(E0e),A0e=mi({},U2,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),C0e=ma(A0e),R0e=mi({},Jh,{newState:0,oldState:0}),k0e=ma(R0e),I0e=[9,13,27,32],j4=tc&&"CompositionEvent"in window,Tx=null;tc&&"documentMode"in document&&(Tx=document.documentMode);var P0e=tc&&"TextEvent"in window&&!Tx,Nq=tc&&(!j4||Tx&&8<Tx&&11>=Tx),QZ=" ",eX=!1;function Oq(t,e){switch(t){case"keyup":return I0e.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uq(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mv=!1;function D0e(t,e){switch(t){case"compositionend":return Uq(e);case"keypress":return e.which!==32?null:(eX=!0,QZ);case"textInput":return t=e.data,t===QZ&&eX?null:t;default:return null}}function z0e(t,e){if(mv)return t==="compositionend"||!j4&&Oq(t,e)?(t=zq(),ZA=V4=Mf=null,mv=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nq&&e.locale!=="ko"?null:e.data;default:return null}}var N0e={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tX(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!N0e[t.type]:e==="textarea"}function Lq(t,e,n,i){pv?Ev?Ev.push(i):Ev=[i]:pv=i,e=C2(e,"onChange"),0<e.length&&(n=new O2("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ex=null,$x=null;function O0e(t){DK(t,0)}function L2(t){var e=xx(t);if(Cq(e))return t}function nX(t,e){if(t==="change")return e}var $q=!1;tc&&(tc?(zA="oninput"in document,zA||(gL=document.createElement("div"),gL.setAttribute("oninput","return;"),zA=typeof gL.oninput=="function"),DA=zA):DA=!1,$q=DA&&(!document.documentMode||9<document.documentMode));var DA,zA,gL;function iX(){Ex&&(Ex.detachEvent("onpropertychange",Fq),$x=Ex=null)}function Fq(t){if(t.propertyName==="value"&&L2($x)){var e=[];Lq(e,$x,t,H4(t)),Dq(O0e,e)}}function U0e(t,e,n){t==="focusin"?(iX(),Ex=e,$x=n,Ex.attachEvent("onpropertychange",Fq)):t==="focusout"&&iX()}function L0e(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return L2($x)}function $0e(t,e){if(t==="click")return L2(e)}function F0e(t,e){if(t==="input"||t==="change")return L2(e)}function B0e(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ja=typeof Object.is=="function"?Object.is:B0e;function Fx(t,e){if(Ja(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ZL.call(e,r)||!Ja(t[r],e[r]))return!1}return!0}function rX(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function oX(t,e){var n=rX(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rX(n)}}function Bq(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bq(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hq(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=c2(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch(i){n=!1}if(n)t=e.contentWindow;else break;e=c2(t.document)}return e}function W4(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var H0e=tc&&"documentMode"in document&&11>=document.documentMode,gv=null,e4=null,Mx=null,t4=!1;function aX(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;t4||gv==null||gv!==c2(i)||(i=gv,"selectionStart"in i&&W4(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mx&&Fx(Mx,i)||(Mx=i,i=C2(e4,"onSelect"),0<i.length&&(e=new O2("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=gv)))}function Oh(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vv={animationend:Oh("Animation","AnimationEnd"),animationiteration:Oh("Animation","AnimationIteration"),animationstart:Oh("Animation","AnimationStart"),transitionrun:Oh("Transition","TransitionRun"),transitionstart:Oh("Transition","TransitionStart"),transitioncancel:Oh("Transition","TransitionCancel"),transitionend:Oh("Transition","TransitionEnd")},vL={},Vq={};tc&&(Vq=document.createElement("div").style,"AnimationEvent"in window||(delete vv.animationend.animation,delete vv.animationiteration.animation,delete vv.animationstart.animation),"TransitionEvent"in window||delete vv.transitionend.transition);function Qh(t){if(vL[t])return vL[t];if(!vv[t])return t;var e=vv[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vq)return vL[t]=e[n];return t}var Gq=Qh("animationend"),jq=Qh("animationiteration"),Wq=Qh("animationstart"),V0e=Qh("transitionrun"),G0e=Qh("transitionstart"),j0e=Qh("transitioncancel"),Zq=Qh("transitionend"),Xq=new Map,n4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");n4.push("scrollEnd");function vl(t,e){Xq.set(t,e),Kh(e,[t])}var f2=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Es=[],yv=0,Z4=0;function $2(){for(var t=yv,e=Z4=yv=0;e<t;){var n=Es[e];Es[e++]=null;var i=Es[e];Es[e++]=null;var r=Es[e];Es[e++]=null;var o=Es[e];if(Es[e++]=null,i!==null&&r!==null){var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}o!==0&&qq(n,r,o)}}function F2(t,e,n,i){Es[yv++]=t,Es[yv++]=e,Es[yv++]=n,Es[yv++]=i,Z4|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function X4(t,e,n,i){return F2(t,e,n,i),d2(t)}function ep(t,e){return F2(t,null,null,e),d2(t)}function qq(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var r=!1,o=t.return;o!==null;)o.childLanes|=n,i=o.alternate,i!==null&&(i.childLanes|=n),o.tag===22&&(t=o.stateNode,t===null||t._visibility&1||(r=!0)),t=o,o=o.return;return t.tag===3?(o=t.stateNode,r&&e!==null&&(r=31-Ya(n),t=o.hiddenUpdates,i=t[r],i===null?t[r]=[e]:i.push(e),e.lane=n|536870912),o):null}function d2(t){if(50<Nx)throw Nx=0,w4=null,Error(Pe(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var _v={};function W0e(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wa(t,e,n,i){return new W0e(t,e,n,i)}function q4(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ju(t,e){var n=t.alternate;return n===null?(n=Wa(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Yq(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function qA(t,e,n,i,r,o){var a=0;if(i=t,typeof t=="function")q4(t)&&(a=1);else if(typeof t=="string")a=qye(t,n,Yl.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case VL:return t=Wa(31,n,e,r),t.elementType=VL,t.lanes=o,t;case fv:return Hh(n.children,r,o,e);case mq:a=8,r|=24;break;case FL:return t=Wa(12,n,e,r|2),t.elementType=FL,t.lanes=o,t;case BL:return t=Wa(13,n,e,r),t.elementType=BL,t.lanes=o,t;case HL:return t=Wa(19,n,e,r),t.elementType=HL,t.lanes=o,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qu:a=10;break e;case gq:a=9;break e;case N4:a=11;break e;case O4:a=14;break e;case _f:a=16,i=null;break e}a=29,n=Error(Pe(130,t===null?"null":typeof t,"")),i=null}return e=Wa(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function Hh(t,e,n,i){return t=Wa(7,t,i,e),t.lanes=n,t}function yL(t,e,n){return t=Wa(6,t,null,e),t.lanes=n,t}function Kq(t){var e=Wa(18,null,null,0);return e.stateNode=t,e}function _L(t,e,n){return e=Wa(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var sX=new WeakMap;function ks(t,e){if(typeof t=="object"&&t!==null){var n=sX.get(t);return n!==void 0?n:(e={value:t,source:e,stack:HZ(e)},sX.set(t,e),e)}return{value:t,source:e,stack:HZ(e)}}var bv=[],xv=0,h2=null,Bx=0,As=[],Cs=0,$f=null,Zl=1,Xl="";function Zu(t,e){bv[xv++]=Bx,bv[xv++]=h2,h2=t,Bx=e}function Jq(t,e,n){As[Cs++]=Zl,As[Cs++]=Xl,As[Cs++]=$f,$f=t;var i=Zl;t=Xl;var r=32-Ya(i)-1;i&=~(1<<r),n+=1;var o=32-Ya(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Zl=1<<32-Ya(e)+r|n<<r|i,Xl=o+t}else Zl=1<<o|n<<r|i,Xl=t}function Y4(t){t.return!==null&&(Zu(t,1),Jq(t,1,0))}function K4(t){for(;t===h2;)h2=bv[--xv],bv[xv]=null,Bx=bv[--xv],bv[xv]=null;for(;t===$f;)$f=As[--Cs],As[Cs]=null,Xl=As[--Cs],As[Cs]=null,Zl=As[--Cs],As[Cs]=null}function Qq(t,e){As[Cs++]=Zl,As[Cs++]=Xl,As[Cs++]=$f,Zl=e.id,Xl=e.overflow,$f=t}var Xr=null,pi=null,bn=!1,If=null,Is=!1,i4=Error(Pe(519));function Ff(t){var e=Error(Pe(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hx(ks(e,t)),i4}function lX(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[Zr]=t,e[pa]=i,n){case"dialog":pn("cancel",e),pn("close",e);break;case"iframe":case"object":case"embed":pn("load",e);break;case"video":case"audio":for(n=0;n<Wx.length;n++)pn(Wx[n],e);break;case"source":pn("error",e);break;case"img":case"image":case"link":pn("error",e),pn("load",e);break;case"details":pn("toggle",e);break;case"input":pn("invalid",e),Rq(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":pn("invalid",e);break;case"textarea":pn("invalid",e),Iq(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||NK(e.textContent,n)?(i.popover!=null&&(pn("beforetoggle",e),pn("toggle",e)),i.onScroll!=null&&pn("scroll",e),i.onScrollEnd!=null&&pn("scrollend",e),i.onClick!=null&&(e.onclick=Yu),e=!0):e=!1,e||Ff(t,!0)}function uX(t){for(Xr=t.return;Xr;)switch(Xr.tag){case 5:case 31:case 13:Is=!1;return;case 27:case 3:Is=!0;return;default:Xr=Xr.return}}function sv(t){if(t!==Xr)return!1;if(!bn)return uX(t),bn=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||C4(t.type,t.memoizedProps)),n=!n),n&&pi&&Ff(t),uX(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Pe(317));pi=KX(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Pe(317));pi=KX(t)}else e===27?(e=pi,Gf(t.type)?(t=P4,P4=null,pi=t):pi=e):pi=Xr?Ds(t.stateNode.nextSibling):null;return!0}function Wh(){pi=Xr=null,bn=!1}function bL(){var t=If;return t!==null&&(da===null?da=t:da.push.apply(da,t),If=null),t}function Hx(t){If===null?If=[t]:If.push(t)}var r4=Kl(null),tp=null,Ku=null;function xf(t,e,n){oi(r4,e._currentValue),e._currentValue=n}function Qu(t){t._currentValue=r4.current,Ur(r4)}function o4(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function a4(t,e,n,i){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var o=r.dependencies;if(o!==null){var a=r.child;o=o.firstContext;e:for(;o!==null;){var s=o;o=r;for(var l=0;l<e.length;l++)if(s.context===e[l]){o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),o4(o.return,n,t),i||(a=null);break e}o=s.next}}else if(r.tag===18){if(a=r.return,a===null)throw Error(Pe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),o4(a,n,t),a=null}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===t){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}}function Vv(t,e,n,i){t=null;for(var r=e,o=!1;r!==null;){if(!o){if((r.flags&524288)!==0)o=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var a=r.alternate;if(a===null)throw Error(Pe(387));if(a=a.memoizedProps,a!==null){var s=r.type;Ja(r.pendingProps.value,a.value)||(t!==null?t.push(s):t=[s])}}else if(r===a2.current){if(a=r.alternate,a===null)throw Error(Pe(387));a.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(Xx):t=[Xx])}r=r.return}t!==null&&a4(e,t,n,i),e.flags|=262144}function p2(t){for(t=t.firstContext;t!==null;){if(!Ja(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Zh(t){tp=t,Ku=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qr(t){return eY(tp,t)}function NA(t,e){return tp===null&&Zh(t),eY(t,e)}function eY(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ku===null){if(t===null)throw Error(Pe(308));Ku=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ku=Ku.next=e;return n}var Z0e=typeof AbortController!="undefined"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},X0e=Tr.unstable_scheduleCallback,q0e=Tr.unstable_NormalPriority,dr={$$typeof:qu,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function J4(){return{controller:new Z0e,data:new Map,refCount:0}}function iS(t){t.refCount--,t.refCount===0&&X0e(q0e,function(){t.controller.abort()})}var Ax=null,s4=0,Dv=0,Mv=null;function Y0e(t,e){if(Ax===null){var n=Ax=[];s4=0,Dv=w$(),Mv={status:"pending",value:void 0,then:function(i){n.push(i)}}}return s4++,e.then(cX,cX),e}function cX(){if(--s4===0&&Ax!==null){Mv!==null&&(Mv.status="fulfilled");var t=Ax;Ax=null,Dv=0,Mv=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function K0e(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var fX=Ut.S;Ut.S=function(t,e){pK=Xa(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Y0e(t,e),fX!==null&&fX(t,e)};var Vh=Kl(null);function Q4(){var t=Vh.current;return t!==null?t:Jn.pooledCache}function YA(t,e){e===null?oi(Vh,Vh.current):oi(Vh,e.pool)}function tY(){var t=Q4();return t===null?null:{parent:dr._currentValue,pool:t}}var Gv=Error(Pe(460)),e$=Error(Pe(474)),B2=Error(Pe(542)),m2={then:function(){}};function dX(t){return t=t.status,t==="fulfilled"||t==="rejected"}function nY(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Yu,Yu),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pX(t),t;default:if(typeof e.status=="string")e.then(Yu,Yu);else{if(t=Jn,t!==null&&100<t.shellSuspendCounter)throw Error(Pe(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=i}},function(i){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,pX(t),t}throw Gh=e,Gv}}function $h(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Gh=n,Gv):n}}var Gh=null;function hX(){if(Gh===null)throw Error(Pe(459));var t=Gh;return Gh=null,t}function pX(t){if(t===Gv||t===B2)throw Error(Pe(483))}var Av=null,Vx=0;function OA(t){var e=Vx;return Vx+=1,Av===null&&(Av=[]),nY(Av,t,e)}function px(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function UA(t,e){throw e.$$typeof===Uve?Error(Pe(525)):(t=Object.prototype.toString.call(e),Error(Pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function iY(t){function e(y,x){if(t){var T=y.deletions;T===null?(y.deletions=[x],y.flags|=16):T.push(x)}}function n(y,x){if(!t)return null;for(;x!==null;)e(y,x),x=x.sibling;return null}function i(y){for(var x=new Map;y!==null;)y.key!==null?x.set(y.key,y):x.set(y.index,y),y=y.sibling;return x}function r(y,x){return y=Ju(y,x),y.index=0,y.sibling=null,y}function o(y,x,T){return y.index=T,t?(T=y.alternate,T!==null?(T=T.index,T<x?(y.flags|=67108866,x):T):(y.flags|=67108866,x)):(y.flags|=1048576,x)}function a(y){return t&&y.alternate===null&&(y.flags|=67108866),y}function s(y,x,T,w){return x===null||x.tag!==6?(x=yL(T,y.mode,w),x.return=y,x):(x=r(x,T),x.return=y,x)}function l(y,x,T,w){var E=T.type;return E===fv?f(y,x,T.props.children,w,T.key):x!==null&&(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_f&&$h(E)===x.type)?(x=r(x,T.props),px(x,T),x.return=y,x):(x=qA(T.type,T.key,T.props,null,y.mode,w),px(x,T),x.return=y,x)}function u(y,x,T,w){return x===null||x.tag!==4||x.stateNode.containerInfo!==T.containerInfo||x.stateNode.implementation!==T.implementation?(x=_L(T,y.mode,w),x.return=y,x):(x=r(x,T.children||[]),x.return=y,x)}function f(y,x,T,w,E){return x===null||x.tag!==7?(x=Hh(T,y.mode,w,E),x.return=y,x):(x=r(x,T),x.return=y,x)}function c(y,x,T){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=yL(""+x,y.mode,T),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case AA:return T=qA(x.type,x.key,x.props,null,y.mode,T),px(T,x),T.return=y,T;case _x:return x=_L(x,y.mode,T),x.return=y,x;case _f:return x=$h(x),c(y,x,T)}if(bx(x)||dx(x))return x=Hh(x,y.mode,T,null),x.return=y,x;if(typeof x.then=="function")return c(y,OA(x),T);if(x.$$typeof===qu)return c(y,NA(y,x),T);UA(y,x)}return null}function p(y,x,T,w){var E=x!==null?x.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return E!==null?null:s(y,x,""+T,w);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case AA:return T.key===E?l(y,x,T,w):null;case _x:return T.key===E?u(y,x,T,w):null;case _f:return T=$h(T),p(y,x,T,w)}if(bx(T)||dx(T))return E!==null?null:f(y,x,T,w,null);if(typeof T.then=="function")return p(y,x,OA(T),w);if(T.$$typeof===qu)return p(y,x,NA(y,T),w);UA(y,T)}return null}function m(y,x,T,w,E){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return y=y.get(T)||null,s(x,y,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case AA:return y=y.get(w.key===null?T:w.key)||null,l(x,y,w,E);case _x:return y=y.get(w.key===null?T:w.key)||null,u(x,y,w,E);case _f:return w=$h(w),m(y,x,T,w,E)}if(bx(w)||dx(w))return y=y.get(T)||null,f(x,y,w,E,null);if(typeof w.then=="function")return m(y,x,T,OA(w),E);if(w.$$typeof===qu)return m(y,x,T,NA(x,w),E);UA(x,w)}return null}function g(y,x,T,w){for(var E=null,A=null,R=x,M=x=0,I=null;R!==null&&M<T.length;M++){R.index>M?(I=R,R=null):I=R.sibling;var P=p(y,R,T[M],w);if(P===null){R===null&&(R=I);break}t&&R&&P.alternate===null&&e(y,R),x=o(P,x,M),A===null?E=P:A.sibling=P,A=P,R=I}if(M===T.length)return n(y,R),bn&&Zu(y,M),E;if(R===null){for(;M<T.length;M++)R=c(y,T[M],w),R!==null&&(x=o(R,x,M),A===null?E=R:A.sibling=R,A=R);return bn&&Zu(y,M),E}for(R=i(R);M<T.length;M++)I=m(R,y,M,T[M],w),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?M:I.key),x=o(I,x,M),A===null?E=I:A.sibling=I,A=I);return t&&R.forEach(function(z){return e(y,z)}),bn&&Zu(y,M),E}function _(y,x,T,w){if(T==null)throw Error(Pe(151));for(var E=null,A=null,R=x,M=x=0,I=null,P=T.next();R!==null&&!P.done;M++,P=T.next()){R.index>M?(I=R,R=null):I=R.sibling;var z=p(y,R,P.value,w);if(z===null){R===null&&(R=I);break}t&&R&&z.alternate===null&&e(y,R),x=o(z,x,M),A===null?E=z:A.sibling=z,A=z,R=I}if(P.done)return n(y,R),bn&&Zu(y,M),E;if(R===null){for(;!P.done;M++,P=T.next())P=c(y,P.value,w),P!==null&&(x=o(P,x,M),A===null?E=P:A.sibling=P,A=P);return bn&&Zu(y,M),E}for(R=i(R);!P.done;M++,P=T.next())P=m(R,y,M,P.value,w),P!==null&&(t&&P.alternate!==null&&R.delete(P.key===null?M:P.key),x=o(P,x,M),A===null?E=P:A.sibling=P,A=P);return t&&R.forEach(function($){return e(y,$)}),bn&&Zu(y,M),E}function b(y,x,T,w){if(typeof T=="object"&&T!==null&&T.type===fv&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case AA:e:{for(var E=T.key;x!==null;){if(x.key===E){if(E=T.type,E===fv){if(x.tag===7){n(y,x.sibling),w=r(x,T.props.children),w.return=y,y=w;break e}}else if(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===_f&&$h(E)===x.type){n(y,x.sibling),w=r(x,T.props),px(w,T),w.return=y,y=w;break e}n(y,x);break}else e(y,x);x=x.sibling}T.type===fv?(w=Hh(T.props.children,y.mode,w,T.key),w.return=y,y=w):(w=qA(T.type,T.key,T.props,null,y.mode,w),px(w,T),w.return=y,y=w)}return a(y);case _x:e:{for(E=T.key;x!==null;){if(x.key===E)if(x.tag===4&&x.stateNode.containerInfo===T.containerInfo&&x.stateNode.implementation===T.implementation){n(y,x.sibling),w=r(x,T.children||[]),w.return=y,y=w;break e}else{n(y,x);break}else e(y,x);x=x.sibling}w=_L(T,y.mode,w),w.return=y,y=w}return a(y);case _f:return T=$h(T),b(y,x,T,w)}if(bx(T))return g(y,x,T,w);if(dx(T)){if(E=dx(T),typeof E!="function")throw Error(Pe(150));return T=E.call(T),_(y,x,T,w)}if(typeof T.then=="function")return b(y,x,OA(T),w);if(T.$$typeof===qu)return b(y,x,NA(y,T),w);UA(y,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,x!==null&&x.tag===6?(n(y,x.sibling),w=r(x,T),w.return=y,y=w):(n(y,x),w=yL(T,y.mode,w),w.return=y,y=w),a(y)):n(y,x)}return function(y,x,T,w){try{Vx=0;var E=b(y,x,T,w);return Av=null,E}catch(R){if(R===Gv||R===B2)throw R;var A=Wa(29,R,null,y.mode);return A.lanes=w,A.return=y,A}finally{}}}var Xh=iY(!0),rY=iY(!1),bf=!1;function t$(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function l4(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pf(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Df(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,(kn&2)!==0){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,e=d2(t),qq(t,null,n),e}return F2(t,i,e,n),d2(t)}function Cx(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sq(t,n)}}function xL(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var u4=!1;function Rx(){if(u4){var t=Mv;if(t!==null)throw t}}function kx(t,e,n,i){u4=!1;var r=t.updateQueue;bf=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=l))}if(o!==null){var c=r.baseState;a=0,f=u=l=null,s=o;do{var p=s.lane&-536870913,m=p!==s.lane;if(m?(vn&p)===p:(i&p)===p){p!==0&&p===Dv&&(u4=!0),f!==null&&(f=f.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=t,_=s;p=e;var b=n;switch(_.tag){case 1:if(g=_.payload,typeof g=="function"){c=g.call(b,c,p);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,p=typeof g=="function"?g.call(b,c,p):g,p==null)break e;c=mi({},c,p);break e;case 2:bf=!0}}p=s.callback,p!==null&&(t.flags|=64,m&&(t.flags|=8192),m=r.callbacks,m===null?r.callbacks=[p]:m.push(p))}else m={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=m,l=c):f=f.next=m,a|=p;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;m=s,s=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);f===null&&(l=c),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,o===null&&(r.shared.lanes=0),Hf|=a,t.lanes=a,t.memoizedState=c}}function oY(t,e){if(typeof t!="function")throw Error(Pe(191,t));t.call(e)}function aY(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)oY(n[t],e)}var zv=Kl(null),g2=Kl(0);function mX(t,e){t=oc,oi(g2,t),oi(zv,e),oc=t|e.baseLanes}function c4(){oi(g2,oc),oi(zv,zv.current)}function n$(){oc=g2.current,Ur(zv),Ur(g2)}var Qa=Kl(null),Ps=null;function Sf(t){var e=t.alternate;oi(Zi,Zi.current&1),oi(Qa,t),Ps===null&&(e===null||zv.current!==null||e.memoizedState!==null)&&(Ps=t)}function f4(t){oi(Zi,Zi.current),oi(Qa,t),Ps===null&&(Ps=t)}function sY(t){t.tag===22?(oi(Zi,Zi.current),oi(Qa,t),Ps===null&&(Ps=t)):wf(t)}function wf(){oi(Zi,Zi.current),oi(Qa,Qa.current)}function ja(t){Ur(Qa),Ps===t&&(Ps=null),Ur(Zi)}var Zi=Kl(0);function v2(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||k4(n)||I4(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var nc=0,nn=null,qn=null,cr=null,y2=!1,Cv=!1,qh=!1,_2=0,Gx=0,Rv=null,J0e=0;function Li(){throw Error(Pe(321))}function i$(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ja(t[n],e[n]))return!1;return!0}function r$(t,e,n,i,r,o){return nc=o,nn=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ut.H=t===null||t.memoizedState===null?LY:m$,qh=!1,o=n(i,r),qh=!1,Cv&&(o=uY(e,n,i,r)),lY(t),o}function lY(t){Ut.H=jx;var e=qn!==null&&qn.next!==null;if(nc=0,cr=qn=nn=null,y2=!1,Gx=0,Rv=null,e)throw Error(Pe(300));t===null||hr||(t=t.dependencies,t!==null&&p2(t)&&(hr=!0))}function uY(t,e,n,i){nn=t;var r=0;do{if(Cv&&(Rv=null),Gx=0,Cv=!1,25<=r)throw Error(Pe(301));if(r+=1,cr=qn=null,t.updateQueue!=null){var o=t.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}Ut.H=$Y,o=e(n,i)}while(Cv);return o}function Q0e(){var t=Ut.H,e=t.useState()[0];return e=typeof e.then=="function"?rS(e):e,t=t.useState()[0],(qn!==null?qn.memoizedState:null)!==t&&(nn.flags|=1024),e}function o$(){var t=_2!==0;return _2=0,t}function a$(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function s$(t){if(y2){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}y2=!1}nc=0,cr=qn=nn=null,Cv=!1,Gx=_2=0,Rv=null}function Uo(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cr===null?nn.memoizedState=cr=t:cr=cr.next=t,cr}function Xi(){if(qn===null){var t=nn.alternate;t=t!==null?t.memoizedState:null}else t=qn.next;var e=cr===null?nn.memoizedState:cr.next;if(e!==null)cr=e,qn=t;else{if(t===null)throw nn.alternate===null?Error(Pe(467)):Error(Pe(310));qn=t,t={memoizedState:qn.memoizedState,baseState:qn.baseState,baseQueue:qn.baseQueue,queue:qn.queue,next:null},cr===null?nn.memoizedState=cr=t:cr=cr.next=t}return cr}function H2(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function rS(t){var e=Gx;return Gx+=1,Rv===null&&(Rv=[]),t=nY(Rv,t,e),e=nn,(cr===null?e.memoizedState:cr.next)===null&&(e=e.alternate,Ut.H=e===null||e.memoizedState===null?LY:m$),t}function V2(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return rS(t);if(t.$$typeof===qu)return qr(t)}throw Error(Pe(438,String(t)))}function l$(t){var e=null,n=nn.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=nn.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=H2(),nn.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=Lve;return e.index++,n}function ic(t,e){return typeof e=="function"?e(t):e}function KA(t){var e=Xi();return u$(e,qn,t)}function u$(t,e,n){var i=t.queue;if(i===null)throw Error(Pe(311));i.lastRenderedReducer=n;var r=t.baseQueue,o=i.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}e.baseQueue=r=o,i.pending=null}if(o=t.baseState,r===null)t.memoizedState=o;else{e=r.next;var s=a=null,l=null,u=e,f=!1;do{var c=u.lane&-536870913;if(c!==u.lane?(vn&c)===c:(nc&c)===c){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),c===Dv&&(f=!0);else if((nc&p)===p){u=u.next,p===Dv&&(f=!0);continue}else c={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=c,a=o):l=l.next=c,nn.lanes|=p,Hf|=p;c=u.action,qh&&n(o,c),o=u.hasEagerState?u.eagerState:n(o,c)}else p={lane:c,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(s=l=p,a=o):l=l.next=p,nn.lanes|=c,Hf|=c;u=u.next}while(u!==null&&u!==e);if(l===null?a=o:l.next=s,!Ja(o,t.memoizedState)&&(hr=!0,f&&(n=Mv,n!==null)))throw n;t.memoizedState=o,t.baseState=a,t.baseQueue=l,i.lastRenderedState=o}return r===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function SL(t){var e=Xi(),n=e.queue;if(n===null)throw Error(Pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);Ja(o,e.memoizedState)||(hr=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function cY(t,e,n){var i=nn,r=Xi(),o=bn;if(o){if(n===void 0)throw Error(Pe(407));n=n()}else n=e();var a=!Ja((qn||r).memoizedState,n);if(a&&(r.memoizedState=n,hr=!0),r=r.queue,c$(hY.bind(null,i,r,t),[t]),r.getSnapshot!==e||a||cr!==null&&cr.memoizedState.tag&1){if(i.flags|=2048,Nv(9,{destroy:void 0},dY.bind(null,i,r,n,e),null),Jn===null)throw Error(Pe(349));o||(nc&127)!==0||fY(i,e,n)}return n}function fY(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=nn.updateQueue,e===null?(e=H2(),nn.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dY(t,e,n,i){e.value=n,e.getSnapshot=i,pY(e)&&mY(t)}function hY(t,e,n){return n(function(){pY(e)&&mY(t)})}function pY(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ja(t,n)}catch(i){return!0}}function mY(t){var e=ep(t,2);e!==null&&ha(e,t,2)}function d4(t){var e=Uo();if(typeof t=="function"){var n=t;if(t=n(),qh){Ef(!0);try{n()}finally{Ef(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ic,lastRenderedState:t},e}function gY(t,e,n,i){return t.baseState=n,u$(t,qn,typeof i=="function"?i:ic)}function eye(t,e,n,i,r){if(j2(t))throw Error(Pe(485));if(t=e.action,t!==null){var o={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){o.listeners.push(a)}};Ut.T!==null?n(!0):o.isTransition=!1,i(o),n=e.pending,n===null?(o.next=e.pending=o,vY(e,o)):(o.next=n.next,e.pending=n.next=o)}}function vY(t,e){var n=e.action,i=e.payload,r=t.state;if(e.isTransition){var o=Ut.T,a={};Ut.T=a;try{var s=n(r,i),l=Ut.S;l!==null&&l(a,s),gX(t,e,s)}catch(u){h4(t,e,u)}finally{o!==null&&a.types!==null&&(o.types=a.types),Ut.T=o}}else try{o=n(r,i),gX(t,e,o)}catch(u){h4(t,e,u)}}function gX(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){vX(t,e,i)},function(i){return h4(t,e,i)}):vX(t,e,n)}function vX(t,e,n){e.status="fulfilled",e.value=n,yY(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,vY(t,n)))}function h4(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,yY(e),e=e.next;while(e!==i)}t.action=null}function yY(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function _Y(t,e){return e}function yX(t,e){if(bn){var n=Jn.formState;if(n!==null){e:{var i=nn;if(bn){if(pi){t:{for(var r=pi,o=Is;r.nodeType!==8;){if(!o){r=null;break t}if(r=Ds(r.nextSibling),r===null){r=null;break t}}o=r.data,r=o==="F!"||o==="F"?r:null}if(r){pi=Ds(r.nextSibling),i=r.data==="F!";break e}}Ff(i)}i=!1}i&&(e=n[0])}}return n=Uo(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_Y,lastRenderedState:e},n.queue=i,n=NY.bind(null,nn,i),i.dispatch=n,i=d4(!1),o=p$.bind(null,nn,!1,i.queue),i=Uo(),r={state:e,dispatch:null,action:t,pending:null},i.queue=r,n=eye.bind(null,nn,r,o,n),r.dispatch=n,i.memoizedState=t,[e,n,!1]}function _X(t){var e=Xi();return bY(e,qn,t)}function bY(t,e,n){if(e=u$(t,e,_Y)[0],t=KA(ic)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=rS(e)}catch(a){throw a===Gv?B2:a}else i=e;e=Xi();var r=e.queue,o=r.dispatch;return n!==e.memoizedState&&(nn.flags|=2048,Nv(9,{destroy:void 0},tye.bind(null,r,n),null)),[i,o,t]}function tye(t,e){t.action=e}function bX(t){var e=Xi(),n=qn;if(n!==null)return bY(e,n,t);Xi(),e=e.memoizedState,n=Xi();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Nv(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=nn.updateQueue,e===null&&(e=H2(),nn.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function xY(){return Xi().memoizedState}function JA(t,e,n,i){var r=Uo();nn.flags|=t,r.memoizedState=Nv(1|e,{destroy:void 0},n,i===void 0?null:i)}function G2(t,e,n,i){var r=Xi();i=i===void 0?null:i;var o=r.memoizedState.inst;qn!==null&&i!==null&&i$(i,qn.memoizedState.deps)?r.memoizedState=Nv(e,o,n,i):(nn.flags|=t,r.memoizedState=Nv(1|e,o,n,i))}function xX(t,e){JA(8390656,8,t,e)}function c$(t,e){G2(2048,8,t,e)}function nye(t){nn.flags|=4;var e=nn.updateQueue;if(e===null)e=H2(),nn.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function SY(t){var e=Xi().memoizedState;return nye({ref:e,nextImpl:t}),function(){if((kn&2)!==0)throw Error(Pe(440));return e.impl.apply(void 0,arguments)}}function wY(t,e){return G2(4,2,t,e)}function TY(t,e){return G2(4,4,t,e)}function EY(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function MY(t,e,n){n=n!=null?n.concat([t]):null,G2(4,4,EY.bind(null,e,t),n)}function f$(){}function AY(t,e){var n=Xi();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&i$(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function CY(t,e){var n=Xi();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&i$(e,i[1]))return i[0];if(i=t(),qh){Ef(!0);try{t()}finally{Ef(!1)}}return n.memoizedState=[i,e],i}function d$(t,e,n){return n===void 0||(nc&1073741824)!==0&&(vn&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=gK(),nn.lanes|=t,Hf|=t,n)}function RY(t,e,n,i){return Ja(n,e)?n:zv.current!==null?(t=d$(t,n,i),Ja(t,e)||(hr=!0),t):(nc&42)===0||(nc&1073741824)!==0&&(vn&261930)===0?(hr=!0,t.memoizedState=n):(t=gK(),nn.lanes|=t,Hf|=t,e)}function kY(t,e,n,i,r){var o=In.p;In.p=o!==0&&8>o?o:8;var a=Ut.T,s={};Ut.T=s,p$(t,!1,e,n);try{var l=r(),u=Ut.S;if(u!==null&&u(s,l),l!==null&&typeof l=="object"&&typeof l.then=="function"){var f=K0e(l,i);Ix(t,e,f,Ka(t))}else Ix(t,e,i,Ka(t))}catch(c){Ix(t,e,{then:function(){},status:"rejected",reason:c},Ka())}finally{In.p=o,a!==null&&s.types!==null&&(a.types=s.types),Ut.T=a}}function iye(){}function p4(t,e,n,i){if(t.tag!==5)throw Error(Pe(476));var r=IY(t).queue;kY(t,r,e,Bh,n===null?iye:function(){return PY(t),n(i)})}function IY(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:Bh,baseState:Bh,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ic,lastRenderedState:Bh},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ic,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function PY(t){var e=IY(t);e.next===null&&(e=t.alternate.memoizedState),Ix(t,e.next.queue,{},Ka())}function h$(){return qr(Xx)}function DY(){return Xi().memoizedState}function zY(){return Xi().memoizedState}function rye(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Ka();t=Pf(n);var i=Df(e,t,n);i!==null&&(ha(i,e,n),Cx(i,e,n)),e={cache:J4()},t.payload=e;return}e=e.return}}function oye(t,e,n){var i=Ka();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},j2(t)?OY(e,n):(n=X4(t,e,n,i),n!==null&&(ha(n,t,i),UY(n,e,i)))}function NY(t,e,n){var i=Ka();Ix(t,e,n,i)}function Ix(t,e,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(j2(t))OY(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,Ja(s,a))return F2(t,e,r,0),Jn===null&&$2(),!1}catch(l){}finally{}if(n=X4(t,e,r,i),n!==null)return ha(n,t,i),UY(n,e,i),!0}return!1}function p$(t,e,n,i){if(i={lane:2,revertLane:w$(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},j2(t)){if(e)throw Error(Pe(479))}else e=X4(t,n,i,2),e!==null&&ha(e,t,2)}function j2(t){var e=t.alternate;return t===nn||e!==null&&e===nn}function OY(t,e){Cv=y2=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function UY(t,e,n){if((n&4194048)!==0){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Sq(t,n)}}var jx={readContext:qr,use:V2,useCallback:Li,useContext:Li,useEffect:Li,useImperativeHandle:Li,useLayoutEffect:Li,useInsertionEffect:Li,useMemo:Li,useReducer:Li,useRef:Li,useState:Li,useDebugValue:Li,useDeferredValue:Li,useTransition:Li,useSyncExternalStore:Li,useId:Li,useHostTransitionStatus:Li,useFormState:Li,useActionState:Li,useOptimistic:Li,useMemoCache:Li,useCacheRefresh:Li};jx.useEffectEvent=Li;var LY={readContext:qr,use:V2,useCallback:function(t,e){return Uo().memoizedState=[t,e===void 0?null:e],t},useContext:qr,useEffect:xX,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,JA(4194308,4,EY.bind(null,e,t),n)},useLayoutEffect:function(t,e){return JA(4194308,4,t,e)},useInsertionEffect:function(t,e){JA(4,2,t,e)},useMemo:function(t,e){var n=Uo();e=e===void 0?null:e;var i=t();if(qh){Ef(!0);try{t()}finally{Ef(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Uo();if(n!==void 0){var r=n(e);if(qh){Ef(!0);try{n(e)}finally{Ef(!1)}}}else r=e;return i.memoizedState=i.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},i.queue=t,t=t.dispatch=oye.bind(null,nn,t),[i.memoizedState,t]},useRef:function(t){var e=Uo();return t={current:t},e.memoizedState=t},useState:function(t){t=d4(t);var e=t.queue,n=NY.bind(null,nn,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:f$,useDeferredValue:function(t,e){var n=Uo();return d$(n,t,e)},useTransition:function(){var t=d4(!1);return t=kY.bind(null,nn,t.queue,!0,!1),Uo().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=nn,r=Uo();if(bn){if(n===void 0)throw Error(Pe(407));n=n()}else{if(n=e(),Jn===null)throw Error(Pe(349));(vn&127)!==0||fY(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,xX(hY.bind(null,i,o,t),[t]),i.flags|=2048,Nv(9,{destroy:void 0},dY.bind(null,i,o,n,e),null),n},useId:function(){var t=Uo(),e=Jn.identifierPrefix;if(bn){var n=Xl,i=Zl;n=(i&~(1<<32-Ya(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=_2++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=J0e++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:h$,useFormState:yX,useActionState:yX,useOptimistic:function(t){var e=Uo();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=p$.bind(null,nn,!0,n),n.dispatch=e,[t,e]},useMemoCache:l$,useCacheRefresh:function(){return Uo().memoizedState=rye.bind(null,nn)},useEffectEvent:function(t){var e=Uo(),n={impl:t};return e.memoizedState=n,function(){if((kn&2)!==0)throw Error(Pe(440));return n.impl.apply(void 0,arguments)}}},m$={readContext:qr,use:V2,useCallback:AY,useContext:qr,useEffect:c$,useImperativeHandle:MY,useInsertionEffect:wY,useLayoutEffect:TY,useMemo:CY,useReducer:KA,useRef:xY,useState:function(){return KA(ic)},useDebugValue:f$,useDeferredValue:function(t,e){var n=Xi();return RY(n,qn.memoizedState,t,e)},useTransition:function(){var t=KA(ic)[0],e=Xi().memoizedState;return[typeof t=="boolean"?t:rS(t),e]},useSyncExternalStore:cY,useId:DY,useHostTransitionStatus:h$,useFormState:_X,useActionState:_X,useOptimistic:function(t,e){var n=Xi();return gY(n,qn,t,e)},useMemoCache:l$,useCacheRefresh:zY};m$.useEffectEvent=SY;var $Y={readContext:qr,use:V2,useCallback:AY,useContext:qr,useEffect:c$,useImperativeHandle:MY,useInsertionEffect:wY,useLayoutEffect:TY,useMemo:CY,useReducer:SL,useRef:xY,useState:function(){return SL(ic)},useDebugValue:f$,useDeferredValue:function(t,e){var n=Xi();return qn===null?d$(n,t,e):RY(n,qn.memoizedState,t,e)},useTransition:function(){var t=SL(ic)[0],e=Xi().memoizedState;return[typeof t=="boolean"?t:rS(t),e]},useSyncExternalStore:cY,useId:DY,useHostTransitionStatus:h$,useFormState:bX,useActionState:bX,useOptimistic:function(t,e){var n=Xi();return qn!==null?gY(n,qn,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:l$,useCacheRefresh:zY};$Y.useEffectEvent=SY;function wL(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:mi({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var m4={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Ka(),r=Pf(i);r.payload=e,n!=null&&(r.callback=n),e=Df(t,r,i),e!==null&&(ha(e,t,i),Cx(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Ka(),r=Pf(i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=Df(t,r,i),e!==null&&(ha(e,t,i),Cx(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ka(),i=Pf(n);i.tag=2,e!=null&&(i.callback=e),e=Df(t,i,n),e!==null&&(ha(e,t,n),Cx(e,t,n))}};function SX(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!Fx(n,i)||!Fx(r,o):!0}function wX(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&m4.enqueueReplaceState(e,e.state,null)}function Yh(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=mi({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function FY(t){f2(t)}function BY(t){console.error(t)}function HY(t){f2(t)}function b2(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function TX(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function g4(t,e,n){return n=Pf(n),n.tag=3,n.payload={element:null},n.callback=function(){b2(t,e)},n}function VY(t){return t=Pf(t),t.tag=3,t}function GY(t,e,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var o=i.value;t.payload=function(){return r(o)},t.callback=function(){TX(e,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){TX(e,n,i),typeof r!="function"&&(zf===null?zf=new Set([this]):zf.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function aye(t,e,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&Vv(e,n,r,!0),n=Qa.current,n!==null){switch(n.tag){case 31:case 13:return Ps===null?E2():n.alternate===null&&$i===0&&($i=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===m2?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),zL(t,i,r)),!1;case 22:return n.flags|=65536,i===m2?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),zL(t,i,r)),!1}throw Error(Pe(435,n.tag))}return zL(t,i,r),E2(),!1}if(bn)return e=Qa.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=r,i!==i4&&(t=Error(Pe(422),{cause:i}),Hx(ks(t,n)))):(i!==i4&&(e=Error(Pe(423),{cause:i}),Hx(ks(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,i=ks(i,n),r=g4(t.stateNode,i,r),xL(t,r),$i!==4&&($i=2)),!1;var o=Error(Pe(520),{cause:i});if(o=ks(o,n),zx===null?zx=[o]:zx.push(o),$i!==4&&($i=2),e===null)return!0;i=ks(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=g4(n.stateNode,i,t),xL(n,t),!1;case 1:if(e=n.type,o=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||o!==null&&typeof o.componentDidCatch=="function"&&(zf===null||!zf.has(o))))return n.flags|=65536,r&=-r,n.lanes|=r,r=VY(r),GY(r,t,n,i),xL(n,r),!1}n=n.return}while(n!==null);return!1}var g$=Error(Pe(461)),hr=!1;function Wr(t,e,n,i){e.child=t===null?rY(e,null,n,i):Xh(e,t.child,n,i)}function EX(t,e,n,i,r){n=n.render;var o=e.ref;if("ref"in i){var a={};for(var s in i)s!=="ref"&&(a[s]=i[s])}else a=i;return Zh(e),i=r$(t,e,n,a,o,r),s=o$(),t!==null&&!hr?(a$(t,e,r),rc(t,e,r)):(bn&&s&&Y4(e),e.flags|=1,Wr(t,e,i,r),e.child)}function MX(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!q4(o)&&o.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=o,jY(t,e,o,i,r)):(t=qA(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!v$(t,r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Fx,n(a,i)&&t.ref===e.ref)return rc(t,e,r)}return e.flags|=1,t=Ju(o,i),t.ref=e.ref,t.return=e,e.child=t}function jY(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Fx(o,i)&&t.ref===e.ref)if(hr=!1,e.pendingProps=i=o,v$(t,r))(t.flags&131072)!==0&&(hr=!0);else return e.lanes=t.lanes,rc(t,e,r)}return v4(t,e,n,i,r)}function WY(t,e,n,i){var r=i.children,o=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((e.flags&128)!==0){if(o=o!==null?o.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~o}else i=0,e.child=null;return AX(t,e,o,n,i)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&YA(e,o!==null?o.cachePool:null),o!==null?mX(e,o):c4(),sY(e);else return i=e.lanes=536870912,AX(t,e,o!==null?o.baseLanes|n:n,n,i)}else o!==null?(YA(e,o.cachePool),mX(e,o),wf(e),e.memoizedState=null):(t!==null&&YA(e,null),c4(),wf(e));return Wr(t,e,r,n),e.child}function Sx(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function AX(t,e,n,i,r){var o=Q4();return o=o===null?null:{parent:dr._currentValue,pool:o},e.memoizedState={baseLanes:n,cachePool:o},t!==null&&YA(e,null),c4(),sY(e),t!==null&&Vv(t,e,i,!0),e.childLanes=r,null}function QA(t,e){return e=x2({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function CX(t,e,n){return Xh(e,t.child,null,n),t=QA(e,e.pendingProps),t.flags|=2,ja(e),e.memoizedState=null,t}function sye(t,e,n){var i=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(bn){if(i.mode==="hidden")return t=QA(e,i),e.lanes=536870912,Sx(null,t);if(f4(e),(t=pi)?(t=LK(t,Is),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$f!==null?{id:Zl,overflow:Xl}:null,retryLane:536870912,hydrationErrors:null},n=Kq(t),n.return=e,e.child=n,Xr=e,pi=null)):t=null,t===null)throw Ff(e);return e.lanes=536870912,null}return QA(e,i)}var o=t.memoizedState;if(o!==null){var a=o.dehydrated;if(f4(e),r)if(e.flags&256)e.flags&=-257,e=CX(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(Pe(558));else if(hr||Vv(t,e,n,!1),r=(n&t.childLanes)!==0,hr||r){if(i=Jn,i!==null&&(a=wq(i,n),a!==0&&a!==o.retryLane))throw o.retryLane=a,ep(t,a),ha(i,t,a),g$;E2(),e=CX(t,e,n)}else t=o.treeContext,pi=Ds(a.nextSibling),Xr=e,bn=!0,If=null,Is=!1,t!==null&&Qq(e,t),e=QA(e,i),e.flags|=4096;return e}return t=Ju(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function e2(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(Pe(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function v4(t,e,n,i,r){return Zh(e),n=r$(t,e,n,i,void 0,r),i=o$(),t!==null&&!hr?(a$(t,e,r),rc(t,e,r)):(bn&&i&&Y4(e),e.flags|=1,Wr(t,e,n,r),e.child)}function RX(t,e,n,i,r,o){return Zh(e),e.updateQueue=null,n=uY(e,i,n,r),lY(t),i=o$(),t!==null&&!hr?(a$(t,e,o),rc(t,e,o)):(bn&&i&&Y4(e),e.flags|=1,Wr(t,e,n,o),e.child)}function kX(t,e,n,i,r){if(Zh(e),e.stateNode===null){var o=_v,a=n.contextType;typeof a=="object"&&a!==null&&(o=qr(a)),o=new n(i,o),e.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=m4,e.stateNode=o,o._reactInternals=e,o=e.stateNode,o.props=i,o.state=e.memoizedState,o.refs={},t$(e),a=n.contextType,o.context=typeof a=="object"&&a!==null?qr(a):_v,o.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(wL(e,n,a,i),o.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(a=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),a!==o.state&&m4.enqueueReplaceState(o,o.state,null),kx(e,i,o,r),Rx(),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){o=e.stateNode;var s=e.memoizedProps,l=Yh(n,s);o.props=l;var u=o.context,f=n.contextType;a=_v,typeof f=="object"&&f!==null&&(a=qr(f));var c=n.getDerivedStateFromProps;f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s||u!==a)&&wX(e,o,i,a),bf=!1;var p=e.memoizedState;o.state=p,kx(e,i,o,r),Rx(),u=e.memoizedState,s||p!==u||bf?(typeof c=="function"&&(wL(e,n,c,i),u=e.memoizedState),(l=bf||SX(e,n,l,i,p,u,a))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=u),o.props=i,o.state=u,o.context=a,i=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,l4(t,e),a=e.memoizedProps,f=Yh(n,a),o.props=f,c=e.pendingProps,p=o.context,u=n.contextType,l=_v,typeof u=="object"&&u!==null&&(l=qr(u)),s=n.getDerivedStateFromProps,(u=typeof s=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||p!==l)&&wX(e,o,i,l),bf=!1,p=e.memoizedState,o.state=p,kx(e,i,o,r),Rx();var m=e.memoizedState;a!==c||p!==m||bf||t!==null&&t.dependencies!==null&&p2(t.dependencies)?(typeof s=="function"&&(wL(e,n,s,i),m=e.memoizedState),(f=bf||SX(e,n,f,i,p,m,l)||t!==null&&t.dependencies!==null&&p2(t.dependencies))?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=f):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return o=i,e2(t,e),i=(e.flags&128)!==0,o||i?(o=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:o.render(),e.flags|=1,t!==null&&i?(e.child=Xh(e,t.child,null,r),e.child=Xh(e,null,n,r)):Wr(t,e,n,r),e.memoizedState=o.state,t=e.child):t=rc(t,e,r),t}function IX(t,e,n,i){return Wh(),e.flags|=256,Wr(t,e,n,i),e.child}var TL={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function EL(t){return{baseLanes:t,cachePool:tY()}}function ML(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Za),t}function ZY(t,e,n){var i=e.pendingProps,r=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(Zi.current&2)!==0),a&&(r=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(bn){if(r?Sf(e):wf(e),(t=pi)?(t=LK(t,Is),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:$f!==null?{id:Zl,overflow:Xl}:null,retryLane:536870912,hydrationErrors:null},n=Kq(t),n.return=e,e.child=n,Xr=e,pi=null)):t=null,t===null)throw Ff(e);return I4(t)?e.lanes=32:e.lanes=536870912,null}var s=i.children;return i=i.fallback,r?(wf(e),r=e.mode,s=x2({mode:"hidden",children:s},r),i=Hh(i,r,n,null),s.return=e,i.return=e,s.sibling=i,e.child=s,i=e.child,i.memoizedState=EL(n),i.childLanes=ML(t,a,n),e.memoizedState=TL,Sx(null,i)):(Sf(e),y4(e,s))}var l=t.memoizedState;if(l!==null&&(s=l.dehydrated,s!==null)){if(o)e.flags&256?(Sf(e),e.flags&=-257,e=AL(t,e,n)):e.memoizedState!==null?(wf(e),e.child=t.child,e.flags|=128,e=null):(wf(e),s=i.fallback,r=e.mode,i=x2({mode:"visible",children:i.children},r),s=Hh(s,r,n,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,Xh(e,t.child,null,n),i=e.child,i.memoizedState=EL(n),i.childLanes=ML(t,a,n),e.memoizedState=TL,e=Sx(null,i));else if(Sf(e),I4(s)){if(a=s.nextSibling&&s.nextSibling.dataset,a)var u=a.dgst;a=u,i=Error(Pe(419)),i.stack="",i.digest=a,Hx({value:i,source:null,stack:null}),e=AL(t,e,n)}else if(hr||Vv(t,e,n,!1),a=(n&t.childLanes)!==0,hr||a){if(a=Jn,a!==null&&(i=wq(a,n),i!==0&&i!==l.retryLane))throw l.retryLane=i,ep(t,i),ha(a,t,i),g$;k4(s)||E2(),e=AL(t,e,n)}else k4(s)?(e.flags|=192,e.child=t.child,e=null):(t=l.treeContext,pi=Ds(s.nextSibling),Xr=e,bn=!0,If=null,Is=!1,t!==null&&Qq(e,t),e=y4(e,i.children),e.flags|=4096);return e}return r?(wf(e),s=i.fallback,r=e.mode,l=t.child,u=l.sibling,i=Ju(l,{mode:"hidden",children:i.children}),i.subtreeFlags=l.subtreeFlags&65011712,u!==null?s=Ju(u,s):(s=Hh(s,r,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,Sx(null,i),i=e.child,s=t.child.memoizedState,s===null?s=EL(n):(r=s.cachePool,r!==null?(l=dr._currentValue,r=r.parent!==l?{parent:l,pool:l}:r):r=tY(),s={baseLanes:s.baseLanes|n,cachePool:r}),i.memoizedState=s,i.childLanes=ML(t,a,n),e.memoizedState=TL,Sx(t.child,i)):(Sf(e),n=t.child,t=n.sibling,n=Ju(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function y4(t,e){return e=x2({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function x2(t,e){return t=Wa(22,t,null,e),t.lanes=0,t}function AL(t,e,n){return Xh(e,t.child,null,n),t=y4(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function PX(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),o4(t.return,e,n)}function CL(t,e,n,i,r,o){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:o}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r,a.treeForkCount=o)}function XY(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;i=i.children;var a=Zi.current,s=(a&2)!==0;if(s?(a=a&1|2,e.flags|=128):a&=1,oi(Zi,a),Wr(t,e,i,n),i=bn?Bx:0,!s&&t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&PX(t,n,e);else if(t.tag===19)PX(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&v2(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),CL(e,!1,r,n,o,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&v2(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}CL(e,!0,n,null,o,i);break;case"together":CL(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function rc(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hf|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(Vv(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(Pe(153));if(e.child!==null){for(t=e.child,n=Ju(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ju(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function v$(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&p2(t)))}function lye(t,e,n){switch(e.tag){case 3:s2(e,e.stateNode.containerInfo),xf(e,dr,t.memoizedState.cache),Wh();break;case 27:case 5:WL(e);break;case 4:s2(e,e.stateNode.containerInfo);break;case 10:xf(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,f4(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(Sf(e),e.flags|=128,null):(n&e.child.childLanes)!==0?ZY(t,e,n):(Sf(e),t=rc(t,e,n),t!==null?t.sibling:null);Sf(e);break;case 19:var r=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(Vv(t,e,n,!1),i=(n&e.childLanes)!==0),r){if(i)return XY(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),oi(Zi,Zi.current),i)break;return null;case 22:return e.lanes=0,WY(t,e,n,e.pendingProps);case 24:xf(e,dr,t.memoizedState.cache)}return rc(t,e,n)}function qY(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)hr=!0;else{if(!v$(t,n)&&(e.flags&128)===0)return hr=!1,lye(t,e,n);hr=(t.flags&131072)!==0}else hr=!1,bn&&(e.flags&1048576)!==0&&Jq(e,Bx,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=$h(e.elementType),e.type=t,typeof t=="function")q4(t)?(i=Yh(t,i),e.tag=1,e=kX(null,e,t,i,n)):(e.tag=0,e=v4(null,e,t,i,n));else{if(t!=null){var r=t.$$typeof;if(r===N4){e.tag=11,e=EX(null,e,t,i,n);break e}else if(r===O4){e.tag=14,e=MX(null,e,t,i,n);break e}}throw e=GL(t)||t,Error(Pe(306,e,""))}}return e;case 0:return v4(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,r=Yh(i,e.pendingProps),kX(t,e,i,r,n);case 3:e:{if(s2(e,e.stateNode.containerInfo),t===null)throw Error(Pe(387));i=e.pendingProps;var o=e.memoizedState;r=o.element,l4(t,e),kx(e,i,null,n);var a=e.memoizedState;if(i=a.cache,xf(e,dr,i),i!==o.cache&&a4(e,[dr],n,!0),Rx(),i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){e=IX(t,e,i,n);break e}else if(i!==r){r=ks(Error(Pe(424)),e),Hx(r),e=IX(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(pi=Ds(t.firstChild),Xr=e,bn=!0,If=null,Is=!0,n=rY(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wh(),i===r){e=rc(t,e,n);break e}Wr(t,e,i,n)}e=e.child}return e;case 26:return e2(t,e),t===null?(n=eq(e.type,null,e.pendingProps,null))?e.memoizedState=n:bn||(n=e.type,t=e.pendingProps,i=R2(kf.current).createElement(n),i[Zr]=e,i[pa]=t,Yr(i,n,t),Or(i),e.stateNode=i):e.memoizedState=eq(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return WL(e),t===null&&bn&&(i=e.stateNode=$K(e.type,e.pendingProps,kf.current),Xr=e,Is=!0,r=pi,Gf(e.type)?(P4=r,pi=Ds(i.firstChild)):pi=r),Wr(t,e,e.pendingProps.children,n),e2(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&bn&&((r=i=pi)&&(i=Oye(i,e.type,e.pendingProps,Is),i!==null?(e.stateNode=i,Xr=e,pi=Ds(i.firstChild),Is=!1,r=!0):r=!1),r||Ff(e)),WL(e),r=e.type,o=e.pendingProps,a=t!==null?t.memoizedProps:null,i=o.children,C4(r,o)?i=null:a!==null&&C4(r,a)&&(e.flags|=32),e.memoizedState!==null&&(r=r$(t,e,Q0e,null,null,n),Xx._currentValue=r),e2(t,e),Wr(t,e,i,n),e.child;case 6:return t===null&&bn&&((t=n=pi)&&(n=Uye(n,e.pendingProps,Is),n!==null?(e.stateNode=n,Xr=e,pi=null,t=!0):t=!1),t||Ff(e)),null;case 13:return ZY(t,e,n);case 4:return s2(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Xh(e,null,i,n):Wr(t,e,i,n),e.child;case 11:return EX(t,e,e.type,e.pendingProps,n);case 7:return Wr(t,e,e.pendingProps,n),e.child;case 8:return Wr(t,e,e.pendingProps.children,n),e.child;case 12:return Wr(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,xf(e,e.type,i.value),Wr(t,e,i.children,n),e.child;case 9:return r=e.type._context,i=e.pendingProps.children,Zh(e),r=qr(r),i=i(r),e.flags|=1,Wr(t,e,i,n),e.child;case 14:return MX(t,e,e.type,e.pendingProps,n);case 15:return jY(t,e,e.type,e.pendingProps,n);case 19:return XY(t,e,n);case 31:return sye(t,e,n);case 22:return WY(t,e,n,e.pendingProps);case 24:return Zh(e),i=qr(dr),t===null?(r=Q4(),r===null&&(r=Jn,o=J4(),r.pooledCache=o,o.refCount++,o!==null&&(r.pooledCacheLanes|=n),r=o),e.memoizedState={parent:i,cache:r},t$(e),xf(e,dr,r)):((t.lanes&n)!==0&&(l4(t,e),kx(e,null,null,n),Rx()),r=t.memoizedState,o=e.memoizedState,r.parent!==i?(r={parent:i,cache:i},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),xf(e,dr,i)):(i=o.cache,xf(e,dr,i),i!==r.cache&&a4(e,[dr],n,!0))),Wr(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(Pe(156,e.tag))}function Vu(t){t.flags|=4}function RL(t,e,n,i,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(_K())t.flags|=8192;else throw Gh=m2,e$}else t.flags&=-16777217}function DX(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!HK(e))if(_K())t.flags|=8192;else throw Gh=m2,e$}function LA(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?bq():536870912,t.lanes|=e,Ov|=e)}function mx(t,e){if(!bn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function hi(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function uye(t,e,n){var i=e.pendingProps;switch(K4(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return hi(e),null;case 1:return hi(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),Qu(dr),kv(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(sv(e)?Vu(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,bL())),hi(e),null;case 26:var r=e.type,o=e.memoizedState;return t===null?(Vu(e),o!==null?(hi(e),DX(e,o)):(hi(e),RL(e,r,null,i,n))):o?o!==t.memoizedState?(Vu(e),hi(e),DX(e,o)):(hi(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&Vu(e),hi(e),RL(e,r,t,i,n)),null;case 27:if(l2(e),n=kf.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Vu(e);else{if(!i){if(e.stateNode===null)throw Error(Pe(166));return hi(e),null}t=Yl.current,sv(e)?lX(e,t):(t=$K(r,i,n),e.stateNode=t,Vu(e))}return hi(e),null;case 5:if(l2(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&Vu(e);else{if(!i){if(e.stateNode===null)throw Error(Pe(166));return hi(e),null}if(o=Yl.current,sv(e))lX(e,o);else{var a=R2(kf.current);switch(o){case 1:o=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:o=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":o=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":o=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":o=a.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild);break;case"select":o=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?o.multiple=!0:i.size&&(o.size=i.size);break;default:o=typeof i.is=="string"?a.createElement(r,{is:i.is}):a.createElement(r)}}o[Zr]=e,o[pa]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)o.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=o;e:switch(Yr(o,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Vu(e)}}return hi(e),RL(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&Vu(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Pe(166));if(t=kf.current,sv(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,r=Xr,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}t[Zr]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||NK(t.nodeValue,n)),t||Ff(e,!0)}else t=R2(t).createTextNode(i),t[Zr]=e,e.stateNode=t}return hi(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=sv(e),n!==null){if(t===null){if(!i)throw Error(Pe(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Pe(557));t[Zr]=e}else Wh(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;hi(e),t=!1}else n=bL(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(ja(e),e):(ja(e),null);if((e.flags&128)!==0)throw Error(Pe(558))}return hi(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=sv(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(Pe(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(Pe(317));r[Zr]=e}else Wh(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;hi(e),r=!1}else r=bL(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(ja(e),e):(ja(e),null)}return ja(e),(e.flags&128)!==0?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==r&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),LA(e,e.updateQueue),hi(e),null);case 4:return kv(),t===null&&T$(e.stateNode.containerInfo),hi(e),null;case 10:return Qu(e.type),hi(e),null;case 19:if(Ur(Zi),i=e.memoizedState,i===null)return hi(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)mx(i,!1);else{if($i!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=v2(t),o!==null){for(e.flags|=128,mx(i,!1),t=o.updateQueue,e.updateQueue=t,LA(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Yq(n,t),n=n.sibling;return oi(Zi,Zi.current&1|2),bn&&Zu(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&Xa()>w2&&(e.flags|=128,r=!0,mx(i,!1),e.lanes=4194304)}else{if(!r)if(t=v2(o),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,LA(e,t),mx(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!bn)return hi(e),null}else 2*Xa()-i.renderingStartTime>w2&&n!==536870912&&(e.flags|=128,r=!0,mx(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(t=i.last,t!==null?t.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xa(),t.sibling=null,n=Zi.current,oi(Zi,r?n&1|2:n&1),bn&&Zu(e,i.treeForkCount),t):(hi(e),null);case 22:case 23:return ja(e),n$(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?(n&536870912)!==0&&(e.flags&128)===0&&(hi(e),e.subtreeFlags&6&&(e.flags|=8192)):hi(e),n=e.updateQueue,n!==null&&LA(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&Ur(Vh),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Qu(dr),hi(e),null;case 25:return null;case 30:return null}throw Error(Pe(156,e.tag))}function cye(t,e){switch(K4(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Qu(dr),kv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return l2(e),null;case 31:if(e.memoizedState!==null){if(ja(e),e.alternate===null)throw Error(Pe(340));Wh()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(ja(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Pe(340));Wh()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ur(Zi),null;case 4:return kv(),null;case 10:return Qu(e.type),null;case 22:case 23:return ja(e),n$(),t!==null&&Ur(Vh),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Qu(dr),null;case 25:return null;default:return null}}function YY(t,e){switch(K4(e),e.tag){case 3:Qu(dr),kv();break;case 26:case 27:case 5:l2(e);break;case 4:kv();break;case 31:e.memoizedState!==null&&ja(e);break;case 13:ja(e);break;case 19:Ur(Zi);break;case 10:Qu(e.type);break;case 22:case 23:ja(e),n$(),t!==null&&Ur(Vh);break;case 24:Qu(dr)}}function oS(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){i=void 0;var o=n.create,a=n.inst;i=o(),a.destroy=i}n=n.next}while(n!==r)}}catch(s){Vn(e,e.return,s)}}function Bf(t,e,n){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var o=r.next;i=o;do{if((i.tag&t)===t){var a=i.inst,s=a.destroy;if(s!==void 0){a.destroy=void 0,r=e;var l=n,u=s;try{u()}catch(f){Vn(r,l,f)}}}i=i.next}while(i!==o)}}catch(f){Vn(e,e.return,f)}}function KY(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{aY(e,n)}catch(i){Vn(t,t.return,i)}}}function JY(t,e,n){n.props=Yh(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){Vn(t,e,i)}}function Px(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(r){Vn(t,e,r)}}function ql(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){Vn(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){Vn(t,e,r)}else n.current=null}function QY(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){Vn(t,t.return,r)}}function kL(t,e,n){try{var i=t.stateNode;kye(i,t.type,n,e),i[pa]=e}catch(r){Vn(t,t.return,r)}}function eK(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Gf(t.type)||t.tag===4}function IL(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eK(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Gf(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _4(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Yu));else if(i!==4&&(i===27&&Gf(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(_4(t,e,n),t=t.sibling;t!==null;)_4(t,e,n),t=t.sibling}function S2(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&Gf(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(S2(t,e,n),t=t.sibling;t!==null;)S2(t,e,n),t=t.sibling}function tK(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Yr(e,i,n),e[Zr]=t,e[pa]=n}catch(o){Vn(t,t.return,o)}}var Xu=!1,fr=!1,PL=!1,zX=typeof WeakSet=="function"?WeakSet:Set,Nr=null;function fye(t,e){if(t=t.containerInfo,M4=D2,t=Hq(t),W4(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch(_){n=null;break e}var a=0,s=-1,l=-1,u=0,f=0,c=t,p=null;t:for(;;){for(var m;c!==n||r!==0&&c.nodeType!==3||(s=a+r),c!==o||i!==0&&c.nodeType!==3||(l=a+i),c.nodeType===3&&(a+=c.nodeValue.length),(m=c.firstChild)!==null;)p=c,c=m;for(;;){if(c===t)break t;if(p===n&&++u===r&&(s=a),p===o&&++f===i&&(l=a),(m=c.nextSibling)!==null)break;c=p,p=c.parentNode}c=m}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(A4={focusedElem:t,selectionRange:n},D2=!1,Nr=e;Nr!==null;)if(e=Nr,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Nr=t;else for(;Nr!==null;){switch(e=Nr,o=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&o!==null){t=void 0,n=e,r=o.memoizedProps,o=o.memoizedState,i=n.stateNode;try{var g=Yh(n.type,r);t=i.getSnapshotBeforeUpdate(g,o),i.__reactInternalSnapshotBeforeUpdate=t}catch(_){Vn(n,n.return,_)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)R4(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":R4(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(Pe(163))}if(t=e.sibling,t!==null){t.return=e.return,Nr=t;break}Nr=e.return}}function nK(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:ju(t,n),i&4&&oS(5,n);break;case 1:if(ju(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){Vn(n,n.return,a)}else{var r=Yh(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){Vn(n,n.return,a)}}i&64&&KY(n),i&512&&Px(n,n.return);break;case 3:if(ju(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{aY(t,e)}catch(a){Vn(n,n.return,a)}}break;case 27:e===null&&i&4&&tK(n);case 26:case 5:ju(t,n),e===null&&i&4&&QY(n),i&512&&Px(n,n.return);break;case 12:ju(t,n);break;case 31:ju(t,n),i&4&&oK(t,n);break;case 13:ju(t,n),i&4&&aK(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=bye.bind(null,n),Lye(t,n))));break;case 22:if(i=n.memoizedState!==null||Xu,!i){e=e!==null&&e.memoizedState!==null||fr,r=Xu;var o=fr;Xu=i,(fr=e)&&!o?Wu(t,n,(n.subtreeFlags&8772)!==0):ju(t,n),Xu=r,fr=o}break;case 30:break;default:ju(t,n)}}function iK(t){var e=t.alternate;e!==null&&(t.alternate=null,iK(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&F4(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Si=null,fa=!1;function Gu(t,e,n){for(n=n.child;n!==null;)rK(t,e,n),n=n.sibling}function rK(t,e,n){if(qa&&typeof qa.onCommitFiberUnmount=="function")try{qa.onCommitFiberUnmount(Jx,n)}catch(o){}switch(n.tag){case 26:fr||ql(n,e),Gu(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:fr||ql(n,e);var i=Si,r=fa;Gf(n.type)&&(Si=n.stateNode,fa=!1),Gu(t,e,n),Ox(n.stateNode),Si=i,fa=r;break;case 5:fr||ql(n,e);case 6:if(i=Si,r=fa,Si=null,Gu(t,e,n),Si=i,fa=r,Si!==null)if(fa)try{(Si.nodeType===9?Si.body:Si.nodeName==="HTML"?Si.ownerDocument.body:Si).removeChild(n.stateNode)}catch(o){Vn(n,e,o)}else try{Si.removeChild(n.stateNode)}catch(o){Vn(n,e,o)}break;case 18:Si!==null&&(fa?(t=Si,qX(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Fv(t)):qX(Si,n.stateNode));break;case 4:i=Si,r=fa,Si=n.stateNode.containerInfo,fa=!0,Gu(t,e,n),Si=i,fa=r;break;case 0:case 11:case 14:case 15:Bf(2,n,e),fr||Bf(4,n,e),Gu(t,e,n);break;case 1:fr||(ql(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&JY(n,e,i)),Gu(t,e,n);break;case 21:Gu(t,e,n);break;case 22:fr=(i=fr)||n.memoizedState!==null,Gu(t,e,n),fr=i;break;default:Gu(t,e,n)}}function oK(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Fv(t)}catch(n){Vn(e,e.return,n)}}}function aK(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Fv(t)}catch(n){Vn(e,e.return,n)}}function dye(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new zX),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new zX),e;default:throw Error(Pe(435,t.tag))}}function $A(t,e){var n=dye(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var r=xye.bind(null,t,i);i.then(r,r)}})}function ua(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 27:if(Gf(s.type)){Si=s.stateNode,fa=!1;break e}break;case 5:Si=s.stateNode,fa=!1;break e;case 3:case 4:Si=s.stateNode.containerInfo,fa=!0;break e}s=s.return}if(Si===null)throw Error(Pe(160));rK(o,a,r),Si=null,fa=!1,o=r.alternate,o!==null&&(o.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)sK(e,t),e=e.sibling}var gl=null;function sK(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ua(e,t),ca(t),i&4&&(Bf(3,t,t.return),oS(3,t),Bf(5,t,t.return));break;case 1:ua(e,t),ca(t),i&512&&(fr||n===null||ql(n,n.return)),i&64&&Xu&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=gl;if(ua(e,t),ca(t),i&512&&(fr||n===null||ql(n,n.return)),i&4){var o=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":o=r.getElementsByTagName("title")[0],(!o||o[tS]||o[Zr]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=r.createElement(i),r.head.insertBefore(o,r.querySelector("head > title"))),Yr(o,i,n),o[Zr]=t,Or(o),i=o;break e;case"link":var a=nq("link","href",r).get(i+(n.href||""));if(a){for(var s=0;s<a.length;s++)if(o=a[s],o.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&o.getAttribute("rel")===(n.rel==null?null:n.rel)&&o.getAttribute("title")===(n.title==null?null:n.title)&&o.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(s,1);break t}}o=r.createElement(i),Yr(o,i,n),r.head.appendChild(o);break;case"meta":if(a=nq("meta","content",r).get(i+(n.content||""))){for(s=0;s<a.length;s++)if(o=a[s],o.getAttribute("content")===(n.content==null?null:""+n.content)&&o.getAttribute("name")===(n.name==null?null:n.name)&&o.getAttribute("property")===(n.property==null?null:n.property)&&o.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(s,1);break t}}o=r.createElement(i),Yr(o,i,n),r.head.appendChild(o);break;default:throw Error(Pe(468,i))}o[Zr]=t,Or(o),i=o}t.stateNode=i}else iq(r,t.type,t.stateNode);else t.stateNode=tq(r,i,t.memoizedProps);else o!==i?(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,i===null?iq(r,t.type,t.stateNode):tq(r,i,t.memoizedProps)):i===null&&t.stateNode!==null&&kL(t,t.memoizedProps,n.memoizedProps)}break;case 27:ua(e,t),ca(t),i&512&&(fr||n===null||ql(n,n.return)),n!==null&&i&4&&kL(t,t.memoizedProps,n.memoizedProps);break;case 5:if(ua(e,t),ca(t),i&512&&(fr||n===null||ql(n,n.return)),t.flags&32){r=t.stateNode;try{Pv(r,"")}catch(g){Vn(t,t.return,g)}}i&4&&t.stateNode!=null&&(r=t.memoizedProps,kL(t,r,n!==null?n.memoizedProps:r)),i&1024&&(PL=!0);break;case 6:if(ua(e,t),ca(t),i&4){if(t.stateNode===null)throw Error(Pe(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(g){Vn(t,t.return,g)}}break;case 3:if(i2=null,r=gl,gl=k2(e.containerInfo),ua(e,t),gl=r,ca(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fv(e.containerInfo)}catch(g){Vn(t,t.return,g)}PL&&(PL=!1,lK(t));break;case 4:i=gl,gl=k2(t.stateNode.containerInfo),ua(e,t),ca(t),gl=i;break;case 12:ua(e,t),ca(t);break;case 31:ua(e,t),ca(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,$A(t,i)));break;case 13:ua(e,t),ca(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(W2=Xa()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,$A(t,i)));break;case 22:r=t.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Xu,f=fr;if(Xu=u||r,fr=f||l,ua(e,t),fr=f,Xu=u,ca(t),i&8192)e:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||l||Xu||fr||Fh(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){l=n=e;try{if(o=l.stateNode,r)a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{s=l.stateNode;var c=l.memoizedProps.style,p=c!=null&&c.hasOwnProperty("display")?c.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(g){Vn(l,l.return,g)}}}else if(e.tag===6){if(n===null){l=e;try{l.stateNode.nodeValue=r?"":l.memoizedProps}catch(g){Vn(l,l.return,g)}}}else if(e.tag===18){if(n===null){l=e;try{var m=l.stateNode;r?YX(m,!0):YX(l.stateNode,!1)}catch(g){Vn(l,l.return,g)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,$A(t,n))));break;case 19:ua(e,t),ca(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,$A(t,i)));break;case 30:break;case 21:break;default:ua(e,t),ca(t)}}function ca(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(eK(i)){n=i;break}i=i.return}if(n==null)throw Error(Pe(160));switch(n.tag){case 27:var r=n.stateNode,o=IL(t);S2(t,o,r);break;case 5:var a=n.stateNode;n.flags&32&&(Pv(a,""),n.flags&=-33);var s=IL(t);S2(t,s,a);break;case 3:case 4:var l=n.stateNode.containerInfo,u=IL(t);_4(t,u,l);break;default:throw Error(Pe(161))}}catch(f){Vn(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function lK(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;lK(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function ju(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)nK(t,e.alternate,e),e=e.sibling}function Fh(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Bf(4,e,e.return),Fh(e);break;case 1:ql(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&JY(e,e.return,n),Fh(e);break;case 27:Ox(e.stateNode);case 26:case 5:ql(e,e.return),Fh(e);break;case 22:e.memoizedState===null&&Fh(e);break;case 30:Fh(e);break;default:Fh(e)}t=t.sibling}}function Wu(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,r=t,o=e,a=o.flags;switch(o.tag){case 0:case 11:case 15:Wu(r,o,n),oS(4,o);break;case 1:if(Wu(r,o,n),i=o,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(u){Vn(i,i.return,u)}if(i=o,r=i.updateQueue,r!==null){var s=i.stateNode;try{var l=r.shared.hiddenCallbacks;if(l!==null)for(r.shared.hiddenCallbacks=null,r=0;r<l.length;r++)oY(l[r],s)}catch(u){Vn(i,i.return,u)}}n&&a&64&&KY(o),Px(o,o.return);break;case 27:tK(o);case 26:case 5:Wu(r,o,n),n&&i===null&&a&4&&QY(o),Px(o,o.return);break;case 12:Wu(r,o,n);break;case 31:Wu(r,o,n),n&&a&4&&oK(r,o);break;case 13:Wu(r,o,n),n&&a&4&&aK(r,o);break;case 22:o.memoizedState===null&&Wu(r,o,n),Px(o,o.return);break;case 30:break;default:Wu(r,o,n)}e=e.sibling}}function y$(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&iS(n))}function _$(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&iS(t))}function ml(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)uK(t,e,n,i),e=e.sibling}function uK(t,e,n,i){var r=e.flags;switch(e.tag){case 0:case 11:case 15:ml(t,e,n,i),r&2048&&oS(9,e);break;case 1:ml(t,e,n,i);break;case 3:ml(t,e,n,i),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&iS(t)));break;case 12:if(r&2048){ml(t,e,n,i),t=e.stateNode;try{var o=e.memoizedProps,a=o.id,s=o.onPostCommit;typeof s=="function"&&s(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(l){Vn(e,e.return,l)}}else ml(t,e,n,i);break;case 31:ml(t,e,n,i);break;case 13:ml(t,e,n,i);break;case 23:break;case 22:o=e.stateNode,a=e.alternate,e.memoizedState!==null?o._visibility&2?ml(t,e,n,i):Dx(t,e):o._visibility&2?ml(t,e,n,i):(o._visibility|=2,uv(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),r&2048&&y$(a,e);break;case 24:ml(t,e,n,i),r&2048&&_$(e.alternate,e);break;default:ml(t,e,n,i)}}function uv(t,e,n,i,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var o=t,a=e,s=n,l=i,u=a.flags;switch(a.tag){case 0:case 11:case 15:uv(o,a,s,l,r),oS(8,a);break;case 23:break;case 22:var f=a.stateNode;a.memoizedState!==null?f._visibility&2?uv(o,a,s,l,r):Dx(o,a):(f._visibility|=2,uv(o,a,s,l,r)),r&&u&2048&&y$(a.alternate,a);break;case 24:uv(o,a,s,l,r),r&&u&2048&&_$(a.alternate,a);break;default:uv(o,a,s,l,r)}e=e.sibling}}function Dx(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,r=i.flags;switch(i.tag){case 22:Dx(n,i),r&2048&&y$(i.alternate,i);break;case 24:Dx(n,i),r&2048&&_$(i.alternate,i);break;default:Dx(n,i)}e=e.sibling}}var wx=8192;function lv(t,e,n){if(t.subtreeFlags&wx)for(t=t.child;t!==null;)cK(t,e,n),t=t.sibling}function cK(t,e,n){switch(t.tag){case 26:lv(t,e,n),t.flags&wx&&t.memoizedState!==null&&Yye(n,gl,t.memoizedState,t.memoizedProps);break;case 5:lv(t,e,n);break;case 3:case 4:var i=gl;gl=k2(t.stateNode.containerInfo),lv(t,e,n),gl=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=wx,wx=16777216,lv(t,e,n),wx=i):lv(t,e,n));break;default:lv(t,e,n)}}function fK(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function gx(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Nr=i,hK(i,t)}fK(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)dK(t),t=t.sibling}function dK(t){switch(t.tag){case 0:case 11:case 15:gx(t),t.flags&2048&&Bf(9,t,t.return);break;case 3:gx(t);break;case 12:gx(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,t2(t)):gx(t);break;default:gx(t)}}function t2(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];Nr=i,hK(i,t)}fK(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Bf(8,e,e.return),t2(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,t2(e));break;default:t2(e)}t=t.sibling}}function hK(t,e){for(;Nr!==null;){var n=Nr;switch(n.tag){case 0:case 11:case 15:Bf(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:iS(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Nr=i;else e:for(n=t;Nr!==null;){i=Nr;var r=i.sibling,o=i.return;if(iK(i),i===n){Nr=null;break e}if(r!==null){r.return=o,Nr=r;break e}Nr=o}}}var hye={getCacheForType:function(t){var e=qr(dr),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return qr(dr).controller.signal}},pye=typeof WeakMap=="function"?WeakMap:Map,kn=0,Jn=null,mn=null,vn=0,Hn=0,Ga=null,Af=!1,jv=!1,b$=!1,oc=0,$i=0,Hf=0,jh=0,x$=0,Za=0,Ov=0,zx=null,da=null,b4=!1,W2=0,pK=0,w2=1/0,T2=null,zf=null,wr=0,Nf=null,Uv=null,ec=0,x4=0,S4=null,mK=null,Nx=0,w4=null;function Ka(){return(kn&2)!==0&&vn!==0?vn&-vn:Ut.T!==null?w$():Tq()}function gK(){if(Za===0)if((vn&536870912)===0||bn){var t=RA;RA<<=1,(RA&3932160)===0&&(RA=262144),Za=t}else Za=536870912;return t=Qa.current,t!==null&&(t.flags|=32),Za}function ha(t,e,n){(t===Jn&&(Hn===2||Hn===9)||t.cancelPendingCommit!==null)&&(Lv(t,0),Cf(t,vn,Za,!1)),eS(t,n),((kn&2)===0||t!==Jn)&&(t===Jn&&((kn&2)===0&&(jh|=n),$i===4&&Cf(t,vn,Za,!1)),Jl(t))}function vK(t,e,n){if((kn&6)!==0)throw Error(Pe(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Qx(t,e),r=i?vye(t,e):DL(t,e,!0),o=i;do{if(r===0){jv&&!i&&Cf(t,e,0,!1);break}else{if(n=t.current.alternate,o&&!mye(n)){r=DL(t,e,!1),o=!1;continue}if(r===2){if(o=e,t.errorRecoveryDisabledLanes&o)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var s=t;r=zx;var l=s.current.memoizedState.isDehydrated;if(l&&(Lv(s,a).flags|=256),a=DL(s,a,!1),a!==2){if(b$&&!l){s.errorRecoveryDisabledLanes|=o,jh|=o,r=4;break e}o=da,da=r,o!==null&&(da===null?da=o:da.push.apply(da,o))}r=a}if(o=!1,r!==2)continue}}if(r===1){Lv(t,0),Cf(t,e,0,!0);break}e:{switch(i=t,o=r,o){case 0:case 1:throw Error(Pe(345));case 4:if((e&4194048)!==e)break;case 6:Cf(i,e,Za,!Af);break e;case 2:da=null;break;case 3:case 5:break;default:throw Error(Pe(329))}if((e&62914560)===e&&(r=W2+300-Xa(),10<r)){if(Cf(i,e,Za,!Af),N2(i,0,!0)!==0)break e;ec=e,i.timeoutHandle=UK(NX.bind(null,i,n,da,T2,b4,e,Za,jh,Ov,Af,o,"Throttled",-0,0),r);break e}NX(i,n,da,T2,b4,e,Za,jh,Ov,Af,o,null,-0,0)}}break}while(!0);Jl(t)}function NX(t,e,n,i,r,o,a,s,l,u,f,c,p,m){if(t.timeoutHandle=-1,c=e.subtreeFlags,c&8192||(c&16785408)===16785408){c={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yu},cK(e,o,c);var g=(o&62914560)===o?W2-Xa():(o&4194048)===o?pK-Xa():0;if(g=Kye(c,g),g!==null){ec=o,t.cancelPendingCommit=g(UX.bind(null,t,e,o,n,i,r,a,s,l,f,c,null,p,m)),Cf(t,o,a,!u);return}}UX(t,e,o,n,i,r,a,s,l)}function mye(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!Ja(o(),r))return!1}catch(a){return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Cf(t,e,n,i){e&=~x$,e&=~jh,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var r=e;0<r;){var o=31-Ya(r),a=1<<o;i[o]=-1,r&=~a}n!==0&&xq(t,n,e)}function Z2(){return(kn&6)===0?(aS(0,!1),!1):!0}function S$(){if(mn!==null){if(Hn===0)var t=mn.return;else t=mn,Ku=tp=null,s$(t),Av=null,Vx=0,t=mn;for(;t!==null;)YY(t.alternate,t),t=t.return;mn=null}}function Lv(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Dye(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ec=0,S$(),Jn=t,mn=n=Ju(t.current,null),vn=e,Hn=0,Ga=null,Af=!1,jv=Qx(t,e),b$=!1,Ov=Za=x$=jh=Hf=$i=0,da=zx=null,b4=!1,(e&8)!==0&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-Ya(i),o=1<<r;e|=t[r],i&=~o}return oc=e,$2(),n}function yK(t,e){nn=null,Ut.H=jx,e===Gv||e===B2?(e=hX(),Hn=3):e===e$?(e=hX(),Hn=4):Hn=e===g$?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Ga=e,mn===null&&($i=1,b2(t,ks(e,t.current)))}function _K(){var t=Qa.current;return t===null?!0:(vn&4194048)===vn?Ps===null:(vn&62914560)===vn||(vn&536870912)!==0?t===Ps:!1}function bK(){var t=Ut.H;return Ut.H=jx,t===null?jx:t}function xK(){var t=Ut.A;return Ut.A=hye,t}function E2(){$i=4,Af||(vn&4194048)!==vn&&Qa.current!==null||(jv=!0),(Hf&134217727)===0&&(jh&134217727)===0||Jn===null||Cf(Jn,vn,Za,!1)}function DL(t,e,n){var i=kn;kn|=2;var r=bK(),o=xK();(Jn!==t||vn!==e)&&(T2=null,Lv(t,e)),e=!1;var a=$i;e:do try{if(Hn!==0&&mn!==null){var s=mn,l=Ga;switch(Hn){case 8:S$(),a=6;break e;case 3:case 2:case 9:case 6:Qa.current===null&&(e=!0);var u=Hn;if(Hn=0,Ga=null,Sv(t,s,l,u),n&&jv){a=0;break e}break;default:u=Hn,Hn=0,Ga=null,Sv(t,s,l,u)}}gye(),a=$i;break}catch(f){yK(t,f)}while(!0);return e&&t.shellSuspendCounter++,Ku=tp=null,kn=i,Ut.H=r,Ut.A=o,mn===null&&(Jn=null,vn=0,$2()),a}function gye(){for(;mn!==null;)SK(mn)}function vye(t,e){var n=kn;kn|=2;var i=bK(),r=xK();Jn!==t||vn!==e?(T2=null,w2=Xa()+500,Lv(t,e)):jv=Qx(t,e);e:do try{if(Hn!==0&&mn!==null){e=mn;var o=Ga;t:switch(Hn){case 1:Hn=0,Ga=null,Sv(t,e,o,1);break;case 2:case 9:if(dX(o)){Hn=0,Ga=null,OX(e);break}e=function(){Hn!==2&&Hn!==9||Jn!==t||(Hn=7),Jl(t)},o.then(e,e);break e;case 3:Hn=7;break e;case 4:Hn=5;break e;case 7:dX(o)?(Hn=0,Ga=null,OX(e)):(Hn=0,Ga=null,Sv(t,e,o,7));break;case 5:var a=null;switch(mn.tag){case 26:a=mn.memoizedState;case 5:case 27:var s=mn;if(a?HK(a):s.stateNode.complete){Hn=0,Ga=null;var l=s.sibling;if(l!==null)mn=l;else{var u=s.return;u!==null?(mn=u,X2(u)):mn=null}break t}}Hn=0,Ga=null,Sv(t,e,o,5);break;case 6:Hn=0,Ga=null,Sv(t,e,o,6);break;case 8:S$(),$i=6;break e;default:throw Error(Pe(462))}}yye();break}catch(f){yK(t,f)}while(!0);return Ku=tp=null,Ut.H=i,Ut.A=r,kn=n,mn!==null?0:(Jn=null,vn=0,$2(),$i)}function yye(){for(;mn!==null&&!Bve();)SK(mn)}function SK(t){var e=qY(t.alternate,t,oc);t.memoizedProps=t.pendingProps,e===null?X2(t):mn=e}function OX(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=RX(n,e,e.pendingProps,e.type,void 0,vn);break;case 11:e=RX(n,e,e.pendingProps,e.type.render,e.ref,vn);break;case 5:s$(e);default:YY(n,e),e=mn=Yq(e,oc),e=qY(n,e,oc)}t.memoizedProps=t.pendingProps,e===null?X2(t):mn=e}function Sv(t,e,n,i){Ku=tp=null,s$(e),Av=null,Vx=0;var r=e.return;try{if(aye(t,r,e,n,vn)){$i=1,b2(t,ks(n,t.current)),mn=null;return}}catch(o){if(r!==null)throw mn=r,o;$i=1,b2(t,ks(n,t.current)),mn=null;return}e.flags&32768?(bn||i===1?t=!0:jv||(vn&536870912)!==0?t=!1:(Af=t=!0,(i===2||i===9||i===3||i===6)&&(i=Qa.current,i!==null&&i.tag===13&&(i.flags|=16384))),wK(e,t)):X2(e)}function X2(t){var e=t;do{if((e.flags&32768)!==0){wK(e,Af);return}t=e.return;var n=uye(e.alternate,e,oc);if(n!==null){mn=n;return}if(e=e.sibling,e!==null){mn=e;return}mn=e=t}while(e!==null);$i===0&&($i=5)}function wK(t,e){do{var n=cye(t.alternate,t);if(n!==null){n.flags&=32767,mn=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){mn=t;return}mn=t=n}while(t!==null);$i=6,mn=null}function UX(t,e,n,i,r,o,a,s,l){t.cancelPendingCommit=null;do q2();while(wr!==0);if((kn&6)!==0)throw Error(Pe(327));if(e!==null){if(e===t.current)throw Error(Pe(177));if(o=e.lanes|e.childLanes,o|=Z4,Kve(t,n,o,a,s,l),t===Jn&&(mn=Jn=null,vn=0),Uv=e,Nf=t,ec=n,x4=o,S4=r,mK=i,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Sye(u2,function(){return CK(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||i){i=Ut.T,Ut.T=null,r=In.p,In.p=2,a=kn,kn|=4;try{fye(t,e,n)}finally{kn=a,In.p=r,Ut.T=i}}wr=1,TK(),EK(),MK()}}function TK(){if(wr===1){wr=0;var t=Nf,e=Uv,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=Ut.T,Ut.T=null;var i=In.p;In.p=2;var r=kn;kn|=4;try{sK(e,t);var o=A4,a=Hq(t.containerInfo),s=o.focusedElem,l=o.selectionRange;if(a!==s&&s&&s.ownerDocument&&Bq(s.ownerDocument.documentElement,s)){if(l!==null&&W4(s)){var u=l.start,f=l.end;if(f===void 0&&(f=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(f,s.value.length);else{var c=s.ownerDocument||document,p=c&&c.defaultView||window;if(p.getSelection){var m=p.getSelection(),g=s.textContent.length,_=Math.min(l.start,g),b=l.end===void 0?_:Math.min(l.end,g);!m.extend&&_>b&&(a=b,b=_,_=a);var y=oX(s,_),x=oX(s,b);if(y&&x&&(m.rangeCount!==1||m.anchorNode!==y.node||m.anchorOffset!==y.offset||m.focusNode!==x.node||m.focusOffset!==x.offset)){var T=c.createRange();T.setStart(y.node,y.offset),m.removeAllRanges(),_>b?(m.addRange(T),m.extend(x.node,x.offset)):(T.setEnd(x.node,x.offset),m.addRange(T))}}}}for(c=[],m=s;m=m.parentNode;)m.nodeType===1&&c.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<c.length;s++){var w=c[s];w.element.scrollLeft=w.left,w.element.scrollTop=w.top}}D2=!!M4,A4=M4=null}finally{kn=r,In.p=i,Ut.T=n}}t.current=e,wr=2}}function EK(){if(wr===2){wr=0;var t=Nf,e=Uv,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Ut.T,Ut.T=null;var i=In.p;In.p=2;var r=kn;kn|=4;try{nK(t,e.alternate,e)}finally{kn=r,In.p=i,Ut.T=n}}wr=3}}function MK(){if(wr===4||wr===3){wr=0,Hve();var t=Nf,e=Uv,n=ec,i=mK;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?wr=5:(wr=0,Uv=Nf=null,AK(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(zf=null),$4(n),e=e.stateNode,qa&&typeof qa.onCommitFiberRoot=="function")try{qa.onCommitFiberRoot(Jx,e,void 0,(e.current.flags&128)===128)}catch(l){}if(i!==null){e=Ut.T,r=In.p,In.p=2,Ut.T=null;try{for(var o=t.onRecoverableError,a=0;a<i.length;a++){var s=i[a];o(s.value,{componentStack:s.stack})}}finally{Ut.T=e,In.p=r}}(ec&3)!==0&&q2(),Jl(t),r=t.pendingLanes,(n&261930)!==0&&(r&42)!==0?t===w4?Nx++:(Nx=0,w4=t):Nx=0,aS(0,!1)}}function AK(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,iS(e)))}function q2(){return TK(),EK(),MK(),CK()}function CK(){if(wr!==5)return!1;var t=Nf,e=x4;x4=0;var n=$4(ec),i=Ut.T,r=In.p;try{In.p=32>n?32:n,Ut.T=null,n=S4,S4=null;var o=Nf,a=ec;if(wr=0,Uv=Nf=null,ec=0,(kn&6)!==0)throw Error(Pe(331));var s=kn;if(kn|=4,dK(o.current),uK(o,o.current,a,n),kn=s,aS(0,!1),qa&&typeof qa.onPostCommitFiberRoot=="function")try{qa.onPostCommitFiberRoot(Jx,o)}catch(l){}return!0}finally{In.p=r,Ut.T=i,AK(t,e)}}function LX(t,e,n){e=ks(n,e),e=g4(t.stateNode,e,2),t=Df(t,e,2),t!==null&&(eS(t,2),Jl(t))}function Vn(t,e,n){if(t.tag===3)LX(t,t,n);else for(;e!==null;){if(e.tag===3){LX(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(zf===null||!zf.has(i))){t=ks(n,t),n=VY(2),i=Df(e,n,2),i!==null&&(GY(n,i,e,t),eS(i,2),Jl(i));break}}e=e.return}}function zL(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new pye;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(b$=!0,r.add(n),t=_ye.bind(null,t,e,n),e.then(t,t))}function _ye(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Jn===t&&(vn&n)===n&&($i===4||$i===3&&(vn&62914560)===vn&&300>Xa()-W2?(kn&2)===0&&Lv(t,0):x$|=n,Ov===vn&&(Ov=0)),Jl(t)}function RK(t,e){e===0&&(e=bq()),t=ep(t,e),t!==null&&(eS(t,e),Jl(t))}function bye(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),RK(t,n)}function xye(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(Pe(314))}i!==null&&i.delete(e),RK(t,n)}function Sye(t,e){return U4(t,e)}var M2=null,cv=null,T4=!1,A2=!1,NL=!1,Rf=0;function Jl(t){t!==cv&&t.next===null&&(cv===null?M2=cv=t:cv=cv.next=t),A2=!0,T4||(T4=!0,Tye())}function aS(t,e){if(!NL&&A2){NL=!0;do for(var n=!1,i=M2;i!==null;){if(!e)if(t!==0){var r=i.pendingLanes;if(r===0)var o=0;else{var a=i.suspendedLanes,s=i.pingedLanes;o=(1<<31-Ya(42|t)+1)-1,o&=r&~(a&~s),o=o&201326741?o&201326741|1:o?o|2:0}o!==0&&(n=!0,$X(i,o))}else o=vn,o=N2(i,i===Jn?o:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(o&3)===0||Qx(i,o)||(n=!0,$X(i,o));i=i.next}while(n);NL=!1}}function wye(){kK()}function kK(){A2=T4=!1;var t=0;Rf!==0&&Pye()&&(t=Rf);for(var e=Xa(),n=null,i=M2;i!==null;){var r=i.next,o=IK(i,e);o===0?(i.next=null,n===null?M2=r:n.next=r,r===null&&(cv=n)):(n=i,(t!==0||(o&3)!==0)&&(A2=!0)),i=r}wr!==0&&wr!==5||aS(t,!1),Rf!==0&&(Rf=0)}function IK(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes&-62914561;0<o;){var a=31-Ya(o),s=1<<a,l=r[a];l===-1?((s&n)===0||(s&i)!==0)&&(r[a]=Yve(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}if(e=Jn,n=vn,n=N2(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(Hn===2||Hn===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&cL(i),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Qx(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&cL(i),$4(n)){case 2:case 8:n=yq;break;case 32:n=u2;break;case 268435456:n=_q;break;default:n=u2}return i=PK.bind(null,t),n=U4(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&cL(i),t.callbackPriority=2,t.callbackNode=null,2}function PK(t,e){if(wr!==0&&wr!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(q2()&&t.callbackNode!==n)return null;var i=vn;return i=N2(t,t===Jn?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(vK(t,i,e),IK(t,Xa()),t.callbackNode!=null&&t.callbackNode===n?PK.bind(null,t):null)}function $X(t,e){if(q2())return null;vK(t,e,!0)}function Tye(){zye(function(){(kn&6)!==0?U4(vq,wye):kK()})}function w$(){if(Rf===0){var t=Dv;t===0&&(t=CA,CA<<=1,(CA&261888)===0&&(CA=256)),Rf=t}return Rf}function FX(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:WA(""+t)}function BX(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Eye(t,e,n,i,r){if(e==="submit"&&n&&n.stateNode===r){var o=FX((r[pa]||null).action),a=i.submitter;a&&(e=(e=a[pa]||null)?FX(e.formAction):a.getAttribute("formAction"),e!==null&&(o=e,a=null));var s=new O2("action","action",null,i,r);t.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Rf!==0){var l=a?BX(r,a):new FormData(r);p4(n,{pending:!0,data:l,method:r.method,action:o},null,l)}}else typeof o=="function"&&(s.preventDefault(),l=a?BX(r,a):new FormData(r),p4(n,{pending:!0,data:l,method:r.method,action:o},o,l))},currentTarget:r}]})}}for(FA=0;FA<n4.length;FA++)BA=n4[FA],HX=BA.toLowerCase(),VX=BA[0].toUpperCase()+BA.slice(1),vl(HX,"on"+VX);var BA,HX,VX,FA;vl(Gq,"onAnimationEnd");vl(jq,"onAnimationIteration");vl(Wq,"onAnimationStart");vl("dblclick","onDoubleClick");vl("focusin","onFocus");vl("focusout","onBlur");vl(V0e,"onTransitionRun");vl(G0e,"onTransitionStart");vl(j0e,"onTransitionCancel");vl(Zq,"onTransitionEnd");Iv("onMouseEnter",["mouseout","mouseover"]);Iv("onMouseLeave",["mouseout","mouseover"]);Iv("onPointerEnter",["pointerout","pointerover"]);Iv("onPointerLeave",["pointerout","pointerover"]);Kh("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kh("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kh("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kh("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kh("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kh("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wx="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mye=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wx));function DK(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;o=s,r.currentTarget=u;try{o(r)}catch(f){f2(f)}r.currentTarget=null,o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;o=s,r.currentTarget=u;try{o(r)}catch(f){f2(f)}r.currentTarget=null,o=l}}}}function pn(t,e){var n=e[XL];n===void 0&&(n=e[XL]=new Set);var i=t+"__bubble";n.has(i)||(zK(e,t,2,!1),n.add(i))}function OL(t,e,n){var i=0;e&&(i|=4),zK(n,t,i,e)}var HA="_reactListening"+Math.random().toString(36).slice(2);function T$(t){if(!t[HA]){t[HA]=!0,Eq.forEach(function(n){n!=="selectionchange"&&(Mye.has(n)||OL(n,!1,t),OL(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[HA]||(e[HA]=!0,OL("selectionchange",!1,e))}}function zK(t,e,n,i){switch(ZK(e)){case 2:var r=e_e;break;case 8:r=t_e;break;default:r=C$}n=r.bind(null,e,n,t),r=void 0,!QL||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function UL(t,e,n,i,r){var o=i;if((e&1)===0&&(e&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&a.stateNode.containerInfo===r)return;a=a.return}for(;s!==null;){if(a=hv(s),a===null)return;if(l=a.tag,l===5||l===6||l===26||l===27){i=o=a;continue e}s=s.parentNode}}i=i.return}Dq(function(){var u=o,f=H4(n),c=[];e:{var p=Xq.get(t);if(p!==void 0){var m=O2,g=t;switch(t){case"keypress":if(XA(n)===0)break e;case"keydown":case"keyup":m=x0e;break;case"focusin":g="focus",m=mL;break;case"focusout":g="blur",m=mL;break;case"beforeblur":case"afterblur":m=mL;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=YZ;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=u0e;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=T0e;break;case Gq:case jq:case Wq:m=d0e;break;case Zq:m=M0e;break;case"scroll":case"scrollend":m=s0e;break;case"wheel":m=C0e;break;case"copy":case"cut":case"paste":m=p0e;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=JZ;break;case"toggle":case"beforetoggle":m=k0e}var _=(e&4)!==0,b=!_&&(t==="scroll"||t==="scrollend"),y=_?p!==null?p+"Capture":null:p;_=[];for(var x=u,T;x!==null;){var w=x;if(T=w.stateNode,w=w.tag,w!==5&&w!==26&&w!==27||T===null||y===null||(w=Lx(x,y),w!=null&&_.push(Zx(x,w,T))),b)break;x=x.return}0<_.length&&(p=new m(p,g,null,n,f),c.push({event:p,listeners:_}))}}if((e&7)===0){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==JL&&(g=n.relatedTarget||n.fromElement)&&(hv(g)||g[Bv]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?hv(g):null,g!==null&&(b=Kx(g),_=g.tag,g!==b||_!==5&&_!==27&&_!==6)&&(g=null)):(m=null,g=u),m!==g)){if(_=YZ,w="onMouseLeave",y="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(_=JZ,w="onPointerLeave",y="onPointerEnter",x="pointer"),b=m==null?p:xx(m),T=g==null?p:xx(g),p=new _(w,x+"leave",m,n,f),p.target=b,p.relatedTarget=T,w=null,hv(f)===u&&(_=new _(y,x+"enter",g,n,f),_.target=T,_.relatedTarget=b,w=_),b=w,m&&g)t:{for(_=Aye,y=m,x=g,T=0,w=y;w;w=_(w))T++;w=0;for(var E=x;E;E=_(E))w++;for(;0<T-w;)y=_(y),T--;for(;0<w-T;)x=_(x),w--;for(;T--;){if(y===x||x!==null&&y===x.alternate){_=y;break t}y=_(y),x=_(x)}_=null}else _=null;m!==null&&GX(c,p,m,_,!1),g!==null&&b!==null&&GX(c,b,g,_,!0)}}e:{if(p=u?xx(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var A=nX;else if(tX(p))if($q)A=F0e;else{A=L0e;var R=U0e}else m=p.nodeName,!m||m.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?u&&B4(u.elementType)&&(A=nX):A=$0e;if(A&&(A=A(t,u))){Lq(c,A,n,f);break e}R&&R(t,p,u),t==="focusout"&&u&&p.type==="number"&&u.memoizedProps.value!=null&&KL(p,"number",p.value)}switch(R=u?xx(u):window,t){case"focusin":(tX(R)||R.contentEditable==="true")&&(gv=R,e4=u,Mx=null);break;case"focusout":Mx=e4=gv=null;break;case"mousedown":t4=!0;break;case"contextmenu":case"mouseup":case"dragend":t4=!1,aX(c,n,f);break;case"selectionchange":if(H0e)break;case"keydown":case"keyup":aX(c,n,f)}var M;if(j4)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else mv?Oq(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Nq&&n.locale!=="ko"&&(mv||I!=="onCompositionStart"?I==="onCompositionEnd"&&mv&&(M=zq()):(Mf=f,V4="value"in Mf?Mf.value:Mf.textContent,mv=!0)),R=C2(u,I),0<R.length&&(I=new KZ(I,t,null,n,f),c.push({event:I,listeners:R}),M?I.data=M:(M=Uq(n),M!==null&&(I.data=M)))),(M=P0e?D0e(t,n):z0e(t,n))&&(I=C2(u,"onBeforeInput"),0<I.length&&(R=new KZ("onBeforeInput","beforeinput",null,n,f),c.push({event:R,listeners:I}),R.data=M)),Eye(c,t,u,n,f)}DK(c,e)})}function Zx(t,e,n){return{instance:t,listener:e,currentTarget:n}}function C2(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||o===null||(r=Lx(t,n),r!=null&&i.unshift(Zx(t,r,o)),r=Lx(t,e),r!=null&&i.push(Zx(t,r,o))),t.tag===3)return i;t=t.return}return[]}function Aye(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function GX(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(s=s.tag,l!==null&&l===i)break;s!==5&&s!==26&&s!==27||u===null||(l=u,r?(u=Lx(n,o),u!=null&&a.unshift(Zx(n,u,l))):r||(u=Lx(n,o),u!=null&&a.push(Zx(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Cye=/\r\n?/g,Rye=/\u0000|\uFFFD/g;function jX(t){return(typeof t=="string"?t:""+t).replace(Cye,`
`).replace(Rye,"")}function NK(t,e){return e=jX(e),jX(t)===e}function Xn(t,e,n,i,r,o){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||Pv(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&Pv(t,""+i);break;case"className":IA(t,"class",i);break;case"tabIndex":IA(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":IA(t,n,i);break;case"style":Pq(t,i,o);break;case"data":if(e!=="object"){IA(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=WA(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof o=="function"&&(n==="formAction"?(e!=="input"&&Xn(t,e,"name",r.name,r,null),Xn(t,e,"formEncType",r.formEncType,r,null),Xn(t,e,"formMethod",r.formMethod,r,null),Xn(t,e,"formTarget",r.formTarget,r,null)):(Xn(t,e,"encType",r.encType,r,null),Xn(t,e,"method",r.method,r,null),Xn(t,e,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=WA(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=Yu);break;case"onScroll":i!=null&&pn("scroll",t);break;case"onScrollEnd":i!=null&&pn("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Pe(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(Pe(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=WA(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":pn("beforetoggle",t),pn("toggle",t),jA(t,"popover",i);break;case"xlinkActuate":Hu(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Hu(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Hu(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Hu(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Hu(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Hu(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Hu(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Hu(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Hu(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":jA(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=o0e.get(n)||n,jA(t,n,i))}}function E4(t,e,n,i,r,o){switch(n){case"style":Pq(t,i,o);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(Pe(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(Pe(60));t.innerHTML=n}}break;case"children":typeof i=="string"?Pv(t,i):(typeof i=="number"||typeof i=="bigint")&&Pv(t,""+i);break;case"onScroll":i!=null&&pn("scroll",t);break;case"onScrollEnd":i!=null&&pn("scrollend",t);break;case"onClick":i!=null&&(t.onclick=Yu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mq.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),o=t[pa]||null,o=o!=null?o[n]:null,typeof o=="function"&&t.removeEventListener(e,o,r),typeof i=="function")){typeof o!="function"&&o!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,r);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):jA(t,n,i)}}}function Yr(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":pn("error",t),pn("load",t);var i=!1,r=!1,o;for(o in n)if(n.hasOwnProperty(o)){var a=n[o];if(a!=null)switch(o){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(Pe(137,e));default:Xn(t,e,o,a,n,null)}}r&&Xn(t,e,"srcSet",n.srcSet,n,null),i&&Xn(t,e,"src",n.src,n,null);return;case"input":pn("invalid",t);var s=o=a=r=null,l=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var f=n[i];if(f!=null)switch(i){case"name":r=f;break;case"type":a=f;break;case"checked":l=f;break;case"defaultChecked":u=f;break;case"value":o=f;break;case"defaultValue":s=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(Pe(137,e));break;default:Xn(t,e,i,f,n,null)}}Rq(t,o,s,l,u,a,r,!1);return;case"select":pn("invalid",t),i=a=o=null;for(r in n)if(n.hasOwnProperty(r)&&(s=n[r],s!=null))switch(r){case"value":o=s;break;case"defaultValue":a=s;break;case"multiple":i=s;default:Xn(t,e,r,s,n,null)}e=o,n=a,t.multiple=!!i,e!=null?Tv(t,!!i,e,!1):n!=null&&Tv(t,!!i,n,!0);return;case"textarea":pn("invalid",t),o=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(s=n[a],s!=null))switch(a){case"value":i=s;break;case"defaultValue":r=s;break;case"children":o=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(Pe(91));break;default:Xn(t,e,a,s,n,null)}Iq(t,i,r,o);return;case"option":for(l in n)if(n.hasOwnProperty(l)&&(i=n[l],i!=null))switch(l){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Xn(t,e,l,i,n,null)}return;case"dialog":pn("beforetoggle",t),pn("toggle",t),pn("cancel",t),pn("close",t);break;case"iframe":case"object":pn("load",t);break;case"video":case"audio":for(i=0;i<Wx.length;i++)pn(Wx[i],t);break;case"image":pn("error",t),pn("load",t);break;case"details":pn("toggle",t);break;case"embed":case"source":case"link":pn("error",t),pn("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(Pe(137,e));default:Xn(t,e,u,i,n,null)}return;default:if(B4(e)){for(f in n)n.hasOwnProperty(f)&&(i=n[f],i!==void 0&&E4(t,e,f,i,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(i=n[s],i!=null&&Xn(t,e,s,i,n,null))}function kye(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,o=null,a=null,s=null,l=null,u=null,f=null;for(m in n){var c=n[m];if(n.hasOwnProperty(m)&&c!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":l=c;default:i.hasOwnProperty(m)||Xn(t,e,m,null,i,c)}}for(var p in i){var m=i[p];if(c=n[p],i.hasOwnProperty(p)&&(m!=null||c!=null))switch(p){case"type":o=m;break;case"name":r=m;break;case"checked":u=m;break;case"defaultChecked":f=m;break;case"value":a=m;break;case"defaultValue":s=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(Pe(137,e));break;default:m!==c&&Xn(t,e,p,m,i,c)}}YL(t,a,s,l,u,f,o,r);return;case"select":m=a=s=p=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case"value":break;case"multiple":m=l;default:i.hasOwnProperty(o)||Xn(t,e,o,null,i,l)}for(r in i)if(o=i[r],l=n[r],i.hasOwnProperty(r)&&(o!=null||l!=null))switch(r){case"value":p=o;break;case"defaultValue":s=o;break;case"multiple":a=o;default:o!==l&&Xn(t,e,r,o,i,l)}e=s,n=a,i=m,p!=null?Tv(t,!!n,p,!1):!!i!=!!n&&(e!=null?Tv(t,!!n,e,!0):Tv(t,!!n,n?[]:"",!1));return;case"textarea":m=p=null;for(s in n)if(r=n[s],n.hasOwnProperty(s)&&r!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:Xn(t,e,s,null,i,r)}for(a in i)if(r=i[a],o=n[a],i.hasOwnProperty(a)&&(r!=null||o!=null))switch(a){case"value":p=r;break;case"defaultValue":m=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(Pe(91));break;default:r!==o&&Xn(t,e,a,r,i,o)}kq(t,p,m);return;case"option":for(var g in n)if(p=n[g],n.hasOwnProperty(g)&&p!=null&&!i.hasOwnProperty(g))switch(g){case"selected":t.selected=!1;break;default:Xn(t,e,g,null,i,p)}for(l in i)if(p=i[l],m=n[l],i.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Xn(t,e,l,p,i,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!=null&&!i.hasOwnProperty(_)&&Xn(t,e,_,null,i,p);for(u in i)if(p=i[u],m=n[u],i.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(Pe(137,e));break;default:Xn(t,e,u,p,i,m)}return;default:if(B4(e)){for(var b in n)p=n[b],n.hasOwnProperty(b)&&p!==void 0&&!i.hasOwnProperty(b)&&E4(t,e,b,void 0,i,p);for(f in i)p=i[f],m=n[f],!i.hasOwnProperty(f)||p===m||p===void 0&&m===void 0||E4(t,e,f,p,i,m);return}}for(var y in n)p=n[y],n.hasOwnProperty(y)&&p!=null&&!i.hasOwnProperty(y)&&Xn(t,e,y,null,i,p);for(c in i)p=i[c],m=n[c],!i.hasOwnProperty(c)||p===m||p==null&&m==null||Xn(t,e,c,p,i,m)}function WX(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iye(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],o=r.transferSize,a=r.initiatorType,s=r.duration;if(o&&s&&WX(a)){for(a=0,s=r.responseEnd,i+=1;i<n.length;i++){var l=n[i],u=l.startTime;if(u>s)break;var f=l.transferSize,c=l.initiatorType;f&&WX(c)&&(l=l.responseEnd,a+=f*(l<s?1:(s-u)/(l-u)))}if(--i,e+=8*(o+a)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var M4=null,A4=null;function R2(t){return t.nodeType===9?t:t.ownerDocument}function ZX(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function OK(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function C4(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var LL=null;function Pye(){var t=window.event;return t&&t.type==="popstate"?t===LL?!1:(LL=t,!0):(LL=null,!1)}var UK=typeof setTimeout=="function"?setTimeout:void 0,Dye=typeof clearTimeout=="function"?clearTimeout:void 0,XX=typeof Promise=="function"?Promise:void 0,zye=typeof queueMicrotask=="function"?queueMicrotask:typeof XX!="undefined"?function(t){return XX.resolve(null).then(t).catch(Nye)}:UK;function Nye(t){setTimeout(function(){throw t})}function Gf(t){return t==="head"}function qX(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(r),Fv(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Ox(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Ox(n);for(var o=n.firstChild;o;){var a=o.nextSibling,s=o.nodeName;o[tS]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&o.rel.toLowerCase()==="stylesheet"||n.removeChild(o),o=a}}else n==="body"&&Ox(t.ownerDocument.body);n=r}while(n);Fv(e)}function YX(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function R4(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":R4(n),F4(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function Oye(t,e,n,i){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[tS])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(o=t.getAttribute("rel"),o==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(o!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(o=t.getAttribute("src"),(o!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&o&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var o=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===o)return t}else return t;if(t=Ds(t.nextSibling),t===null)break}return null}function Uye(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ds(t.nextSibling),t===null))return null;return t}function LK(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ds(t.nextSibling),t===null))return null;return t}function k4(t){return t.data==="$?"||t.data==="$~"}function I4(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Lye(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function Ds(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var P4=null;function KX(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return Ds(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function JX(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function $K(t,e,n){switch(e=R2(n),t){case"html":if(t=e.documentElement,!t)throw Error(Pe(452));return t;case"head":if(t=e.head,!t)throw Error(Pe(453));return t;case"body":if(t=e.body,!t)throw Error(Pe(454));return t;default:throw Error(Pe(451))}}function Ox(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);F4(t)}var zs=new Map,QX=new Set;function k2(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ac=In.d;In.d={f:$ye,r:Fye,D:Bye,C:Hye,L:Vye,m:Gye,X:Wye,S:jye,M:Zye};function $ye(){var t=ac.f(),e=Z2();return t||e}function Fye(t){var e=Hv(t);e!==null&&e.tag===5&&e.type==="form"?PY(e):ac.r(t)}var Wv=typeof document=="undefined"?null:document;function FK(t,e,n){var i=Wv;if(i&&typeof e=="string"&&e){var r=Rs(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),QX.has(r)||(QX.add(r),t={rel:t,crossOrigin:n,href:e},i.querySelector(r)===null&&(e=i.createElement("link"),Yr(e,"link",t),Or(e),i.head.appendChild(e)))}}function Bye(t){ac.D(t),FK("dns-prefetch",t,null)}function Hye(t,e){ac.C(t,e),FK("preconnect",t,e)}function Vye(t,e,n){ac.L(t,e,n);var i=Wv;if(i&&t&&e){var r='link[rel="preload"][as="'+Rs(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Rs(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Rs(n.imageSizes)+'"]')):r+='[href="'+Rs(t)+'"]';var o=r;switch(e){case"style":o=$v(t);break;case"script":o=Zv(t)}zs.has(o)||(t=mi({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),zs.set(o,t),i.querySelector(r)!==null||e==="style"&&i.querySelector(sS(o))||e==="script"&&i.querySelector(lS(o))||(e=i.createElement("link"),Yr(e,"link",t),Or(e),i.head.appendChild(e)))}}function Gye(t,e){ac.m(t,e);var n=Wv;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Rs(i)+'"][href="'+Rs(t)+'"]',o=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":o=Zv(t)}if(!zs.has(o)&&(t=mi({rel:"modulepreload",href:t},e),zs.set(o,t),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(lS(o)))return}i=n.createElement("link"),Yr(i,"link",t),Or(i),n.head.appendChild(i)}}}function jye(t,e,n){ac.S(t,e,n);var i=Wv;if(i&&t){var r=wv(i).hoistableStyles,o=$v(t);e=e||"default";var a=r.get(o);if(!a){var s={loading:0,preload:null};if(a=i.querySelector(sS(o)))s.loading=5;else{t=mi({rel:"stylesheet",href:t,"data-precedence":e},n),(n=zs.get(o))&&E$(t,n);var l=a=i.createElement("link");Or(l),Yr(l,"link",t),l._p=new Promise(function(u,f){l.onload=u,l.onerror=f}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,n2(a,e,i)}a={type:"stylesheet",instance:a,count:1,state:s},r.set(o,a)}}}function Wye(t,e){ac.X(t,e);var n=Wv;if(n&&t){var i=wv(n).hoistableScripts,r=Zv(t),o=i.get(r);o||(o=n.querySelector(lS(r)),o||(t=mi({src:t,async:!0},e),(e=zs.get(r))&&M$(t,e),o=n.createElement("script"),Or(o),Yr(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(r,o))}}function Zye(t,e){ac.M(t,e);var n=Wv;if(n&&t){var i=wv(n).hoistableScripts,r=Zv(t),o=i.get(r);o||(o=n.querySelector(lS(r)),o||(t=mi({src:t,async:!0,type:"module"},e),(e=zs.get(r))&&M$(t,e),o=n.createElement("script"),Or(o),Yr(o,"link",t),n.head.appendChild(o)),o={type:"script",instance:o,count:1,state:null},i.set(r,o))}}function eq(t,e,n,i){var r=(r=kf.current)?k2(r):null;if(!r)throw Error(Pe(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=$v(n.href),n=wv(r).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=$v(n.href);var o=wv(r).hoistableStyles,a=o.get(t);if(a||(r=r.ownerDocument||r,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},o.set(t,a),(o=r.querySelector(sS(t)))&&!o._p&&(a.instance=o,a.state.loading=5),zs.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},zs.set(t,n),o||Xye(r,t,n,a.state))),e&&i===null)throw Error(Pe(528,""));return a}if(e&&i!==null)throw Error(Pe(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Zv(n),n=wv(r).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(Pe(444,t))}}function $v(t){return'href="'+Rs(t)+'"'}function sS(t){return'link[rel="stylesheet"]['+t+"]"}function BK(t){return mi({},t,{"data-precedence":t.precedence,precedence:null})}function Xye(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Yr(e,"link",n),Or(e),t.head.appendChild(e))}function Zv(t){return'[src="'+Rs(t)+'"]'}function lS(t){return"script[async]"+t}function tq(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Rs(n.href)+'"]');if(i)return e.instance=i,Or(i),i;var r=mi({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),Or(i),Yr(i,"style",r),n2(i,n.precedence,t),e.instance=i;case"stylesheet":r=$v(n.href);var o=t.querySelector(sS(r));if(o)return e.state.loading|=4,e.instance=o,Or(o),o;i=BK(n),(r=zs.get(r))&&E$(i,r),o=(t.ownerDocument||t).createElement("link"),Or(o);var a=o;return a._p=new Promise(function(s,l){a.onload=s,a.onerror=l}),Yr(o,"link",i),e.state.loading|=4,n2(o,n.precedence,t),e.instance=o;case"script":return o=Zv(n.src),(r=t.querySelector(lS(o)))?(e.instance=r,Or(r),r):(i=n,(r=zs.get(o))&&(i=mi({},n),M$(i,r)),t=t.ownerDocument||t,r=t.createElement("script"),Or(r),Yr(r,"link",i),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(Pe(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(i=e.instance,e.state.loading|=4,n2(i,n.precedence,t));return e.instance}function n2(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,o=r,a=0;a<i.length;a++){var s=i[a];if(s.dataset.precedence===e)o=s;else if(o!==r)break}o?o.parentNode.insertBefore(t,o.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function E$(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function M$(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var i2=null;function nq(t,e,n){if(i2===null){var i=new Map,r=i2=new Map;r.set(n,i)}else r=i2,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var o=n[r];if(!(o[tS]||o[Zr]||t==="link"&&o.getAttribute("rel")==="stylesheet")&&o.namespaceURI!=="http://www.w3.org/2000/svg"){var a=o.getAttribute(e)||"";a=t+a;var s=i.get(a);s?s.push(o):i.set(a,[o])}}return i}function iq(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function qye(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function HK(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Yye(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=$v(i.href),o=e.querySelector(sS(r));if(o){e=o._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=I2.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=o,Or(o);return}o=e.ownerDocument||e,i=BK(i),(r=zs.get(r))&&E$(i,r),o=o.createElement("link"),Or(o);var a=o;a._p=new Promise(function(s,l){a.onload=s,a.onerror=l}),Yr(o,"link",i),n.instance=o}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=I2.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var $L=0;function Kye(t,e){return t.stylesheets&&t.count===0&&r2(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&r2(t,t.stylesheets),t.unsuspend){var o=t.unsuspend;t.unsuspend=null,o()}},6e4+e);0<t.imgBytes&&$L===0&&($L=62500*Iye());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&r2(t,t.stylesheets),t.unsuspend)){var o=t.unsuspend;t.unsuspend=null,o()}},(t.imgBytes>$L?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function I2(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)r2(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var P2=null;function r2(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,P2=new Map,e.forEach(Jye,t),P2=null,I2.call(t))}function Jye(t,e){if(!(e.state.loading&4)){var n=P2.get(t);if(n)var i=n.get(null);else{n=new Map,P2.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),o=0;o<r.length;o++){var a=r[o];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}r=e.instance,a=r.getAttribute("data-precedence"),o=n.get(a)||i,o===i&&n.set(null,r),n.set(a,r),this.count++,i=I2.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),o?o.parentNode.insertBefore(r,o.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var Xx={$$typeof:qu,Provider:null,Consumer:null,_currentValue:Bh,_currentValue2:Bh,_threadCount:0};function Qye(t,e,n,i,r,o,a,s,l){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fL(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fL(0),this.hiddenUpdates=fL(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=o,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function VK(t,e,n,i,r,o,a,s,l,u,f,c){return t=new Qye(t,e,n,a,l,u,f,c,s),e=1,o===!0&&(e|=24),o=Wa(3,null,null,e),t.current=o,o.stateNode=t,e=J4(),e.refCount++,t.pooledCache=e,e.refCount++,o.memoizedState={element:i,isDehydrated:n,cache:e},t$(o),t}function GK(t){return t?(t=_v,t):_v}function jK(t,e,n,i,r,o){r=GK(r),i.context===null?i.context=r:i.pendingContext=r,i=Pf(e),i.payload={element:n},o=o===void 0?null:o,o!==null&&(i.callback=o),n=Df(t,i,e),n!==null&&(ha(n,t,e),Cx(n,t,e))}function rq(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function A$(t,e){rq(t,e),(t=t.alternate)&&rq(t,e)}function WK(t){if(t.tag===13||t.tag===31){var e=ep(t,67108864);e!==null&&ha(e,t,67108864),A$(t,67108864)}}function oq(t){if(t.tag===13||t.tag===31){var e=Ka();e=L4(e);var n=ep(t,e);n!==null&&ha(n,t,e),A$(t,e)}}var D2=!0;function e_e(t,e,n,i){var r=Ut.T;Ut.T=null;var o=In.p;try{In.p=2,C$(t,e,n,i)}finally{In.p=o,Ut.T=r}}function t_e(t,e,n,i){var r=Ut.T;Ut.T=null;var o=In.p;try{In.p=8,C$(t,e,n,i)}finally{In.p=o,Ut.T=r}}function C$(t,e,n,i){if(D2){var r=D4(i);if(r===null)UL(t,e,i,z2,n),aq(t,i);else if(i_e(r,t,e,n,i))i.stopPropagation();else if(aq(t,i),e&4&&-1<n_e.indexOf(t)){for(;r!==null;){var o=Hv(r);if(o!==null)switch(o.tag){case 3:if(o=o.stateNode,o.current.memoizedState.isDehydrated){var a=Lh(o.pendingLanes);if(a!==0){var s=o;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-Ya(a);s.entanglements[1]|=l,a&=~l}Jl(o),(kn&6)===0&&(w2=Xa()+500,aS(0,!1))}}break;case 31:case 13:s=ep(o,2),s!==null&&ha(s,o,2),Z2(),A$(o,2)}if(o=D4(i),o===null&&UL(t,e,i,z2,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else UL(t,e,i,null,n)}}function D4(t){return t=H4(t),R$(t)}var z2=null;function R$(t){if(z2=null,t=hv(t),t!==null){var e=Kx(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=dq(e),t!==null)return t;t=null}else if(n===31){if(t=hq(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return z2=t,null}function ZK(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Vve()){case vq:return 2;case yq:return 8;case u2:case Gve:return 32;case _q:return 268435456;default:return 32}default:return 32}}var z4=!1,Of=null,Uf=null,Lf=null,qx=new Map,Yx=new Map,Tf=[],n_e="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function aq(t,e){switch(t){case"focusin":case"focusout":Of=null;break;case"dragenter":case"dragleave":Uf=null;break;case"mouseover":case"mouseout":Lf=null;break;case"pointerover":case"pointerout":qx.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yx.delete(e.pointerId)}}function vx(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Hv(e),e!==null&&WK(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function i_e(t,e,n,i,r){switch(e){case"focusin":return Of=vx(Of,t,e,n,i,r),!0;case"dragenter":return Uf=vx(Uf,t,e,n,i,r),!0;case"mouseover":return Lf=vx(Lf,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return qx.set(o,vx(qx.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Yx.set(o,vx(Yx.get(o)||null,t,e,n,i,r)),!0}return!1}function XK(t){var e=hv(t.target);if(e!==null){var n=Kx(e);if(n!==null){if(e=n.tag,e===13){if(e=dq(n),e!==null){t.blockedOn=e,VZ(t.priority,function(){oq(n)});return}}else if(e===31){if(e=hq(n),e!==null){t.blockedOn=e,VZ(t.priority,function(){oq(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function o2(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=D4(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);JL=i,n.target.dispatchEvent(i),JL=null}else return e=Hv(n),e!==null&&WK(e),t.blockedOn=n,!1;e.shift()}return!0}function sq(t,e,n){o2(t)&&n.delete(e)}function r_e(){z4=!1,Of!==null&&o2(Of)&&(Of=null),Uf!==null&&o2(Uf)&&(Uf=null),Lf!==null&&o2(Lf)&&(Lf=null),qx.forEach(sq),Yx.forEach(sq)}function VA(t,e){t.blockedOn===e&&(t.blockedOn=null,z4||(z4=!0,Tr.unstable_scheduleCallback(Tr.unstable_NormalPriority,r_e)))}var GA=null;function lq(t){GA!==t&&(GA=t,Tr.unstable_scheduleCallback(Tr.unstable_NormalPriority,function(){GA===t&&(GA=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],r=t[e+2];if(typeof i!="function"){if(R$(i||n)===null)continue;break}var o=Hv(n);o!==null&&(t.splice(e,3),e-=3,p4(o,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function Fv(t){function e(l){return VA(l,t)}Of!==null&&VA(Of,t),Uf!==null&&VA(Uf,t),Lf!==null&&VA(Lf,t),qx.forEach(e),Yx.forEach(e);for(var n=0;n<Tf.length;n++){var i=Tf[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<Tf.length&&(n=Tf[0],n.blockedOn===null);)XK(n),n.blockedOn===null&&Tf.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],o=n[i+1],a=r[pa]||null;if(typeof o=="function")a||lq(n);else if(a){var s=null;if(o&&o.hasAttribute("formAction")){if(r=o,a=o[pa]||null)s=a.formAction;else if(R$(r)!==null)continue}else s=a.action;typeof s=="function"?n[i+1]=s:(n.splice(i,3),i-=3),lq(n)}}}function qK(){function t(o){o.canIntercept&&o.info==="react-transition"&&o.intercept({handler:function(){return new Promise(function(a){return r=a})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var o=navigation.currentEntry;o&&o.url!=null&&navigation.navigate(o.url,{state:o.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function k$(t){this._internalRoot=t}Y2.prototype.render=k$.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Pe(409));var n=e.current,i=Ka();jK(n,i,t,e,null,null)};Y2.prototype.unmount=k$.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;jK(t.current,2,null,t,null,null),Z2(),e[Bv]=null}};function Y2(t){this._internalRoot=t}Y2.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tq();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Tf.length&&e!==0&&e<Tf[n].priority;n++);Tf.splice(n,0,t),n===0&&XK(t)}};var uq=cq.version;if(uq!=="19.2.8")throw Error(Pe(527,uq,"19.2.8"));In.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Pe(188)):(t=Object.keys(t).join(","),Error(Pe(268,t)));return t=Ove(e),t=t!==null?pq(t):null,t=t===null?null:t.stateNode,t};var o_e={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:Ut,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"&&(yx=__REACT_DEVTOOLS_GLOBAL_HOOK__,!yx.isDisabled&&yx.supportsFiber))try{Jx=yx.inject(o_e),qa=yx}catch(t){}var yx;K2.createRoot=function(t,e){if(!fq(t))throw Error(Pe(299));var n=!1,i="",r=FY,o=BY,a=HY;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(o=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=VK(t,1,!1,null,null,n,i,null,r,o,a,qK),t[Bv]=e.current,T$(t),new k$(e)};K2.hydrateRoot=function(t,e,n){if(!fq(t))throw Error(Pe(299));var i=!1,r="",o=FY,a=BY,s=HY,l=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(o=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(s=n.onRecoverableError),n.formState!==void 0&&(l=n.formState)),e=VK(t,1,!0,e,n!=null?n:null,i,r,l,o,a,s,qK),e.context=GK(null),n=e.current,i=Ka(),i=L4(i),r=Pf(i),r.callback=null,Df(n,r,i),n=i,e.current.lanes=n,eS(e,n),Jl(e),t[Bv]=e.current,T$(t),new Y2(e)};K2.version="19.2.8"});
var QK=Xo((n2e,JK)=>{"use strict";function KK(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(KK)}catch(t){console.error(t)}}KK(),JK.exports=YK()});
var rB=V0(()=>{_i()});
var Ate=V0(()=>{});
var Dte={};
qs(Dte,{GLTFLoader:()=>cB});
var cB,un,fB,dB,hB,pB,mB,gB,vB,yB,_B,bB,xB,SB,wB,TB,EB,MB,pR,AB,Pte,BS,Cte,CB,RB,kB,IB,mR,y1e,PB,Fs,p0,Rte,kte,sB,DB,ad,_1e,lB,E1e,NB,zte=V0(()=>{_i();rB();Ate();cB=class extends vr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new pB(n)}),this.register(function(n){return new mB(n)}),this.register(function(n){return new TB(n)}),this.register(function(n){return new EB(n)}),this.register(function(n){return new MB(n)}),this.register(function(n){return new vB(n)}),this.register(function(n){return new yB(n)}),this.register(function(n){return new _B(n)}),this.register(function(n){return new bB(n)}),this.register(function(n){return new hB(n)}),this.register(function(n){return new xB(n)}),this.register(function(n){return new gB(n)}),this.register(function(n){return new wB(n)}),this.register(function(n){return new SB(n)}),this.register(function(n){return new fB(n)}),this.register(function(n){return new pR(n,un.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new pR(n,un.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new AB(n)})}load(e,n,i,r){let o=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let u=_s.extractUrlBase(e);a=_s.resolveURL(u,this.path)}else a=_s.extractUrlBase(e);this.manager.itemStart(e);let s=function(u){r?r(u):console.error(u),o.manager.itemError(e),o.manager.itemEnd(e)},l=new Mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(u){try{o.parse(u,a,function(f){n(f),o.manager.itemEnd(e)},s)}catch(f){s(f)}},i,s)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){let o,a={},s={},l=new TextDecoder;if(typeof e=="string")o=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Pte){try{a[un.KHR_BINARY_GLTF]=new CB(e)}catch(c){r&&r(c);return}o=JSON.parse(a[un.KHR_BINARY_GLTF].content)}else o=JSON.parse(l.decode(e));else o=e;if(o.asset===void 0||o.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let u=new NB(o,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});u.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){let c=this.pluginCallbacks[f](u);c.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),s[c.name]=c,a[c.name]=!0}if(o.extensionsUsed)for(let f=0;f<o.extensionsUsed.length;++f){let c=o.extensionsUsed[f],p=o.extensionsRequired||[];switch(c){case un.KHR_MATERIALS_UNLIT:a[c]=new dB;break;case un.KHR_DRACO_MESH_COMPRESSION:a[c]=new RB(o,this.dracoLoader);break;case un.KHR_TEXTURE_TRANSFORM:a[c]=new kB;break;case un.KHR_MESH_QUANTIZATION:a[c]=new IB;break;default:p.indexOf(c)>=0&&s[c]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+c+'".')}}u.setExtensions(a),u.setPlugins(s),u.parse(i,r)}parseAsync(e,n){let i=this;return new Promise(function(r,o){i.parse(e,n,r,o)})}};un={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},fB=class{constructor(e){this.parser=e,this.name=un.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,r=n.length;i<r;i++){let o=n[i];o.extensions&&o.extensions[this.name]&&o.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,o.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,r=n.cache.get(i);if(r)return r;let o=n.json,l=((o.extensions&&o.extensions[this.name]||{}).lights||[])[e],u,f=new Oe(16777215);l.color!==void 0&&f.setRGB(l.color[0],l.color[1],l.color[2],Pr);let c=l.range!==void 0?l.range:0;switch(l.type){case"directional":u=new nh(f),u.target.position.set(0,0,-1),u.add(u.target);break;case"point":u=new th(f),u.distance=c;break;case"spot":u=new eh(f),u.distance=c,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,u.angle=l.spot.outerConeAngle,u.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,u.target.position.set(0,0,-1),u.add(u.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return u.position.set(0,0,0),ru(u,l),l.intensity!==void 0&&(u.intensity=l.intensity),u.name=n.createUniqueName(l.name||"light_"+e),r=Promise.resolve(u),n.cache.add(i,r),r}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,o=i.json.nodes[e],s=(o.extensions&&o.extensions[this.name]||{}).light;return s===void 0?null:this._loadLight(s).then(function(l){return i._getNodeRef(n.cache,s,l)})}},dB=class{constructor(){this.name=un.KHR_MATERIALS_UNLIT}getMaterialType(){return Br}extendParams(e,n,i){let r=[];e.color=new Oe(1,1,1),e.opacity=1;let o=n.pbrMetallicRoughness;if(o){if(Array.isArray(o.baseColorFactor)){let a=o.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Pr),e.opacity=a[3]}o.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",o.baseColorTexture,zn))}return Promise.all(r)}},hB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},pB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let o=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ce(o,o)}return Promise.all(r)}},mB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},gB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),n.iridescenceThicknessRange===void 0&&(n.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}},vB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_SHEEN}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];if(n.sheenColor=new Oe(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){let o=i.sheenColorFactor;n.sheenColor.setRGB(o[0],o[1],o[2],Pr)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,zn)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}},yB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(r)}},_B=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_VOLUME}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;let o=i.attenuationColor||[1,1,1];return n.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],Pr),Promise.all(r)}},bB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_IOR}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},xB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));let o=i.specularColorFactor||[1,1,1];return n.specularColor=new Oe().setRGB(o[0],o[1],o[2],Pr),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,zn)),Promise.all(r)}},SB=class{constructor(e){this.parser=e,this.name=un.EXT_MATERIALS_BUMP}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(r)}},wB=class{constructor(e){this.parser=e,this.name=un.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Yi(this.parser,e,this.name)!==null?lr:null}extendMaterialParams(e,n){let i=Yi(this.parser,e,this.name);if(i===null)return Promise.resolve();let r=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}},TB=class{constructor(e){this.parser=e,this.name=un.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;let o=r.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,o.source,a)}},EB=class{constructor(e){this.parser=e,this.name=un.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[n])return null;let a=o.extensions[n],s=r.images[a.source],l=i.textureLoader;if(s.uri){let u=i.options.manager.getHandler(s.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}},MB=class{constructor(e){this.parser=e,this.name=un.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,i=this.parser,r=i.json,o=r.textures[e];if(!o.extensions||!o.extensions[n])return null;let a=o.extensions[n],s=r.images[a.source],l=i.textureLoader;if(s.uri){let u=i.options.manager.getHandler(s.uri);u!==null&&(l=u)}return i.loadTextureImage(e,a.source,l)}},pR=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let r=i.extensions[this.name],o=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return o.then(function(s){let l=r.byteOffset||0,u=r.byteLength||0,f=r.count,c=r.byteStride,p=new Uint8Array(s,l,u);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(f,c,p,r.mode,r.filter).then(function(m){return m.buffer}):a.ready.then(function(){let m=new ArrayBuffer(f*c);return a.decodeGltfBuffer(new Uint8Array(m),f,c,p,r.mode,r.filter),m})})}else return null}},AB=class{constructor(e){this.name=un.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let r=n.meshes[i.mesh];for(let u of r.primitives)if(u.mode!==Fs.TRIANGLES&&u.mode!==Fs.TRIANGLE_STRIP&&u.mode!==Fs.TRIANGLE_FAN&&u.mode!==void 0)return null;let a=i.extensions[this.name].attributes,s=[],l={};for(let u in a)s.push(this.parser.getDependency("accessor",a[u]).then(f=>(l[u]=f,l[u])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(u=>{let f=u.pop(),c=f.isGroup?f.children:[f],p=u[0].count,m=[];for(let g of c){let _=new Ct,b=new F,y=new Fn,x=new F(1,1,1),T=new Wd(g.geometry,g.material,p);for(let E=0;E<p;E++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&y.fromBufferAttribute(l.ROTATION,E),l.SCALE&&x.fromBufferAttribute(l.SCALE,E),T.setMatrixAt(E,_.compose(b,y,x));let w=null;for(let E in l)if(E==="_COLOR_0"){let A=l[E];T.instanceColor=new Ua(A.array,A.itemSize,A.normalized)}else if(E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"){if(w===null){let R=T.geometry;w=new Rt,w.name=R.name;for(let M in R.attributes)w.setAttribute(M,R.attributes[M]);for(let M in R.morphAttributes)w.morphAttributes[M]=R.morphAttributes[M];R.index!==null&&w.setIndex(R.index),w.morphTargetsRelative=R.morphTargetsRelative;for(let M of R.groups)w.addGroup(M.start,M.count,M.materialIndex);R.boundingBox!==null&&(w.boundingBox=R.boundingBox.clone()),R.boundingSphere!==null&&(w.boundingSphere=R.boundingSphere.clone()),w.drawRange.start=R.drawRange.start,w.drawRange.count=R.drawRange.count,w.userData=Object.assign({},R.userData),T.geometry=w}let A=l[E];w.setAttribute(E,new Ua(A.array,A.itemSize,A.normalized))}_n.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),m.push(T)}return f.isGroup?(f.clear(),f.add(...m),f):m[0]}))}},Pte="glTF",BS=12,Cte={JSON:1313821514,BIN:5130562},CB=class{constructor(e){this.name=un.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,BS),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Pte)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let r=this.header.length-BS,o=new DataView(e,BS),a=0;for(;a<r;){let s=o.getUint32(a,!0);a+=4;let l=o.getUint32(a,!0);if(a+=4,l===Cte.JSON){let u=new Uint8Array(e,BS+a,s);this.content=i.decode(u)}else if(l===Cte.BIN){let u=BS+a;this.body=e.slice(u,u+s)}a+=s}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},RB=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=un.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,r=this.dracoLoader,o=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,s={},l={},u={};for(let f in a){let c=DB[f]||f.toLowerCase();s[c]=a[f]}for(let f in e.attributes){let c=DB[f]||f.toLowerCase();if(a[f]!==void 0){let p=i.accessors[e.attributes[f]],m=p0[p.componentType];u[c]=m.name,l[c]=p.normalized===!0}}return n.getDependency("bufferView",o).then(function(f){return new Promise(function(c,p){r.decodeDracoFile(f,function(m){for(let g in m.attributes){let _=m.attributes[g],b=l[g];b!==void 0&&(_.normalized=b)}c(m)},s,u,Pr,p)})})}},kB=class{constructor(){this.name=un.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){if((n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0)return e;if(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),n.rotation!==void 0){let i=Math.cos(e.rotation),r=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*r,e.offset.x,-e.repeat.x*r,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},IB=class{constructor(){this.name=un.KHR_MESH_QUANTIZATION}},mR=class extends ol{constructor(e,n,i,r){super(e,n,i,r)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,o=e*r*3+r;for(let a=0;a!==r;a++)n[a]=i[o+a];return n}interpolate_(e,n,i,r){let o=this.resultBuffer,a=this.sampleValues,s=this.valueSize,l=s*2,u=s*3,f=r-n,c=(i-n)/f,p=c*c,m=p*c,g=e*u,_=g-u,b=-2*m+3*p,y=m-p,x=1-b,T=y-p+c;for(let w=0;w!==s;w++){let E=a[_+w+s],A=a[_+w+l]*f,R=a[g+w+s],M=a[g+w]*f;o[w]=x*E+T*A+b*R+y*M}return o}},y1e=new Fn,PB=class extends mR{interpolate_(e,n,i,r){let o=super.interpolate_(e,n,i,r);return y1e.fromArray(o).normalize().toArray(o),o}},Fs={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},p0={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rte={9728:ci,9729:wn,9984:Ym,9985:rf,9986:Pu,9987:na},kte={33071:ir,33648:Fc,10497:gs},sB={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},DB={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ad={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},_1e={CUBICSPLINE:void 0,LINEAR:Hc,STEP:Bc},lB={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};E1e=new Ct,NB=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new v1e,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,o=!1,a=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let s=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(s)===!0;let l=s.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,o=s.indexOf("Firefox")>-1,a=o?s.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||i&&r<17||o&&a<98?this.textureLoader=new Fm(this.options.manager):this.textureLoader=new Hm(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,r=this.json,o=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let s={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};return bp(o,s,r),ru(s,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(s)})).then(function(){for(let l of s.scenes)l.updateMatrixWorld();e(s)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let r=0,o=n.length;r<o;r++){let a=n[r].joints;for(let s=0,l=a.length;s<l;s++)e[a[s]].isBone=!0}for(let r=0,o=e.length;r<o;r++){let a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let r=i.clone(),o=(a,s)=>{let l=this.associations.get(a);l!=null&&this.associations.set(s,l);for(let[u,f]of a.children.entries())o(f,s.children[u])};return o(i,r),r.name+="_instance_"+e.uses[n]++,r}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let r=e(n[i]);if(r)return r}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let r=0;r<n.length;r++){let o=e(n[r]);o&&i.push(o)}return i}getDependency(e,n){let i=e+":"+n,r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(n);break;case"node":r=this._invokeOne(function(o){return o.loadNode&&o.loadNode(n)});break;case"mesh":r=this._invokeOne(function(o){return o.loadMesh&&o.loadMesh(n)});break;case"accessor":r=this.loadAccessor(n);break;case"bufferView":r=this._invokeOne(function(o){return o.loadBufferView&&o.loadBufferView(n)});break;case"buffer":r=this.loadBuffer(n);break;case"material":r=this._invokeOne(function(o){return o.loadMaterial&&o.loadMaterial(n)});break;case"texture":r=this._invokeOne(function(o){return o.loadTexture&&o.loadTexture(n)});break;case"skin":r=this.loadSkin(n);break;case"animation":r=this._invokeOne(function(o){return o.loadAnimation&&o.loadAnimation(n)});break;case"camera":r=this.loadCamera(n);break;default:if(r=this._invokeOne(function(o){return o!=this&&o.getDependency&&o.getDependency(e,n)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(r.map(function(o,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[un.KHR_BINARY_GLTF].body);let r=this.options;return new Promise(function(o,a){i.load(_s.resolveURL(n.uri,r.path),o,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let r=n.byteLength||0,o=n.byteOffset||0;return i.slice(o,o+r)})}loadAccessor(e){let n=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){let a=sB[r.type],s=p0[r.componentType],l=r.normalized===!0,u=new s(r.count*a);return Promise.resolve(new Lt(u,a,l))}let o=[];return r.bufferView!==void 0?o.push(this.getDependency("bufferView",r.bufferView)):o.push(null),r.sparse!==void 0&&(o.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),o.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(o).then(function(a){let s=a[0],l=sB[r.type],u=p0[r.componentType],f=u.BYTES_PER_ELEMENT,c=f*l,p=r.byteOffset||0,m=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0,_,b;if(m&&m!==c){let y=Math.floor(p/m),x="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+y+":"+r.count,T=n.cache.get(x);T||(_=new u(s,y*m,r.count*m/f),T=new kl(_,m/f),n.cache.add(x,T)),b=new il(T,l,p%m/f,g)}else s===null?_=new u(r.count*l):_=new u(s,p,r.count*l),b=new Lt(_,l,g);if(r.sparse!==void 0){let y=sB.SCALAR,x=p0[r.sparse.indices.componentType],T=r.sparse.indices.byteOffset||0,w=r.sparse.values.byteOffset||0,E=new x(a[1],T,r.sparse.count*y),A=new u(a[2],w,r.sparse.count*l);s!==null&&(b=new Lt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let R=0,M=E.length;R<M;R++){let I=E[R];if(b.setX(I,A[R*l]),l>=2&&b.setY(I,A[R*l+1]),l>=3&&b.setZ(I,A[R*l+2]),l>=4&&b.setW(I,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=g}return b})}loadTexture(e){let n=this.json,i=this.options,o=n.textures[e].source,a=n.images[o],s=this.textureLoader;if(a.uri){let l=i.manager.getHandler(a.uri);l!==null&&(s=l)}return this.loadTextureImage(e,o,s)}loadTextureImage(e,n,i){let r=this,o=this.json,a=o.textures[e],s=o.images[n],l=(s.uri||s.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let u=this.loadImageSource(n,i).then(function(f){f.flipY=!1,f.name=a.name||s.name||"",f.name===""&&typeof s.uri=="string"&&s.uri.startsWith("data:image/")===!1&&(f.name=s.uri);let p=(o.samplers||{})[a.sampler]||{};return f.magFilter=Rte[p.magFilter]||wn,f.minFilter=Rte[p.minFilter]||na,f.wrapS=kte[p.wrapS]||gs,f.wrapT=kte[p.wrapT]||gs,f.generateMipmaps=!f.isCompressedTexture&&f.minFilter!==ci&&f.minFilter!==wn,r.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=u,u}loadImageSource(e,n){let i=this,r=this.json,o=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(c=>c.clone());let a=r.images[e],s=self.URL||self.webkitURL,l=a.uri||"",u=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(c){u=!0;let p=new Blob([c],{type:a.mimeType});return l=s.createObjectURL(p),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let f=Promise.resolve(l).then(function(c){return new Promise(function(p,m){let g=p;n.isImageBitmapLoader===!0&&(g=function(_){let b=new fi(_);b.needsUpdate=!0,p(b)}),n.load(_s.resolveURL(c,o.path),g,void 0,m)})}).then(function(c){return u===!0&&s.revokeObjectURL(l),ru(c,a),c.userData.mimeType=a.mimeType||T1e(a.uri),c}).catch(function(c){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),c});return this.sourceCache[e]=f,f}assignTexture(e,n,i,r){let o=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),o.extensions[un.KHR_TEXTURE_TRANSFORM]){let s=i.extensions!==void 0?i.extensions[un.KHR_TEXTURE_TRANSFORM]:void 0;if(s){let l=o.associations.get(a);a=o.extensions[un.KHR_TEXTURE_TRANSFORM].extendTexture(a,s),o.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[n]=a,a})}assignFinalMaterial(e){let n=e.geometry,i=e.material,r=n.attributes.tangent===void 0,o=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){let s="PointsMaterial:"+i.uuid,l=this.cache.get(s);l||(l=new Wc,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(s,l)),i=l}else if(e.isLine){let s="LineBasicMaterial:"+i.uuid,l=this.cache.get(s);l||(l=new ar,ni.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(s,l)),i=l}if(r||o||a){let s="ClonedMaterial:"+i.uuid+":";r&&(s+="derivative-tangents:"),o&&(s+="vertex-colors:"),a&&(s+="flat-shading:");let l=this.cache.get(s);l||(l=i.clone(),o&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(s,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return rl}loadMaterial(e){let n=this,i=this.json,r=this.extensions,o=i.materials[e],a,s={},l=o.extensions||{},u=[];if(l[un.KHR_MATERIALS_UNLIT]){let c=r[un.KHR_MATERIALS_UNLIT];a=c.getMaterialType(),u.push(c.extendParams(s,o,n))}else{let c=o.pbrMetallicRoughness||{};if(s.color=new Oe(1,1,1),s.opacity=1,Array.isArray(c.baseColorFactor)){let p=c.baseColorFactor;s.color.setRGB(p[0],p[1],p[2],Pr),s.opacity=p[3]}c.baseColorTexture!==void 0&&u.push(n.assignTexture(s,"map",c.baseColorTexture,zn)),s.metalness=c.metallicFactor!==void 0?c.metallicFactor:1,s.roughness=c.roughnessFactor!==void 0?c.roughnessFactor:1,c.metallicRoughnessTexture!==void 0&&(u.push(n.assignTexture(s,"metalnessMap",c.metallicRoughnessTexture)),u.push(n.assignTexture(s,"roughnessMap",c.metallicRoughnessTexture))),a=this._invokeOne(function(p){return p.getMaterialType&&p.getMaterialType(e)}),u.push(Promise.all(this._invokeAll(function(p){return p.extendMaterialParams&&p.extendMaterialParams(e,s)})))}o.doubleSided===!0&&(s.side=Hr);let f=o.alphaMode||lB.OPAQUE;if(f===lB.BLEND?(s.transparent=!0,s.depthWrite=!1):(s.transparent=!1,f===lB.MASK&&(s.alphaTest=o.alphaCutoff!==void 0?o.alphaCutoff:.5)),o.normalTexture!==void 0&&a!==Br&&(u.push(n.assignTexture(s,"normalMap",o.normalTexture)),s.normalScale=new Ce(1,1),o.normalTexture.scale!==void 0)){let c=o.normalTexture.scale;s.normalScale.set(c,c)}if(o.occlusionTexture!==void 0&&a!==Br&&(u.push(n.assignTexture(s,"aoMap",o.occlusionTexture)),o.occlusionTexture.strength!==void 0&&(s.aoMapIntensity=o.occlusionTexture.strength)),o.emissiveFactor!==void 0&&a!==Br){let c=o.emissiveFactor;s.emissive=new Oe().setRGB(c[0],c[1],c[2],Pr)}return o.emissiveTexture!==void 0&&a!==Br&&u.push(n.assignTexture(s,"emissiveMap",o.emissiveTexture,zn)),Promise.all(u).then(function(){let c=new a(s);return o.name&&(c.name=o.name),ru(c,o),n.associations.set(c,{materials:e}),o.extensions&&bp(r,c,o),c})}createUniqueName(e){let n=An.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,r=this.primitiveCache;function o(s){return i[un.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(s,n).then(function(l){return Ite(l,s,n)})}let a=[];for(let s=0,l=e.length;s<l;s++){let u=e[s],f=w1e(u),c=r[f];if(c)a.push(c.promise);else{let p;u.extensions&&u.extensions[un.KHR_DRACO_MESH_COMPRESSION]?p=o(u):p=Ite(new Rt,u,n),u.mode===Fs.TRIANGLE_STRIP?p=p.then(m=>iB(m,rg)):u.mode===Fs.TRIANGLE_FAN&&(p=p.then(m=>iB(m,uh))),r[f]={primitive:u,promise:p},a.push(p)}}return Promise.all(a)}loadMesh(e){let n=this,i=this.json,r=this.extensions,o=i.meshes[e],a=o.primitives,s=[];for(let l=0,u=a.length;l<u;l++){let f=a[l].material===void 0?b1e(this.cache):this.getDependency("material",a[l].material);s.push(f)}return s.push(n.loadGeometries(a)),Promise.all(s).then(async function(l){let u=l.slice(0,l.length-1),f=l[l.length-1],c=[];for(let m=0,g=f.length;m<g;m++){let _=f[m],b=a[m],y,x=u[m];if(b.mode===Fs.TRIANGLES||b.mode===Fs.TRIANGLE_STRIP||b.mode===Fs.TRIANGLE_FAN||b.mode===void 0){let T=o.isSkinnedMesh===!0,w=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");T&&w===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),y=T&&w?new Gd(_,x):new Kn(_,x),y.isSkinnedMesh===!0&&y.normalizeSkinWeights()}else if(b.mode===Fs.LINES)y=new To(_,x);else if(b.mode===Fs.LINE_STRIP)y=new La(_,x);else if(b.mode===Fs.LINE_LOOP)y=new Zd(_,x);else if(b.mode===Fs.POINTS)y=new Xd(_,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(y.geometry.morphAttributes).length>0&&S1e(y,o),y.name=n.createUniqueName(o.name||"mesh_"+e),ru(y,o),b.extensions&&bp(r,y,b),n.assignFinalMaterial(y),c.push(y)}for(let m=0,g=c.length;m<g;m++)n.associations.set(c[m],{meshes:e,primitives:m});if(c.length===1)return o.extensions&&bp(r,c[0],o),c[0];let p=new wo;o.extensions&&bp(r,p,o),n.associations.set(p,{meshes:e});for(let m=0,g=c.length;m<g;m++)p.add(c[m]);return p})}loadCamera(e){let n,i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new vi(og.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(n=new ys(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ru(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let r=0,o=n.joints.length;r<o;r++)i.push(this._loadNodeShallow(n.joints[r]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){let o=r.pop(),a=r,s=[],l=[];for(let u=0,f=a.length;u<f;u++){let c=a[u];if(c){s.push(c);let p=new Ct;o!==null&&p.fromArray(o.array,u*16),l.push(p)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[u])}return new jd(s,l)})}loadAnimation(e){let n=this.json,i=this,r=n.animations[e],o=r.name?r.name:"animation_"+e,a=[],s=[],l=[],u=[],f=[];for(let c=0,p=r.channels.length;c<p;c++){let m=r.channels[c],g=r.samplers[m.sampler],_=m.target,b=_.node,y=r.parameters!==void 0?r.parameters[g.input]:g.input,x=r.parameters!==void 0?r.parameters[g.output]:g.output;_.node!==void 0&&(a.push(this.getDependency("node",b)),s.push(this.getDependency("accessor",y)),l.push(this.getDependency("accessor",x)),u.push(g),f.push(_))}return Promise.all([Promise.all(a),Promise.all(s),Promise.all(l),Promise.all(u),Promise.all(f)]).then(function(c){let p=c[0],m=c[1],g=c[2],_=c[3],b=c[4],y=[];for(let T=0,w=p.length;T<w;T++){let E=p[T],A=m[T],R=g[T],M=_[T],I=b[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let P=i._createAnimationTracks(E,A,R,M,I);if(P)for(let z=0;z<P.length;z++)y.push(P[z])}let x=new Ul(o,void 0,y);return ru(x,r),x})}createNodeMesh(e){let n=this.json,i=this,r=n.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(o){let a=i._getNodeRef(i.meshCache,r.mesh,o);return r.weights!==void 0&&a.traverse(function(s){if(s.isMesh)for(let l=0,u=r.weights.length;l<u;l++)s.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){let n=this.json,i=this,r=n.nodes[e],o=i._loadNodeShallow(e),a=[],s=r.children||[];for(let u=0,f=s.length;u<f;u++)a.push(i.getDependency("node",s[u]));let l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([o,Promise.all(a),l]).then(function(u){let f=u[0],c=u[1],p=u[2];p!==null&&f.traverse(function(m){m.isSkinnedMesh&&m.bind(p,E1e)});for(let m=0,g=c.length;m<g;m++)f.add(c[m]);if(f.userData.pivot!==void 0&&c.length>0){let m=f.userData.pivot,g=c[0];f.pivot=new F().fromArray(m),f.position.x-=m[0],f.position.y-=m[1],f.position.z-=m[2],g.position.set(0,0,0),delete f.userData.pivot}return f})}_loadNodeShallow(e){let n=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let o=n.nodes[e],a=o.name?r.createUniqueName(o.name):"",s=[],l=r._invokeOne(function(u){return u.createNodeMesh&&u.createNodeMesh(e)});return l&&s.push(l),o.camera!==void 0&&s.push(r.getDependency("camera",o.camera).then(function(u){return r._getNodeRef(r.cameraCache,o.camera,u)})),r._invokeAll(function(u){return u.createNodeAttachment&&u.createNodeAttachment(e)}).forEach(function(u){s.push(u)}),this.nodeCache[e]=Promise.all(s).then(function(u){let f;if(o.isBone===!0?f=new jc:u.length>1?f=new wo:u.length===1?f=u[0]:f=new _n,f!==u[0])for(let c=0,p=u.length;c<p;c++)f.add(u[c]);if(o.name&&(f.userData.name=o.name,f.name=a),ru(f,o),o.extensions&&bp(i,f,o),o.matrix!==void 0){let c=new Ct;c.fromArray(o.matrix),f.applyMatrix4(c)}else o.translation!==void 0&&f.position.fromArray(o.translation),o.rotation!==void 0&&f.quaternion.fromArray(o.rotation),o.scale!==void 0&&f.scale.fromArray(o.scale);if(!r.associations.has(f))r.associations.set(f,{});else if(o.mesh!==void 0&&r.meshCache.refs[o.mesh]>1){let c=r.associations.get(f);r.associations.set(f,H({},c))}return r.associations.get(f).nodes=e,f}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],r=this,o=new wo;i.name&&(o.name=r.createUniqueName(i.name)),ru(o,i),i.extensions&&bp(n,o,i);let a=i.nodes||[],s=[];for(let l=0,u=a.length;l<u;l++)s.push(r.getDependency("node",a[l]));return Promise.all(s).then(function(l){for(let f=0,c=l.length;f<c;f++){let p=l[f];p.parent!==null?o.add(Ete(p)):o.add(p)}let u=f=>{let c=new Map;for(let[p,m]of r.associations)(p instanceof ni||p instanceof fi)&&c.set(p,m);return f.traverse(p=>{let m=r.associations.get(p);m!=null&&c.set(p,m)}),c};return r.associations=u(o),o})}_createAnimationTracks(e,n,i,r,o){let a=[],s=e.name?e.name:e.uuid,l=[];function u(m){m.morphTargetInfluences&&l.push(m.name?m.name:m.uuid)}ad[o.path]===ad.weights?(u(e),e.isGroup&&e.children.forEach(u)):l.push(s);let f;switch(ad[o.path]){case ad.weights:f=zl;break;case ad.rotation:f=Nl;break;case ad.translation:case ad.scale:f=Ru;break;default:switch(i.itemSize){case 1:f=zl;break;case 2:case 3:default:f=Ru;break}break}let c=r.interpolation!==void 0?_1e[r.interpolation]:Hc,p=this._getArrayFromAccessor(i);for(let m=0,g=l.length;m<g;m++){let _=new f(l[m]+"."+ad[o.path],n.array,p,c);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=zB(n.constructor),r=new Float32Array(n.length);for(let o=0,a=n.length;o<a;o++)r[o]=n[o]*i;n=r}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let r=this instanceof Nl?PB:mR;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});
var di=kt(Wn()),cj=kt(Wn());
_i();
var CG=kt(Wn(),1),RG=kt(TG(),1);
var EG=t=>{let e,n=new Set,i=(u,f)=>{let c=typeof u=="function"?u(e):u;if(!Object.is(c,e)){let p=e;e=(f!=null?f:typeof c!="object"||c===null)?c:Object.assign({},e,c),n.forEach(m=>m(e,p))}},r=()=>e,s={setState:i,getState:r,getInitialState:()=>l,subscribe:u=>(n.add(u),()=>n.delete(u))},l=e=t(i,r,s);return s},MG=(t=>t?EG(t):EG);
var{useSyncExternalStoreWithSelector:Yfe}=RG.default,Kfe=t=>t;
var AG=(t,e)=>{let n=MG(t),i=(r,o=e)=>Jfe(n,r,o);return Object.assign(i,n),i},kG=((t,e)=>t?AG(t,e):AG);
var Qfe=t=>typeof t=="object"&&typeof t.then=="function",ph=[];
var DG=(t,e,n)=>PG(t,e,!1,n),zG=(t,e,n)=>void PG(t,e,!0,n);
var NG=t=>{if(t===void 0||t.length===0)ph.splice(0,ph.length);else{let e=ph.find(n=>IG(t,n.keys,n.equal));e&&e.remove()}};
var Vr=kt(oE()),gg=kt(ii());
var Ao=kt(Wn(),1);
var wwe=(()=>{var t,e;return typeof window!="undefined"&&(((t=window.document)==null?void 0:t.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative")})()?Ao.default.useLayoutEffect:Ao.default.useEffect;
var uD=YG(Ao.default.createContext(null)),fb=class extends Ao.default.Component{render(){return Ao.default.createElement(uD.Provider,{value:this._reactInternals},this.props.children)}};
var ide=Symbol.for("react.context"),rde=t=>t!==null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===ide;
var fj=t=>t&&t.isOrthographicCamera,dj=t=>t&&t.hasOwnProperty("current"),ade=t=>t!=null&&(typeof t=="string"||typeof t=="number"||t.isColor),yg=((t,e)=>typeof window!="undefined"&&(((t=window.document)==null?void 0:t.createElement)||((e=window.navigator)==null?void 0:e.product)==="ReactNative"))()?di.useLayoutEffect:di.useEffect;
var mj=(t=>(t=class extends di.Component{constructor(...n){super(...n),this.state={error:!1}}componentDidCatch(n){this.props.set(n)}render(){return this.state.error?null:this.props.children}},t.getDerivedStateFromError=()=>({error:!0}),t))();
var ri={obj:t=>t===Object(t)&&!ri.arr(t)&&typeof t!="function",fun:t=>typeof t=="function",str:t=>typeof t=="string",num:t=>typeof t=="number",boo:t=>typeof t=="boolean",und:t=>t===void 0,nul:t=>t===null,arr:t=>Array.isArray(t),equ(t,e,{arrays:n="shallow",objects:i="reference",strict:r=!0}={}){if(typeof t!=typeof e||!!t!=!!e)return!1;if(ri.str(t)||ri.num(t)||ri.boo(t))return t===e;let o=ri.obj(t);if(o&&i==="reference")return t===e;let a=ri.arr(t);if(a&&n==="reference")return t===e;if((a||o)&&t===e)return!0;let s;for(s in t)if(!(s in e))return!1;if(o&&n==="shallow"&&i==="shallow"){for(s in r?e:t)if(!ri.equ(t[s],e[s],{strict:r,objects:"reference"}))return!1}else for(s in r?e:t)if(t[s]!==e[s])return!1;if(ri.und(s)){if(a&&t.length===0&&e.length===0||o&&Object.keys(t).length===0&&Object.keys(e).length===0)return!0;if(t!==e)return!1}return!0}};
var yj=["children","key","ref"];
var JG=/-\d+$/;
var _D=[...yj,"args","dispose","attach","object","onUpdate","dispose"],QG=new Map;
var ude=["map","emissiveMap","sheenColorMap","specularColorMap","envMap"],cde=/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
var Co=t=>t==null?void 0:t.isObject3D;
var ej=t=>!!(t!=null&&t.render),AD=di.createContext(null),pde=(t,e)=>{let n=kG((s,l)=>{let u=new F,f=new F,c=new F;function p(y=l().camera,x=f,T=l().size){let{width:w,height:E,top:A,left:R}=T,M=w/E;x.isVector3?c.copy(x):c.set(...x);let I=y.getWorldPosition(u).distanceTo(c);if(fj(y))return{width:w/y.zoom,height:E/y.zoom,top:A,left:R,factor:1,distance:I,aspect:M};{let P=y.fov*Math.PI/180,z=2*Math.tan(P/2)*I,$=z*(w/E);return{width:$,height:z,top:A,left:R,factor:w/$,distance:I,aspect:M}}}let m,g=y=>s(x=>({performance:be(H({},x.performance),{current:y})})),_=new Ce;return{set:s,get:l,gl:null,camera:null,raycaster:null,events:{priority:1,enabled:!0,connected:!1},scene:null,xr:null,invalidate:(y=1)=>t(l(),y),advance:(y,x)=>e(y,x,l()),legacy:!1,linear:!1,flat:!1,controls:null,clock:new jm,pointer:_,mouse:_,frameloop:"always",onPointerMissed:void 0,performance:{current:1,min:.5,max:1,debounce:200,regress:()=>{let y=l();m&&clearTimeout(m),y.performance.current!==y.performance.min&&g(y.performance.min),m=setTimeout(()=>g(l().performance.max),y.performance.debounce)}},size:{width:0,height:0,top:0,left:0},viewport:{initialDpr:0,dpr:0,width:0,height:0,top:0,left:0,aspect:0,distance:0,factor:0,getCurrentViewport:p},setEvents:y=>s(x=>be(H({},x),{events:H(H({},x.events),y)})),setSize:(y,x,T=0,w=0)=>{let E=l().camera,A={width:y,height:x,top:T,left:w};s(R=>({size:A,viewport:H(H({},R.viewport),p(E,f,A))}))},setDpr:y=>s(x=>{let T=gj(y);return{viewport:be(H({},x.viewport),{dpr:T,initialDpr:x.viewport.initialDpr||T})}}),setFrameloop:(y="always")=>{let x=l().clock;x.stop(),x.elapsedTime=0,y!=="never"&&(x.start(),x.elapsedTime=0),s(()=>({frameloop:y}))},previousRoot:void 0,internal:{interaction:[],hovered:new Map,subscribers:[],initialClick:[0,0],initialHits:[],capturedMap:new Map,lastEvent:di.createRef(),active:!1,frames:0,priority:0,subscribe:(y,x,T)=>{let w=l().internal;return w.priority=w.priority+(x>0?1:0),w.subscribers.push({ref:y,priority:x,store:T}),w.subscribers=w.subscribers.sort((E,A)=>E.priority-A.priority),()=>{let E=l().internal;E!=null&&E.subscribers&&(E.priority=E.priority-(x>0?1:0),E.subscribers=E.subscribers.filter(A=>A.ref!==y))}}}}}),i=n.getState(),r=i.size,o=i.viewport.dpr,a=i.camera;return n.subscribe(()=>{let{camera:s,size:l,viewport:u,gl:f,set:c}=n.getState();if(l.width!==r.width||l.height!==r.height||u.dpr!==o){r=l,o=u.dpr,fde(s,l),u.dpr>0&&f.setPixelRatio(u.dpr);let p=typeof HTMLCanvasElement!="undefined"&&f.domElement instanceof HTMLCanvasElement;f.setSize(l.width,l.height,p)}s!==a&&(a=s,c(p=>({viewport:H(H({},p.viewport),p.viewport.getCurrentViewport(s))})))}),n.subscribe(s=>t(s)),n};
var tj=new WeakMap,mde=t=>{var e;return typeof t=="function"&&(t==null||(e=t.prototype)==null?void 0:e.constructor)===t};
RD.preload=function(t,e,n){let i=Array.isArray(e)?e:[e];return zG(xj(n),[t,...i])};
RD.clear=function(t,e){let n=Array.isArray(e)?e:[e];return NG([t,...n])};
var gde=1,nj=8,uE=32,ij=2,vde=268435456,yde={name:"@react-three/fiber",version:"9.7.0",description:"A React renderer for Threejs",keywords:["react","renderer","fiber","three","threejs"],author:"Paul Henschel (https://github.com/drcmda)",license:"MIT",maintainers:["Josh Ellis (https://github.com/joshuaellis)","Cody Bennett (https://github.com/codyjasonbennett)","Kris Baumgarter (https://github.com/krispya)"],bugs:{url:"https://github.com/pmndrs/react-three-fiber/issues"},homepage:"https://github.com/pmndrs/react-three-fiber#readme",repository:{type:"git",url:"git+https://github.com/pmndrs/react-three-fiber.git"},collective:{type:"opencollective",url:"https://opencollective.com/react-three-fiber"},main:"dist/react-three-fiber.cjs.js",module:"dist/react-three-fiber.esm.js",types:"dist/react-three-fiber.cjs.d.ts","react-native":"native/dist/react-three-fiber-native.cjs.js",sideEffects:!1,preconstruct:{entrypoints:["index.tsx","native.tsx"]},scripts:{prebuild:"cp ../../readme.md readme.md"},devDependencies:{"@types/react-reconciler":"^0.32.3","react-reconciler":"^0.33.0"},dependencies:{"@babel/runtime":"^7.17.8","@types/webxr":"*","base64-js":"^1.5.1",buffer:"^6.0.3","its-fine":"^2.0.0","react-use-measure":"^2.1.7",scheduler:"^0.27.0","suspend-react":"^0.1.3","use-sync-external-store":"^1.4.0",zustand:"^5.0.3"},peerDependencies:{expo:">=43.0","expo-asset":">=8.4","expo-file-system":">=11.0","expo-gl":">=11.0",react:">=19 <19.3","react-dom":">=19 <19.3","react-native":">=0.78",three:">=0.156"},peerDependenciesMeta:{"react-dom":{optional:!0},"react-native":{optional:!0},expo:{optional:!0},"expo-asset":{optional:!0},"expo-file-system":{optional:!0},"expo-gl":{optional:!0}}};
var rj={exports:{}},bD={exports:{}};
bD.exports;
var oj;
var xde={exports:{}};
xde.exports;
var aj;
var wde=Sde(),Tde=_de(wde);
var Sj=0,vg={},Mde=/^three(?=[A-Z])/,vE=t=>`${t[0].toUpperCase()}${t.slice(1)}`,Ade=0,Cde=t=>typeof t=="function";
var pb=[];
var dD=()=>{},lj={},lE=Sj;
var hE=Ede({isPrimaryRenderer:!1,warnsIfNotActing:!1,supportsMutation:!0,supportsPersistence:!1,supportsHydration:!1,createInstance:Rde,removeChild:xD,appendChild:fD,appendInitialChild:fD,insertBefore:sj,appendChildToContainer(t,e){let n=t.getState().scene.__r3f;!e||!n||fD(n,e)},removeChildFromContainer(t,e){let n=t.getState().scene.__r3f;!e||!n||xD(n,e)},insertInContainerBefore(t,e,n){let i=t.getState().scene.__r3f;!e||!n||!i||sj(i,e,n)},getRootHostContext:()=>lj,getChildHostContext:()=>lj,commitUpdate(t,e,n,i,r){var o,a,s;wj(e,i);let l=!1;if((t.type==="primitive"&&n.object!==i.object||((o=i.args)==null?void 0:o.length)!==((a=n.args)==null?void 0:a.length)||(s=i.args)!=null&&s.some((u,f)=>{var c;return u!==((c=n.args)==null?void 0:c[f])}))&&(l=!0),l)pb.push([t,yD(i),r]);else{let u=lde(t,i),f=t.props.attach;t.props=yD(i),f!==void 0?t.props.attach=f:delete t.props.attach,Object.keys(u).length&&Ou(t.object,u)}},finalizeInitialChildren:()=>!1,commitMount(){},getPublicInstance:t=>t==null?void 0:t.object,prepareForCommit:()=>null,preparePortalMount:t=>cE(t.getState().scene,t,"",{}),resetAfterCommit:Pde,shouldSetTextContent:()=>!1,clearContainer:()=>!1,hideInstance:kde,unhideInstance:Tj,createTextInstance:dD,hideTextInstance:dD,unhideTextInstance:dD,supportsMicrotasks:!0,scheduleMicrotask:Nde,scheduleTimeout:typeof setTimeout=="function"?setTimeout:void 0,cancelTimeout:typeof clearTimeout=="function"?clearTimeout:void 0,noTimeout:-1,getInstanceFromNode:()=>null,beforeActiveInstanceBlur(){},afterActiveInstanceBlur(){},detachDeletedInstance(){},prepareScopeUpdate(){},getInstanceFromScope:()=>null,shouldAttemptEagerTransition:()=>!1,trackSchedulerEvent:()=>{},resolveEventType:()=>null,resolveEventTimeStamp:()=>-1.1,requestPostPaintCallback(){},maySuspendCommit:()=>!1,preloadInstance:()=>!0,suspendInstance(){},waitForCommitToBeReady:()=>null,NotPendingTransition:null,HostTransitionContext:di.createContext(null),setCurrentUpdatePriority(t){lE=t},getCurrentUpdatePriority(){return lE},resolveUpdatePriority(){var t;if(lE!==Sj)return lE;let e=typeof window!="undefined"?(t=window.event)==null?void 0:t.type:void 0;return e===void 0?uE:zde(e)},resetFormInstance(){},rendererPackageName:"@react-three/fiber",rendererVersion:yde.version,applyViewTransitionName(t,e,n){},restoreViewTransitionName(t,e){},cancelViewTransitionName(t,e,n){},cancelRootViewTransitionName(t){},restoreRootViewTransitionName(t){},InstanceMeasurement:null,measureInstance:t=>null,wasInstanceInViewport:t=>!0,hasInstanceChanged:(t,e)=>!1,hasInstanceAffectedParent:(t,e)=>!1,suspendOnActiveViewTransition(t,e){},startGestureTransition:()=>null,startViewTransition:()=>null,stopViewTransition(t){},createViewTransitionInstance:t=>null,getCurrentGestureOffset(t){throw new Error("startGestureTransition is not yet supported in react-three-fiber.")},cloneMutableInstance(t,e){return t},cloneMutableTextInstance(t){return t},cloneRootViewTransitionContainer(t){throw new Error("Not implemented.")},removeRootViewTransitionClone(t,e){throw new Error("Not implemented.")},createFragmentInstance:t=>null,updateFragmentInstanceFiber(t,e){},commitNewChildToFragmentInstance(t,e){},deleteChildFromFragmentInstance(t,e){},measureClonedInstance:t=>null,maySuspendCommitOnUpdate:(t,e,n)=>!1,maySuspendCommitInSyncRender:(t,e)=>!1,startSuspendingCommit:()=>null,getSuspendedCommitReason:(t,e)=>null}),fl=new Map,hg={objects:"shallow",strict:!1};
var Lde=new Set,$de=new Set,Fde=new Set;
var pD,mD;
var pE=!1,wD=!1,gD,uj,pg;
var vD={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};
var Ro=kt(Wn());
_i();
var Fa=kt(Wn(),1);
var Vde=["x","y","top","bottom","left","right","width","height"],Gde=(t,e)=>Vde.every(n=>t[n]===e[n]);
var Bl=kt(ii());
var Wwe=kt(oE());
var zD=new Set,Ij=new WeakSet;
var U={};
qs(U,{$brand:()=>qD,$input:()=>bN,$output:()=>_N,INVALID:()=>Po,NEVER:()=>XD,TimePrecision:()=>IN,ZodAny:()=>bU,ZodArray:()=>TU,ZodBase64:()=>mA,ZodBase64URL:()=>gA,ZodBigInt:()=>nv,ZodBigIntFormat:()=>_A,ZodBoolean:()=>tv,ZodCIDRv4:()=>hA,ZodCIDRv6:()=>pA,ZodCUID:()=>aA,ZodCUID2:()=>sA,ZodCatch:()=>jU,ZodCodec:()=>sx,ZodCompileAsyncError:()=>hl,ZodCompileUnsupportedError:()=>ln,ZodCreditCard:()=>dU,ZodCustom:()=>lx,ZodCustomStringFormat:()=>zh,ZodDate:()=>tx,ZodDefault:()=>$U,ZodDiscriminatedUnion:()=>MU,ZodE164:()=>vA,ZodEmail:()=>nA,ZodEmoji:()=>rA,ZodEnum:()=>Jg,ZodError:()=>ave,ZodExactOptional:()=>wA,ZodFile:()=>NU,ZodFirstPartyTypeKind:()=>oL,ZodFunction:()=>tL,ZodGUID:()=>iA,ZodIBAN:()=>hU,ZodIPv4:()=>fA,ZodIPv6:()=>dA,ZodISODate:()=>mf,ZodISODateTime:()=>pf,ZodISODuration:()=>vf,ZodISOTime:()=>gf,ZodInstanceOf:()=>rL,ZodIntersection:()=>AU,ZodIssueCode:()=>uve,ZodJWT:()=>yA,ZodKSUID:()=>cA,ZodLazy:()=>JU,ZodLiteral:()=>zU,ZodMAC:()=>fU,ZodMap:()=>PU,ZodNaN:()=>ZU,ZodNanoID:()=>oA,ZodNever:()=>SU,ZodNonOptional:()=>TA,ZodNull:()=>yU,ZodNullable:()=>LU,ZodNumber:()=>ev,ZodNumberFormat:()=>Nh,ZodObject:()=>ix,ZodOptional:()=>ox,ZodPipe:()=>ax,ZodPrefault:()=>BU,ZodPreprocess:()=>XU,ZodPromise:()=>eL,ZodReadonly:()=>qU,ZodRealError:()=>la,ZodRecord:()=>Kg,ZodSet:()=>DU,ZodString:()=>Qg,ZodStringFormat:()=>Bn,ZodSuccess:()=>GU,ZodSymbol:()=>gU,ZodTemplateLiteral:()=>KU,ZodTransform:()=>OU,ZodTuple:()=>RU,ZodType:()=>tn,ZodULID:()=>lA,ZodURL:()=>ex,ZodUUID:()=>Wl,ZodUndefined:()=>vU,ZodUnion:()=>rx,ZodUnknown:()=>xU,ZodVoid:()=>wU,ZodXID:()=>uA,ZodXor:()=>EU,_ZodString:()=>tA,_default:()=>FU,_function:()=>mZ,any:()=>WW,array:()=>nx,base64:()=>MW,base64url:()=>AW,bigint:()=>BW,boolean:()=>mU,catch:()=>WU,check:()=>gZ,cidrv4:()=>TW,cidrv6:()=>EW,clone:()=>Nn,codec:()=>fZ,coerce:()=>EA,compile:()=>TN,config:()=>Ui,core:()=>jl,creditCard:()=>RW,cuid:()=>gW,cuid2:()=>vW,currencyCode:()=>NW,custom:()=>vZ,date:()=>XW,decode:()=>rU,decodeAsync:()=>aU,deepPartial:()=>kZ,describe:()=>yZ,discriminatedUnion:()=>eZ,e164:()=>CW,email:()=>aW,emoji:()=>pW,encode:()=>iU,encodeAsync:()=>oU,endsWith:()=>Fg,enum:()=>xA,exactOptional:()=>UU,file:()=>sZ,flattenError:()=>Tb,float32:()=>UW,float64:()=>LW,formatError:()=>Eb,fromJSONSchema:()=>CZ,function:()=>mZ,getDiscriminatedOption:()=>Zz,getErrorMap:()=>fve,globalRegistry:()=>jr,gt:()=>Vl,gte:()=>Va,guid:()=>sW,hash:()=>OW,hex:()=>zW,hostname:()=>DW,httpUrl:()=>hW,iban:()=>kW,includes:()=>Lg,input:()=>PZ,instanceof:()=>bZ,int:()=>QM,int32:()=>$W,int64:()=>HW,intersection:()=>CU,invertCodec:()=>dZ,ipv4:()=>xW,ipv6:()=>wW,iso:()=>ov,json:()=>SZ,jwt:()=>IW,keyof:()=>qW,ksuid:()=>bW,lazy:()=>QU,length:()=>Rh,literal:()=>aZ,locales:()=>Sh,looseObject:()=>JW,looseRecord:()=>nZ,lowercase:()=>Og,lt:()=>Hl,lte:()=>Ha,mac:()=>SW,map:()=>iZ,maxLength:()=>Ch,maxSize:()=>cf,memoizer:()=>Vb,meta:()=>_Z,mime:()=>Hg,minLength:()=>Bu,minSize:()=>Gl,multipleOf:()=>uf,nan:()=>cZ,nanoid:()=>mW,nativeEnum:()=>oZ,negative:()=>HM,never:()=>bA,nonnegative:()=>GM,nonoptional:()=>VU,nonpositive:()=>VM,normalize:()=>Vg,null:()=>_U,nullable:()=>Qb,nullish:()=>lZ,number:()=>pU,object:()=>YW,optional:()=>Ph,output:()=>DZ,overwrite:()=>pl,parse:()=>QO,parseAsync:()=>eU,partialRecord:()=>tZ,pipe:()=>eA,positive:()=>BM,prefault:()=>HU,preprocess:()=>wZ,prettifyError:()=>e3,promise:()=>pZ,properties:()=>Bg,property:()=>jM,readonly:()=>YU,record:()=>IU,refine:()=>nL,regex:()=>Ng,regexes:()=>Ba,registry:()=>gM,safeDecode:()=>lU,safeDecodeAsync:()=>cU,safeEncode:()=>sU,safeEncodeAsync:()=>uU,safeParse:()=>tU,safeParseAsync:()=>nU,set:()=>rZ,setErrorMap:()=>cve,size:()=>Ah,slugify:()=>Zg,startsWith:()=>$g,strictObject:()=>KW,string:()=>Jb,stringFormat:()=>PW,stringbool:()=>xZ,success:()=>uZ,superRefine:()=>iL,symbol:()=>GW,templateLiteral:()=>hZ,toJSONSchema:()=>qM,toLowerCase:()=>jg,toUpperCase:()=>Wg,toZod:()=>mb,transform:()=>SA,treeifyError:()=>QD,trim:()=>Gg,tuple:()=>kU,uint32:()=>FW,uint64:()=>VW,ulid:()=>yW,undefined:()=>jW,union:()=>iv,unknown:()=>Ih,uppercase:()=>Ug,url:()=>dW,util:()=>Se,uuid:()=>lW,uuidv4:()=>uW,uuidv6:()=>cW,uuidv7:()=>fW,validate:()=>Mb,validateAsync:()=>Ab,void:()=>ZW,withParser:()=>vM,xid:()=>_W,xor:()=>QW});
var jl={};
qs(jl,{$ZodAny:()=>$z,$ZodArray:()=>Gz,$ZodAsyncError:()=>aa,$ZodBase64:()=>Az,$ZodBase64URL:()=>Cz,$ZodBigInt:()=>nM,$ZodBigIntFormat:()=>Nz,$ZodBoolean:()=>Ub,$ZodCIDRv4:()=>Ez,$ZodCIDRv6:()=>Mz,$ZodCUID:()=>hz,$ZodCUID2:()=>pz,$ZodCatch:()=>uN,$ZodCheck:()=>Zn,$ZodCheckBigIntFormat:()=>F3,$ZodCheckEndsWith:()=>J3,$ZodCheckGreaterThan:()=>FE,$ZodCheckIncludes:()=>Y3,$ZodCheckLengthEquals:()=>W3,$ZodCheckLessThan:()=>$E,$ZodCheckLowerCase:()=>X3,$ZodCheckMaxLength:()=>G3,$ZodCheckMaxSize:()=>B3,$ZodCheckMimeType:()=>tz,$ZodCheckMinLength:()=>j3,$ZodCheckMinSize:()=>H3,$ZodCheckMultipleOf:()=>L3,$ZodCheckNumberFormat:()=>$3,$ZodCheckOverwrite:()=>nz,$ZodCheckProperties:()=>ez,$ZodCheckProperty:()=>Q3,$ZodCheckRegex:()=>Z3,$ZodCheckSizeEquals:()=>V3,$ZodCheckStartsWith:()=>K3,$ZodCheckStringFormat:()=>kg,$ZodCheckUpperCase:()=>q3,$ZodCodec:()=>$b,$ZodCreditCard:()=>kz,$ZodCustom:()=>gN,$ZodCustomStringFormat:()=>Dz,$ZodCyclicError:()=>uM,$ZodDate:()=>Vz,$ZodDefault:()=>oN,$ZodDiscriminatedUnion:()=>Xz,$ZodE164:()=>Rz,$ZodEmail:()=>sz,$ZodEmoji:()=>fz,$ZodEncodeError:()=>lf,$ZodEnum:()=>Qz,$ZodError:()=>JD,$ZodExactOptional:()=>iN,$ZodFile:()=>tN,$ZodFunction:()=>pN,$ZodGUID:()=>oz,$ZodIBAN:()=>Iz,$ZodIPv4:()=>Sz,$ZodIPv6:()=>wz,$ZodISODate:()=>_z,$ZodISODateTime:()=>yz,$ZodISODuration:()=>xz,$ZodISOTime:()=>bz,$ZodIntersection:()=>qz,$ZodJWT:()=>Pz,$ZodKSUID:()=>vz,$ZodLazy:()=>Fb,$ZodLiteral:()=>eN,$ZodMAC:()=>Tz,$ZodMap:()=>Kz,$ZodNaN:()=>cN,$ZodNanoID:()=>dz,$ZodNever:()=>Bz,$ZodNonOptional:()=>sN,$ZodNull:()=>Lz,$ZodNullable:()=>rN,$ZodNumber:()=>tM,$ZodNumberFormat:()=>zz,$ZodObject:()=>g9,$ZodObjectJIT:()=>jz,$ZodOptional:()=>rM,$ZodPipe:()=>oM,$ZodPrefault:()=>aN,$ZodPreprocess:()=>fN,$ZodPromise:()=>mN,$ZodReadonly:()=>dN,$ZodRealError:()=>sa,$ZodRecord:()=>Yz,$ZodRegistry:()=>mM,$ZodSet:()=>Jz,$ZodString:()=>xh,$ZodStringFormat:()=>On,$ZodSuccess:()=>lN,$ZodSymbol:()=>Oz,$ZodTemplateLiteral:()=>hN,$ZodTransform:()=>nN,$ZodTuple:()=>iM,$ZodType:()=>Bt,$ZodULID:()=>mz,$ZodURL:()=>cz,$ZodUUID:()=>az,$ZodUndefined:()=>Uz,$ZodUnion:()=>Lb,$ZodUnknown:()=>Fz,$ZodVoid:()=>Hz,$ZodXID:()=>gz,$ZodXor:()=>Wz,$brand:()=>qD,$constructor:()=>Q,$input:()=>bN,$output:()=>_N,Doc:()=>bh,INVALID:()=>Po,JSONSchema:()=>JO,JSONSchemaGenerator:()=>YM,NEVER:()=>XD,TimePrecision:()=>IN,URL_BAD_FORMAT:()=>lz,URL_UNPARSEABLE:()=>Pb,ZodCompileAsyncError:()=>hl,ZodCompileUnsupportedError:()=>ln,_any:()=>XN,_array:()=>tO,_base64:()=>UM,_base64url:()=>LM,_bigint:()=>BN,_boolean:()=>$N,_catch:()=>qge,_check:()=>H7,_cidrv4:()=>NM,_cidrv6:()=>OM,_coercedBigint:()=>HN,_coercedBoolean:()=>FN,_coercedDate:()=>QN,_coercedNumber:()=>DN,_coercedString:()=>AN,_creditCard:()=>RN,_cuid:()=>CM,_cuid2:()=>RM,_custom:()=>iO,_date:()=>JN,_decode:()=>CE,_decodeAsync:()=>kE,_default:()=>Wge,_discriminatedUnion:()=>zge,_e164:()=>$M,_email:()=>bM,_emoji:()=>MM,_encode:()=>AE,_encodeAsync:()=>RE,_endsWith:()=>Fg,_enum:()=>Fge,_file:()=>nO,_float32:()=>NN,_float64:()=>ON,_gt:()=>Vl,_gte:()=>Va,_guid:()=>xM,_iban:()=>kN,_includes:()=>Lg,_int:()=>zN,_int32:()=>UN,_int64:()=>VN,_intersection:()=>Nge,_ipv4:()=>DM,_ipv6:()=>zM,_isoDate:()=>Zb,_isoDateTime:()=>Wb,_isoDuration:()=>qb,_isoTime:()=>Xb,_jwt:()=>FM,_ksuid:()=>PM,_lazy:()=>Qge,_length:()=>Rh,_literal:()=>Hge,_lowercase:()=>Og,_lt:()=>Hl,_lte:()=>Ha,_mac:()=>CN,_map:()=>Lge,_max:()=>Ha,_maxLength:()=>Ch,_maxSize:()=>cf,_mime:()=>Hg,_min:()=>Va,_minLength:()=>Bu,_minSize:()=>Gl,_multipleOf:()=>uf,_nan:()=>eO,_nanoid:()=>AM,_nativeEnum:()=>Bge,_negative:()=>HM,_never:()=>YN,_nonnegative:()=>GM,_nonoptional:()=>Zge,_nonpositive:()=>VM,_normalize:()=>Vg,_null:()=>ZN,_nullable:()=>jge,_number:()=>PN,_optional:()=>Gge,_overwrite:()=>pl,_parse:()=>Mg,_parseAsync:()=>Ag,_pipe:()=>Yge,_positive:()=>BM,_promise:()=>eve,_properties:()=>Bg,_property:()=>jM,_readonly:()=>Kge,_record:()=>Uge,_refine:()=>rO,_regex:()=>Ng,_safeDecode:()=>PE,_safeDecodeAsync:()=>zE,_safeEncode:()=>IE,_safeEncodeAsync:()=>DE,_safeParse:()=>Cg,_safeParseAsync:()=>Rg,_set:()=>$ge,_size:()=>Ah,_slugify:()=>Zg,_startsWith:()=>$g,_string:()=>MN,_stringFormat:()=>kh,_stringbool:()=>lO,_success:()=>Xge,_superRefine:()=>oO,_symbol:()=>jN,_templateLiteral:()=>Jge,_toLowerCase:()=>jg,_toUpperCase:()=>Wg,_transform:()=>Vge,_trim:()=>Gg,_tuple:()=>Oge,_uint32:()=>LN,_uint64:()=>GN,_ulid:()=>kM,_undefined:()=>WN,_union:()=>Pge,_unknown:()=>qN,_uppercase:()=>Ug,_url:()=>jb,_uuid:()=>SM,_uuidv4:()=>wM,_uuidv6:()=>TM,_uuidv7:()=>EM,_void:()=>KN,_xid:()=>IM,_xor:()=>Dge,base64Charset:()=>YE,base64urlCharset:()=>Ob,canParseURL:()=>uz,clone:()=>Nn,compile:()=>TN,compileFn:()=>yM,config:()=>Ui,createStandardJSONSchemaMethod:()=>Xg,createToJSONSchemaMethod:()=>cO,decode:()=>Ohe,decodeAsync:()=>Lhe,describe:()=>aO,encode:()=>Nhe,encodeAsync:()=>Uhe,extractDefs:()=>df,finalize:()=>hf,flattenError:()=>Tb,formatError:()=>Eb,getDiscriminatedOption:()=>Zz,globalConfig:()=>zr,globalRegistry:()=>jr,handleUnrepresentable:()=>xr,initializeContext:()=>ff,isBackEdge:()=>fM,isRecursiveSchema:()=>cM,isValidBase64:()=>Nb,isValidBase64URL:()=>KE,isValidCIDRv6:()=>qE,isValidCreditCard:()=>JE,isValidIBAN:()=>QE,isValidIPv6:()=>zb,isValidJWT:()=>eM,locales:()=>Sh,memoizer:()=>Vb,mergeValues:()=>Ig,meta:()=>sO,parse:()=>EE,parseAsync:()=>ME,parseURLObject:()=>h9,prettifyError:()=>e3,process:()=>Un,processSchema:()=>Un,regexes:()=>Ba,registry:()=>gM,safeDecode:()=>Fhe,safeDecodeAsync:()=>Hhe,safeEncode:()=>$he,safeEncodeAsync:()=>Bhe,safeParse:()=>khe,safeParseAsync:()=>Ihe,standardProps:()=>jE,stripTabAndNewline:()=>Db,toDotPath:()=>Wj,toJSONSchema:()=>qM,toZod:()=>mb,treeifyError:()=>QD,urlHostnameOk:()=>ZE,urlProtocolOk:()=>XE,util:()=>Se,validate:()=>Mb,validateAsync:()=>Ab,validateURL:()=>WE,version:()=>iz,withParser:()=>vM});
var Se={};
qs(Se,{BIGINT_FORMAT_RANGES:()=>bb,CONSTANT_CATCH:()=>wE,Class:()=>LD,NUMBER_FORMAT_RANGES:()=>_b,aborted:()=>Io,allowsEval:()=>BD,assert:()=>Yde,assertEqual:()=>Wde,assertIs:()=>Xde,assertNever:()=>qde,assertNotEqual:()=>Zde,assignProp:()=>Gr,attachSchema:()=>SE,base64ToUint8Array:()=>$j,base64urlToUint8Array:()=>mhe,cached:()=>wg,captureStackTrace:()=>bE,cleanEnum:()=>phe,cleanRegex:()=>$u,clone:()=>Nn,cloneDef:()=>Qde,codePointLength:()=>yh,constantCatch:()=>WD,createTransparentProxy:()=>ohe,defineLazy:()=>$D,defineLazyInternal:()=>on,derived:()=>_he,esc:()=>ko,escapeRegex:()=>Ts,explicitlyAborted:()=>GD,extend:()=>lhe,finalizeIssue:()=>oa,floatSafeRemainder:()=>gb,getElementAtPath:()=>ehe,getEnumValues:()=>xg,getLengthableOrigin:()=>Sb,getParsedType:()=>rhe,getSizableOrigin:()=>xb,hexToUint8Array:()=>vhe,hide:()=>wb,installLazyProp:()=>whe,isObject:()=>vh,isPlainObject:()=>ws,issue:()=>Eg,joinValues:()=>te,jsonStringifyReplacer:()=>Sg,members:()=>jD,merge:()=>che,mergeDefs:()=>dl,normalizeParams:()=>$e,nullish:()=>_E,numKeys:()=>ihe,objectClone:()=>Kde,omit:()=>she,optionalKeys:()=>VD,own:()=>sf,parsedType:()=>Me,partial:()=>fhe,pick:()=>ahe,prefixIssues:()=>ra,primitiveTypes:()=>HD,promiseAllObject:()=>the,propertyKeyTypes:()=>yb,randomString:()=>nhe,rawShape:()=>Tg,required:()=>dhe,safeExtend:()=>uhe,shallowClone:()=>vb,slugify:()=>FD,stringifyPrimitive:()=>Ee,toZod:()=>mb,uint8ArrayToBase64:()=>Fj,uint8ArrayToBase64url:()=>ghe,uint8ArrayToHex:()=>yhe,unwrapMessage:()=>bg});
var UD=class{constructor(e){this._getter=e,this._value=void 0}get value(){let e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}};
var Nj=Symbol("evaluating");
var bE="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};
var BD=wg(()=>{var t;if(zr.jitless||typeof navigator!="undefined"&&((t=navigator==null?void 0:navigator.userAgent)!=null&&t.includes("Cloudflare")))return!1;try{let e=Function;return new e(""),!0}catch(e){return!1}});
var rhe=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map!="undefined"&&t instanceof Map?"map":typeof Set!="undefined"&&t instanceof Set?"set":typeof Date!="undefined"&&t instanceof Date?"date":typeof File!="undefined"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},yb=new Set(["string","number","symbol"]),HD=new Set(["string","number","bigint","boolean","symbol","undefined"]);
var _b={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},bb={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};
var hhe=/[\uD800-\uDBFF]/;
var LD=class{constructor(...e){}};
var OD,af=!1,She={configurable:!0,get(){af=!0}};
var wE="~constantCatch";
var Bj,XD=Object.freeze({status:"aborted"}),ZD={value:void 0,enumerable:!1},Hj="captureStackTrace"in Error?Error:null;
var qD=Symbol("zod_brand"),aa=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},lf=class extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}},Vj;
(Vj=(Bj=globalThis).__zod_globalConfig)!=null||(Bj.__zod_globalConfig={});
var zr=globalThis.__zod_globalConfig;
var Ahe={get:Ehe,set:Mhe,enumerable:!0,configurable:!0},KD={value:void 0,enumerable:!1},Gj=new WeakSet([Object.prototype,Error.prototype]),jj=(t,e)=>{t.name="$ZodError",KD.value=e,Object.defineProperty(t,"issues",KD),KD.value=void 0,Object.defineProperty(t,"message",Ahe);let n=Object.getPrototypeOf(t);Gj.has(n)||(Gj.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){let i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},JD=Q("$ZodError",jj),sa=Q("$ZodError",jj,void 0,{Parent:Error});
var Mg=t=>{let e=(n,i,r,o)=>{var l,u;let a=r?be(H({},r),{async:!1}):{async:!1},s=n._zod.run({value:i,issues:[]},a);if(s instanceof Promise)throw new aa;if(s.issues.length){let f=new((l=o==null?void 0:o.Err)!=null?l:t)(s.issues.map(c=>oa(c,a,Ui())));throw bE(f,(u=o==null?void 0:o.callee)!=null?u:e),f}return s.value};return e},EE=Mg(sa),Ag=t=>{let e=async(n,i,r,o)=>{var l,u;let a=r?be(H({},r),{async:!0}):{async:!0},s=n._zod.run({value:i,issues:[]},a);if(s instanceof Promise&&(s=await s),s.issues.length){let f=new((l=o==null?void 0:o.Err)!=null?l:t)(s.issues.map(c=>oa(c,a,Ui())));throw bE(f,(u=o==null?void 0:o.callee)!=null?u:e),f}return s.value};return e},ME=Ag(sa),Cg=t=>(e,n,i)=>{let r=i?be(H({},i),{async:!1}):{async:!1},o=e._zod.run({value:n,issues:[]},r);if(o instanceof Promise)throw new aa;return o.issues.length?Zj(t,o.issues,r):{success:!0,data:o.value}},khe=Cg(sa);
var Rg=t=>async(e,n,i)=>{let r=i?be(H({},i),{async:!0}):{async:!0},o=e._zod.run({value:n,issues:[]},r);return o instanceof Promise&&(o=await o),o.issues.length?Zj(t,o.issues,r):{success:!0,data:o.value}},Ihe=Rg(sa),Phe=Symbol.for("zod.compile.invalid"),Dhe=Symbol.for("zod.compile.fallback"),Mb=((t,e,n)=>{let i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==Phe)return!0;if(i.definite===!0&&n===void 0)return!1}return zhe(t,e,n)});
var Ab=async(t,e,n)=>{let i=n?be(H({},n),{async:!0,abortEarly:!0}):{async:!0,abortEarly:!0},r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},AE=t=>{let e=Mg(t),n=(i,r,o,a)=>{let s=o?be(H({},o),{direction:"backward"}):{direction:"backward"};return e(i,r,s,TE(n,a))};return n},Nhe=AE(sa),CE=t=>{let e=Mg(t),n=(i,r,o,a)=>e(i,r,o,TE(n,a));return n},Ohe=CE(sa),RE=t=>{let e=Ag(t),n=async(i,r,o,a)=>{let s=o?be(H({},o),{direction:"backward"}):{direction:"backward"};return await e(i,r,s,TE(n,a))};return n},Uhe=RE(sa),kE=t=>{let e=Ag(t),n=async(i,r,o,a)=>await e(i,r,o,TE(n,a));return n},Lhe=kE(sa),IE=t=>(e,n,i)=>{let r=i?be(H({},i),{direction:"backward"}):{direction:"backward"};return Cg(t)(e,n,r)},$he=IE(sa),PE=t=>(e,n,i)=>Cg(t)(e,n,i),Fhe=PE(sa),DE=t=>async(e,n,i)=>{let r=i?be(H({},i),{direction:"backward"}):{direction:"backward"};return Rg(t)(e,n,r)},Bhe=DE(sa),zE=t=>async(e,n,i)=>Rg(t)(e,n,i),Hhe=zE(sa);
var Ba={};
qs(Ba,{anyString:()=>A3,base64:()=>y3,base64url:()=>_3,bigint:()=>R3,boolean:()=>k3,browserEmail:()=>Yhe,cidrv4:()=>g3,cidrv6:()=>v3,creditCard:()=>NE,cuid:()=>n3,cuid2:()=>i3,currencyCode:()=>w3,date:()=>T3,datetime:()=>M3,domain:()=>x3,duration:()=>u3,e164:()=>S3,email:()=>f3,emoji:()=>d3,extendedDuration:()=>Vhe,guid:()=>c3,hex:()=>N3,hostname:()=>b3,html5Email:()=>Zhe,httpProtocol:()=>Cb,iban:()=>OE,idnEmail:()=>qhe,integer:()=>Rb,ipv4:()=>h3,ipv6:()=>p3,ksuid:()=>a3,lowercase:()=>D3,mac:()=>m3,md5_base64:()=>epe,md5_base64url:()=>tpe,md5_hex:()=>Qhe,nanoid:()=>s3,nanoidOfLength:()=>l3,null:()=>I3,number:()=>Fu,rfc5322Email:()=>Xhe,sha1_base64:()=>ipe,sha1_base64url:()=>rpe,sha1_hex:()=>npe,sha256_base64:()=>ape,sha256_base64url:()=>spe,sha256_hex:()=>ope,sha384_base64:()=>upe,sha384_base64url:()=>cpe,sha384_hex:()=>lpe,sha512_base64:()=>dpe,sha512_base64url:()=>hpe,sha512_hex:()=>fpe,string:()=>C3,time:()=>E3,ulid:()=>r3,undefined:()=>P3,unicodeEmail:()=>Xj,uppercase:()=>z3,uuid:()=>_h,uuid4:()=>Ghe,uuid6:()=>jhe,uuid7:()=>Whe,xid:()=>o3});
var n3=/^[cC][0-9a-z]{6,}$/,i3=/^[0-9a-z]+$/,r3=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,o3=/^[0-9a-vA-V]{20}$/,a3=/^[A-Za-z0-9]{27}$/,s3=/^[a-zA-Z0-9_-]{21}$/;
var u3=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Vhe=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,c3=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,_h=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Ghe=_h(4),jhe=_h(6),Whe=_h(7),f3=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,Zhe=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Xhe=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Xj=/^[^\s@"]{1,64}@[^\s@]{1,255}$/u,qhe=Xj,Yhe=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Khe="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
var h3=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,p3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,m3=t=>{let e=Ts(t!=null?t:":");return new RegExp(`^(?:[0-9A-F]{2}${e}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${e}){5}[0-9a-f]{2}$`)},g3=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,v3=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,y3=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,_3=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,b3=/^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,x3=/^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/,Cb=/^https?$/,S3=/^\+[1-9]\d{6,14}$/,NE=/^\d(?:[ -]?\d){11,18}$/,w3=/^(?:AED|AFN|ALL|AMD|AOA|ARS|AUD|AWG|AZN|BAM|BBD|BDT|BHD|BIF|BMD|BND|BOB|BOV|BRL|BSD|BTN|BWP|BYN|BZD|CAD|CDF|CHE|CHF|CHW|CLF|CLP|CNY|COP|COU|CRC|CUP|CVE|CZK|DJF|DKK|DOP|DZD|EGP|ERN|ETB|EUR|FJD|FKP|GBP|GEL|GHS|GIP|GMD|GNF|GTQ|GYD|HKD|HNL|HTG|HUF|IDR|ILS|INR|IQD|IRR|ISK|JMD|JOD|JPY|KES|KGS|KHR|KMF|KPW|KRW|KWD|KYD|KZT|LAK|LBP|LKR|LRD|LSL|LYD|MAD|MDL|MGA|MKD|MMK|MNT|MOP|MRU|MUR|MVR|MWK|MXN|MXV|MYR|MZN|NAD|NGN|NIO|NOK|NPR|NZD|OMR|PAB|PEN|PGK|PHP|PKR|PLN|PYG|QAR|RON|RSD|RUB|RWF|SAR|SBD|SCR|SDG|SEK|SGD|SHP|SLE|SOS|SRD|SSP|STN|SVC|SYP|SZL|THB|TJS|TMT|TND|TOP|TRY|TTD|TWD|TZS|UAH|UGX|USD|USN|UYI|UYU|UYW|UZS|VED|VES|VND|VUV|WST|XAD|XAF|XAG|XAU|XBA|XBB|XBC|XBD|XCD|XCG|XDR|XOF|XPD|XPF|XPT|XSU|XTS|XUA|XXX|YER|ZAR|ZMW|ZWG)$/,OE=/^[A-Z]{2}(?!00|01|99)\d{2}[A-Z0-9]{11,30}$/,qj="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
var T3=Jhe(qj);
var A3=/^[\s\S]{0,}$/,C3=t=>{var n,i;let e=t?`[\\s\\S]{${(n=t==null?void 0:t.minimum)!=null?n:0},${(i=t==null?void 0:t.maximum)!=null?i:""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},R3=/^-?\d+n?$/,Rb=/^-?\d+$/,Fu=/^-?\d+(?:\.\d+)?$/,k3=/^(?:true|false)$/i,I3=/^null$/i;
var P3=/^undefined$/i;
var D3=/^[^A-Z]*$/,z3=/^[^a-z]*$/,N3=/^[0-9a-fA-F]*$/;
var Qhe=/^[0-9a-fA-F]{32}$/,epe=kb(22,"=="),tpe=Ib(22),npe=/^[0-9a-fA-F]{40}$/,ipe=kb(27,"="),rpe=Ib(27),ope=/^[0-9a-fA-F]{64}$/,ape=kb(43,"="),spe=Ib(43),lpe=/^[0-9a-fA-F]{96}$/,upe=kb(64,""),cpe=Ib(64),fpe=/^[0-9a-fA-F]{128}$/,dpe=kb(86,"=="),hpe=Ib(86);
var Zn=Q("$ZodCheck",(t,e)=>{var i,r;var n;(i=t._zod)!=null||(t._zod={}),t._zod.def=e,(r=(n=t._zod).onattach)!=null||(n.onattach=[])}),O3=t=>{let e=t.value;return!_E(e)&&e.size!==void 0},U3=t=>{let e=t.value;return!_E(e)&&e.length!==void 0},UE={number:"number",bigint:"bigint",object:"date"},$E=Q("$ZodCheckLessThan",(t,e)=>{Zn.init(t,e);let n=UE[typeof e.value];t._zod.check=i=>{var r;(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:(r=UE[typeof i.value])!=null?r:n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),FE=Q("$ZodCheckGreaterThan",(t,e)=>{Zn.init(t,e);let n=UE[typeof e.value];t._zod.check=i=>{var r;(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:(r=UE[typeof i.value])!=null?r:n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),L3=Q("$ZodCheckMultipleOf",(t,e)=>{Zn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):gb(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),$3=Q("$ZodCheckNumberFormat",(t,e)=>{var a;Zn.init(t,e),e.format=e.format||"float64";let n=(a=e.format)==null?void 0:a.includes("int"),i=n?"int":"number",[r,o]=_b[e.format];t._zod.check=s=>{let l=s.value;if(n){if(!Number.isInteger(l)){s.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:l,inst:t});return}if(!Number.isSafeInteger(l)){l>0?s.issues.push({input:l,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):s.issues.push({input:l,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}l<r&&s.issues.push({origin:"number",input:l,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),l>o&&s.issues.push({origin:"number",input:l,code:"too_big",maximum:o,inclusive:!0,inst:t,continue:!e.abort})}}),F3=Q("$ZodCheckBigIntFormat",(t,e)=>{Zn.init(t,e);let[n,i]=bb[e.format];t._zod.check=r=>{let o=r.value;o<n&&r.issues.push({origin:"bigint",input:o,code:"too_small",minimum:n,inclusive:!0,inst:t,continue:!e.abort}),o>i&&r.issues.push({origin:"bigint",input:o,code:"too_big",maximum:i,inclusive:!0,inst:t,continue:!e.abort})}}),B3=Q("$ZodCheckMaxSize",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=O3),t._zod.check=r=>{let o=r.value;o.size<=e.maximum||r.issues.push({origin:xb(o),code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),H3=Q("$ZodCheckMinSize",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=O3),t._zod.check=r=>{let o=r.value;o.size>=e.minimum||r.issues.push({origin:xb(o),code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),V3=Q("$ZodCheckSizeEquals",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=O3),t._zod.check=r=>{let o=r.value,a=o.size;if(a===e.size)return;let s=a>e.size;r.issues.push(be(H({origin:xb(o)},s?{code:"too_big",maximum:e.size}:{code:"too_small",minimum:e.size}),{inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort}))}}),G3=Q("$ZodCheckMaxLength",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=U3),t._zod.check=r=>{let o=r.value,a=o.length;if((typeof o=="string"&&a>e.maximum?yh(o):a)<=e.maximum)return;let l=Sb(o);r.issues.push({origin:l,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),j3=Q("$ZodCheckMinLength",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=U3),t._zod.check=r=>{let o=r.value,a=o.length;if((typeof o=="string"&&a>=e.minimum&&a<e.minimum*2?yh(o):a)>=e.minimum)return;let l=Sb(o);r.issues.push({origin:l,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),W3=Q("$ZodCheckLengthEquals",(t,e)=>{var i;var n;Zn.init(t,e),(i=(n=t._zod.def).when)!=null||(n.when=U3),t._zod.check=r=>{let o=r.value,a=o.length,s=typeof o=="string"&&a>=e.length&&a<=e.length*2?yh(o):a;if(s===e.length)return;let l=Sb(o),u=s>e.length;r.issues.push(be(H({origin:l},u?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length}),{inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort}))}}),kg=Q("$ZodCheckStringFormat",(t,e)=>{var r,o;var n,i;Zn.init(t,e),e.pattern?(r=(n=t._zod).check)!=null||(n.check=a=>{e.pattern.lastIndex=0,!e.pattern.test(a.value)&&a.issues.push(be(H({origin:"string",code:"invalid_format",format:e.format,input:a.value},e.pattern?{pattern:e.pattern.toString()}:{}),{inst:t,continue:!e.abort}))}):(o=(i=t._zod).check)!=null||(i.check=()=>{})}),Z3=Q("$ZodCheckRegex",(t,e)=>{kg.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),X3=Q("$ZodCheckLowerCase",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=D3),kg.init(t,e)}),q3=Q("$ZodCheckUpperCase",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=z3),kg.init(t,e)}),Y3=Q("$ZodCheckIncludes",(t,e)=>{Zn.init(t,e);let n=Ts(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),K3=Q("$ZodCheckStartsWith",(t,e)=>{var i;Zn.init(t,e);let n=new RegExp(`^${Ts(e.prefix)}.*`);(i=e.pattern)!=null||(e.pattern=n),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),J3=Q("$ZodCheckEndsWith",(t,e)=>{var i;Zn.init(t,e);let n=new RegExp(`.*${Ts(e.suffix)}$`);(i=e.pattern)!=null||(e.pattern=n),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});
var Q3=Q("$ZodCheckProperty",(t,e)=>{Zn.init(t,e),t._zod.check=n=>{let i=e.schema._zod.run({value:n.value[e.property],issues:[]},{});if(i instanceof Promise)return i.then(r=>LE(r,n,e.property));LE(i,n,e.property)}}),ez=Q("$ZodCheckProperties",(t,e)=>{Zn.init(t,e),wb(t,Symbol.iterator,function*(){yield t});let n;t._zod.check=i=>{if(i.value==null){i.issues.push({expected:"object",code:"invalid_type",input:i.value,inst:t});return}n!=null||(n=Reflect.ownKeys(e.shape).map(a=>[a,e.shape[a]]));let r=i.value,o;for(let[a,s]of n){let l=s._zod.run({value:r[a],issues:[]},{});l instanceof Promise?(o!=null||(o=[]),o.push(l.then(u=>LE(u,i,a)))):LE(l,i,a)}if(o)return Promise.all(o).then(()=>{})}}),tz=Q("$ZodCheckMimeType",(t,e)=>{Zn.init(t,e);let n=new Set(e.mime);t._zod.check=i=>{n.has(i.value.type)||i.issues.push({code:"invalid_value",values:e.mime,input:i.value.type,inst:t,continue:!e.abort})}}),nz=Q("$ZodCheckOverwrite",(t,e)=>{Zn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});
var bh=class{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),o=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(let a of o)this.content.push(a)}compile(){var r;let e=Function,n=(r=this==null?void 0:this.content)!=null?r:[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}};
var iz={major:4,minor:6,patch:4};
var Bt=Q("$ZodType",(t,e)=>{var o,a;var n;t!=null||(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=iz;let i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i!=null?i:[]]:i!=null&&i.length?[...i]:[];for(let s of r)for(let l of s._zod.onattach)l(t);if(r.length===0)(o=(n=t._zod).deferred)!=null||(n.deferred=[]),(a=t._zod.deferred)==null||a.push(()=>{t._zod.run=t._zod.parse});else{let s=(u,f,c)=>{if(u.memo)return u;let p=Io(u),m;for(let g of f){if(g._zod.def.when){if(GD(u)||!g._zod.def.when(u))continue}else if(p)continue;let _=u.issues.length,b=g._zod.check(u);if(b instanceof Promise&&(c==null?void 0:c.async)===!1)throw new aa;if(m||b instanceof Promise)m=(m!=null?m:Promise.resolve()).then(async()=>{await b,u.issues.length!==_&&(SE(u.issues,_,t),p||(p=Io(u,_)))});else{if(u.issues.length===_)continue;SE(u.issues,_,t),p||(p=Io(u,_))}}return m?m.then(()=>u):u},l=(u,f,c)=>{if(Io(u))return u.aborted=!0,u;let p=s(f,r,c);if(p instanceof Promise){if(c.async===!1)throw new aa;return p.then(m=>t._zod.parse(m,c))}return t._zod.parse(p,c)};t._zod.run=(u,f)=>{if(f.skipChecks)return t._zod.parse(u,f);if(f.direction==="backward"){let p=t._zod.parse({value:u.value,issues:[]},be(H({},f),{skipChecks:!0}));return p instanceof Promise?p.then(m=>l(m,u,f)):l(p,u,f)}let c=t._zod.parse(u,f);if(c instanceof Promise){if(f.async===!1)throw new aa;return c.then(p=>s(p,r,f))}return s(c,r,f)}}},{get"~standard"(){return wb(this,"~standard",jE(this))},set"~standard"(t){sf(this,"~standard",t)}}),d9=(t,e)=>t.issues.length?{issues:t.issues.map(n=>oa(n,e,Ui()))}:{value:t.value};
var xh=Q("$ZodString",(t,e)=>{var n;Bt.init(t,e),t._zod.pattern=(n=e.pattern)!=null?n:A3,t._zod.parse=(i,r)=>{if(e.coerce)try{i.value=String(i.value)}catch(o){}return typeof i.value=="string"||i.issues.push({expected:"string",code:"invalid_type",input:i.value,inst:t}),i}}),On=Q("$ZodStringFormat",(t,e)=>{kg.init(t,e),xh.init(t,e)}),oz=Q("$ZodGUID",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=c3),On.init(t,e)}),az=Q("$ZodUUID",(t,e)=>{var n,i;if(e.version){let o={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(o===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);(n=e.pattern)!=null||(e.pattern=_h(o))}else(i=e.pattern)!=null||(e.pattern=_h());On.init(t,e)}),sz=Q("$ZodEmail",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=f3),On.init(t,e)}),lz=1,Pb=2;
var mpe=/[\t\n\r]/g;
var cz=Q("$ZodURL",(t,e)=>{On.init(t,e),t._zod.check=n=>{try{let i=n.value.trim(),r=WE(i,e);if(r===lz){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===Pb){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=Db(i);return}e.hostname&&!ZE(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!XE(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:Db(i);return}catch(i){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),fz=Q("$ZodEmoji",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=d3()),On.init(t,e)}),dz=Q("$ZodNanoID",(t,e)=>{var n;if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);(n=e.pattern)!=null||(e.pattern=e.length===void 0?s3:l3(e.length)),On.init(t,e)}),hz=Q("$ZodCUID",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=n3),On.init(t,e)}),pz=Q("$ZodCUID2",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=i3),On.init(t,e)}),mz=Q("$ZodULID",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=r3),On.init(t,e)}),gz=Q("$ZodXID",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=o3),On.init(t,e)}),vz=Q("$ZodKSUID",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=a3),On.init(t,e)}),yz=Q("$ZodISODateTime",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=M3(e)),On.init(t,e)}),_z=Q("$ZodISODate",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=T3),On.init(t,e)}),bz=Q("$ZodISOTime",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=E3(e)),On.init(t,e)}),xz=Q("$ZodISODuration",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=u3),On.init(t,e)}),Sz=Q("$ZodIPv4",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=h3),On.init(t,e)}),gpe=/^[0-9a-fA-F:.]+$/;
var wz=Q("$ZodIPv6",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=p3),On.init(t,e),t._zod.check=i=>{zb(i.value)||i.issues.push({code:"invalid_format",format:"ipv6",input:i.value,inst:t,continue:!e.abort})}}),Tz=Q("$ZodMAC",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=m3(e.delimiter)),On.init(t,e)}),Ez=Q("$ZodCIDRv4",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=g3),On.init(t,e)});
var Mz=Q("$ZodCIDRv6",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=v3),On.init(t,e),t._zod.check=i=>{qE(i.value)||i.issues.push({code:"invalid_format",format:"cidrv6",input:i.value,inst:t,continue:!e.abort})}});
var YE=/^[0-9a-zA-Z+/]*={0,2}$/,Az=Q("$ZodBase64",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=YE),On.init(t,e),t._zod.check=i=>{Nb(i.value)||i.issues.push({code:"invalid_format",format:"base64",input:i.value,inst:t,continue:!e.abort})}}),Ob=/^[A-Za-z0-9_-]*$/;
var Cz=Q("$ZodBase64URL",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=Ob),On.init(t,e),t._zod.check=i=>{KE(i.value)||i.issues.push({code:"invalid_format",format:"base64url",input:i.value,inst:t,continue:!e.abort})}}),Rz=Q("$ZodE164",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=S3),On.init(t,e)}),vpe=/[- ]/g;
var kz=Q("$ZodCreditCard",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=NE),On.init(t,e),t._zod.check=i=>{JE(i.value)||i.issues.push({code:"invalid_format",format:"credit_card",input:i.value,inst:t,continue:!e.abort})}});
var Iz=Q("$ZodIBAN",(t,e)=>{var n;(n=e.pattern)!=null||(e.pattern=OE),On.init(t,e),t._zod.check=i=>{QE(i.value)||i.issues.push({code:"invalid_format",format:"iban",input:i.value,inst:t,continue:!e.abort})}});
var Pz=Q("$ZodJWT",(t,e)=>{On.init(t,e),t._zod.check=n=>{eM(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),Dz=Q("$ZodCustomStringFormat",(t,e)=>{On.init(t,e),t._zod.check=n=>{e.fn(n.value)||n.issues.push({code:"invalid_format",format:e.format,input:n.value,inst:t,continue:!e.abort})}}),tM=Q("$ZodNumber",(t,e)=>{Bt.init(t,e),t._zod.pattern=Fu,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch(a){}let r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;let o=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push(H({expected:"number",code:"invalid_type",input:r,inst:t},o?{received:o}:{})),n}}),zz=Q("$ZodNumberFormat",(t,e)=>{$3.init(t,e),tM.init(t,e)}),Ub=Q("$ZodBoolean",(t,e)=>{Bt.init(t,e),t._zod.pattern=k3,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=!!n.value}catch(o){}let r=n.value;return typeof r=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:t}),n}}),nM=Q("$ZodBigInt",(t,e)=>{Bt.init(t,e),t._zod.pattern=R3,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=BigInt(n.value)}catch(r){}return typeof n.value=="bigint"||n.issues.push({expected:"bigint",code:"invalid_type",input:n.value,inst:t}),n}}),Nz=Q("$ZodBigIntFormat",(t,e)=>{F3.init(t,e),nM.init(t,e)}),Oz=Q("$ZodSymbol",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{let r=n.value;return typeof r=="symbol"||n.issues.push({expected:"symbol",code:"invalid_type",input:r,inst:t}),n}}),Uz=Q("$ZodUndefined",(t,e)=>{Bt.init(t,e),t._zod.pattern=P3,t._zod.values=new Set([void 0]),t._zod.parse=(n,i)=>{let r=n.value;return typeof r=="undefined"||n.issues.push({expected:"undefined",code:"invalid_type",input:r,inst:t}),n}}),Lz=Q("$ZodNull",(t,e)=>{Bt.init(t,e),t._zod.pattern=I3,t._zod.values=new Set([null]),t._zod.parse=(n,i)=>{let r=n.value;return r===null||n.issues.push({expected:"null",code:"invalid_type",input:r,inst:t}),n}}),$z=Q("$ZodAny",(t,e)=>{Bt.init(t,e),t._zod.parse=n=>n}),Fz=Q("$ZodUnknown",(t,e)=>{Bt.init(t,e),t._zod.parse=n=>n}),Bz=Q("$ZodNever",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)}),Hz=Q("$ZodVoid",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{let r=n.value;return typeof r=="undefined"||n.issues.push({expected:"void",code:"invalid_type",input:r,inst:t}),n}}),Vz=Q("$ZodDate",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=new Date(n.value)}catch(s){}let r=n.value,o=r instanceof Date;return o&&!Number.isNaN(r.getTime())||n.issues.push(be(H({expected:"date",code:"invalid_type",input:r},o?{received:"Invalid Date"}:{}),{inst:t})),n}});
var Gz=Q("$ZodArray",(t,e)=>{Bt.init(t,e);let n=zr.memoizer;n==null||n.attach(t),t._zod.parse=(i,r)=>{let o=i.value;if(!Array.isArray(o))return i.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),i;i.value=n?n.alloc(t,i,Array(o.length),r):Array(o.length);let a=[],s=r==null?void 0:r.abortEarly;for(let l=0;l<o.length;l++){let u=o[l],f=e.element._zod.run({value:u,issues:[]},r);if(f instanceof Promise)a.push(f.then(c=>Kj(c,i,l)));else if(Kj(f,i,l),s&&f.issues.length!==0&&Io(f))break}return a.length?Promise.all(a).then(()=>i):i}});
var bpe=[];
var g9=Q("$ZodObject",(t,e)=>{var u;Bt.init(t,e);let n=Object.getOwnPropertyDescriptor(e,"shape"),i=n!=null&&n.get?n.get.raw:(u=e.shape)!=null?u:{};if(i){let f=()=>{let c=H({},i);return Object.defineProperty(e,"shape",{value:c}),f.raw=c,c};f.raw=i,Object.defineProperty(e,"shape",{get:f})}let r=wg(()=>p9(e));on(t,"propValues",f=>{let c=f.def.shape,p={};for(let m in c){let g=c[m]._zod;if(g.values){Object.prototype.hasOwnProperty.call(p,m)||Gr(p,m,new Set);for(let _ of g.values)p[m].add(_);g.optin!==void 0&&p[m].add(void 0)}}return p});let o=vh,a=e.catchall,s,l=zr.memoizer;l==null||l.attach(t),t._zod.parse=(f,c)=>{s!=null||(s=r.value);let p=f.value;if(!o(p))return f.issues.push({expected:"object",code:"invalid_type",input:p,inst:t}),f;f.value=l?l.alloc(t,f,{},c):{};let m=[],g=s.shape,_=c==null?void 0:c.abortEarly,b=f.issues.length;for(let y of s.allKeys){if(_&&f.issues.length!==b){if(Io(f,b))break;b=f.issues.length}if(y==="__proto__")continue;let x=g[y],T=x._zod.optin,w=x._zod.optout,E=x._zod.run({value:p[y],issues:[]},c);E instanceof Promise?m.push(E.then(A=>GE(A,f,y,p,T,w))):GE(E,f,y,p,T,w)}return a?m9(m,p,f,c,r.value,t,_===!0):m.length?Promise.all(m).then(()=>f):f}}),jz=Q("$ZodObjectJIT",(t,e)=>{g9.init(t,e);let n=t._zod.parse,i=wg(()=>p9(e)),r=zr.memoizer,o=m=>{var E,A;let g=i.value,_=g.symbolKeys,b=new bh(["payload","ctx"],{shape:m,inst:t,memo:r,syms:_}),y=R=>`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`,x=(R,M)=>`
          let ${R}_ab = false;
          for (let i = 0; i < ${R}.issues.length; i++) {
            const iss = ${R}.issues[i];
            iss.path = iss.path ? [${M}, ...iss.path] : [${M}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${R}_ab = true;
          }
          if (${R}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;b.write("const input = payload.value;");let T=Object.create(null),w=0;for(let R of g.allKeys)T[R]=`key_${w++}`;b.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(let R of g.allKeys){if(R==="__proto__")continue;let M=T[R],I=typeof R=="symbol"?`syms[${_.indexOf(R)}]`:ko(R),P=`${I} in input`,z=m[R],$=(E=z==null?void 0:z._zod)==null?void 0:E.optin,B=$!==void 0,L=((A=z==null?void 0:z._zod)==null?void 0:A.optout)==="optional";if(b.write(`const ${M} = ${y(I)};`),B&&L){let V=$==="optional"?`${M}_present`:`${M}.value !== undefined || ${M}_present`;b.write(`
        const ${M}_present = ${P};
        if (!${M}.issues.length || ${M}_present) {
          if (${M}.issues.length) {${x(M,I)}
          }

          if (${V}) {
            newResult[${I}] = ${M}.value;
          }
        }

      `)}else B?(b.write(`
        if (${M}.issues.length) {${x(M,I)}
        }
      `),$==="defaulted"?b.write(`newResult[${I}] = ${M}.value;`):b.write(`
        if (${M}.value !== undefined || ${P}) {
          newResult[${I}] = ${M}.value;
        }
      `)):b.write(`
        const ${M}_present = ${P};
        if (${M}.issues.length) {${x(M,I)}
        }
        if (!${M}_present && !${M}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${I}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${M}_present) {
          newResult[${I}] = ${M}.value;
        }

      `)}return b.write("payload.value = newResult;"),b.write("return payload;"),b.compile()},a,s=vh,l=!zr.jitless,f=l&&BD.value,c=e.catchall,p;t._zod.parse=(m,g)=>{p!=null||(p=i.value);let _=m.value;return s(_)?l&&f&&(g==null?void 0:g.async)===!1&&g.jitless!==!0?(a||(a=o(e.shape)),m=a(m,g),c?m9([],_,m,g,p,t,(g==null?void 0:g.abortEarly)===!0):m):n(m,g):(m.issues.push({expected:"object",code:"invalid_type",input:_,inst:t}),m)}});
var Lb=Q("$ZodUnion",(t,e)=>{Bt.init(t,e),on(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),on(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),on(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),on(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){let r=i.def.options.map(o=>o._zod.pattern);return new RegExp(`^(${r.map(o=>$u(o.source)).join("|")})$`)}});let n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let o=!1,a=[];for(let s of e.options){let l=s._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),o=!0;else{if(l.issues.length===0)return l;a.push(l)}}return o?Promise.all(a).then(s=>Jj(s,i,t,r)):Jj(a,i,t,r)}});
var Wz=Q("$ZodXor",(t,e)=>{Lb.init(t,e),e.inclusive=!1;let n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let o=!1,a=[];for(let s of e.options){let l=s._zod.run({value:i.value,issues:[]},r);l instanceof Promise?(a.push(l),o=!0):a.push(l)}return o?Promise.all(a).then(s=>Qj(s,i,t,r)):Qj(a,i,t,r)}});
var Xz=Q("$ZodDiscriminatedUnion",(t,e)=>{e.inclusive=!1,Lb.init(t,e);let n=t._zod.parse;on(t,"propValues",r=>{var s,l;let o={},a=0;for(let u of r.def.options){let f=u._zod.propValues;if(!f||Object.keys(f).length===0)throw new Error(`Invalid discriminated union option at index "${r.def.options.indexOf(u)}"`);(s=f[r.def.discriminator])!=null&&s.has(void 0)&&a++;for(let[c,p]of Object.entries(f)){Object.prototype.hasOwnProperty.call(o,c)||Gr(o,c,new Set);for(let m of p)o[c].add(m)}}return!r.def.unionFallback&&a>1&&((l=o[r.def.discriminator])==null||l.delete(void 0)),o}),e.options.forEach((r,o)=>{let a=Tg(r._zod.def);if(a&&!Object.prototype.hasOwnProperty.call(a,e.discriminator))throw new Error(`Invalid discriminated union option at index "${o}"`)});let i=wg(()=>v9(e));t._zod.parse=(r,o)=>{let a=r.value;if(!vh(a))return r.issues.push({code:"invalid_type",expected:"object",input:a,inst:t}),r;let s=a==null?void 0:a[e.discriminator],l=i.value.get(s);return l&&(s!==void 0||o.direction!=="backward")?l._zod.run(r,o):e.unionFallback||o.direction==="backward"?n(r,o):(r.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",discriminator:e.discriminator,options:Array.from(i.value.keys()).filter(u=>i.value.get(u)!==null),input:a,path:[e.discriminator],inst:t}),r)}}),qz=Q("$ZodIntersection",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{let r=n.value,o=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return o instanceof Promise||a instanceof Promise?Promise.all([o,a]).then(([l,u])=>e9(n,l,u)):e9(n,o,a)}});
var iM=Q("$ZodTuple",(t,e)=>{Bt.init(t,e);let n=e.items,i=zr.memoizer;i==null||i.attach(t),t._zod.parse=(r,o)=>{let a=r.value;if(!Array.isArray(a))return r.issues.push({input:a,inst:t,expected:"tuple",code:"invalid_type"}),r;r.value=i?i.alloc(t,r,[],o):[];let s=[],l=t9(n,"optin"),u=t9(n,"optout");if(!e.rest){if(a.length<l)return r.issues.push({code:"too_small",minimum:l,inclusive:!0,input:a,inst:t,origin:"array"}),r;a.length>n.length&&r.issues.push({code:"too_big",maximum:n.length,inclusive:!0,input:a,inst:t,origin:"array"})}let f=new Array(n.length),c=e.rest?o==null?void 0:o.abortEarly:void 0,p=!1;for(let m=0;m<n.length;m++){let g=n[m]._zod.run({value:a[m],issues:[]},o);g instanceof Promise?s.push(g.then(_=>{f[m]=_})):(f[m]=g,c&&!p&&g.issues.length&&(p=Io(g)))}if(e.rest&&!p){let m=n.length-1,g=a.slice(n.length),_=r.issues.length;for(let b of g){if(c&&r.issues.length!==_){if(Io(r,_))break;_=r.issues.length}m++;let y=e.rest._zod.run({value:b,issues:[]},o);y instanceof Promise?s.push(y.then(x=>n9(x,r,m))):n9(y,r,m)}}return s.length?Promise.all(s).then(()=>i9(f,r,n,a,u)):i9(f,r,n,a,u)}});
var Yz=Q("$ZodRecord",(t,e)=>{Bt.init(t,e);let n=zr.memoizer;n==null||n.attach(t),t._zod.parse=(i,r)=>{let o=i.value;if(!ws(o))return i.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),i;let a=[],s=e.keyType._zod.values;if(s&&!e.partial){i.value=n?n.alloc(t,i,{},r):{};let l=new Set;for(let f of s)if(typeof f=="string"||typeof f=="number"||typeof f=="symbol"){if(l.add(typeof f=="number"?f.toString():f),f==="__proto__")continue;let c=e.keyType._zod.run({value:f,issues:[]},r);if(c instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(c.issues.length){i.issues.push({code:"invalid_key",origin:"record",issues:c.issues.map(g=>oa(g,r,Ui())),input:f,path:[f],inst:t});continue}let p=c.value;if(p==="__proto__")continue;let m=e.valueType._zod.run({value:o[f],issues:[]},r);m instanceof Promise?a.push(m.then(g=>{g.issues.length&&i.issues.push(...ra(f,g.issues)),i.value[p]=g.value})):(m.issues.length&&i.issues.push(...ra(f,m.issues)),i.value[p]=m.value)}let u;for(let f in o)if(!l.has(f))if(e.mode==="loose"){if(f==="__proto__")continue;i.value[f]=o[f]}else u=u!=null?u:[],u.push(f);u&&u.length>0&&i.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:u,continue:!0})}else{i.value=n?n.alloc(t,i,{},r):{};let l;for(let u of Reflect.ownKeys(o)){if(u==="__proto__"||!Object.prototype.propertyIsEnumerable.call(o,u))continue;let f=e.keyType._zod.run({value:u,issues:[]},r);if(f instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(typeof u=="string"&&Fu.test(u)&&f.issues.length){let g=e.keyType._zod.run({value:Number(u),issues:[]},r);if(g instanceof Promise)throw new Error("Async schemas not supported in object keys currently");g.issues.length===0&&(f=g)}if(f.issues.length){e.mode==="loose"?i.value[u]=o[u]:s?(l=l!=null?l:[],l.push(u)):i.issues.push({code:"invalid_key",origin:"record",issues:f.issues.map(g=>oa(g,r,Ui())),input:u,path:[u],inst:t});continue}let p=f.value;if(p==="__proto__")continue;let m=e.valueType._zod.run({value:o[u],issues:[]},r);m instanceof Promise?a.push(m.then(g=>{g.issues.length&&i.issues.push(...ra(u,g.issues)),i.value[p]=g.value})):(m.issues.length&&i.issues.push(...ra(u,m.issues)),i.value[p]=m.value)}l&&l.length>0&&i.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:l,continue:!0})}return a.length?Promise.all(a).then(()=>i):i}}),Kz=Q("$ZodMap",(t,e)=>{Bt.init(t,e);let n=zr.memoizer;n==null||n.attach(t),t._zod.parse=(i,r)=>{let o=i.value;if(!(o instanceof Map))return i.issues.push({expected:"map",code:"invalid_type",input:o,inst:t}),i;let a=[];i.value=n?n.alloc(t,i,new Map,r):new Map;let s=r==null?void 0:r.abortEarly,l=i.issues.length;for(let[u,f]of o){if(s&&i.issues.length!==l){if(Io(i,l))break;l=i.issues.length}let c=e.keyType._zod.run({value:u,issues:[]},r),p=e.valueType._zod.run({value:f,issues:[]},r);c instanceof Promise||p instanceof Promise?a.push(Promise.all([c,p]).then(([m,g])=>{r9(m,g,i,u,o,t,r)})):r9(c,p,i,u,o,t,r)}return a.length?Promise.all(a).then(()=>i):i}});
var Jz=Q("$ZodSet",(t,e)=>{Bt.init(t,e);let n=zr.memoizer;n==null||n.attach(t),t._zod.parse=(i,r)=>{let o=i.value;if(!(o instanceof Set))return i.issues.push({input:o,inst:t,expected:"set",code:"invalid_type"}),i;let a=[];i.value=n?n.alloc(t,i,new Set,r):new Set;let s=r==null?void 0:r.abortEarly,l=i.issues.length;for(let u of o){if(s&&i.issues.length!==l){if(Io(i,l))break;l=i.issues.length}let f=e.valueType._zod.run({value:u,issues:[]},r);f instanceof Promise?a.push(f.then(c=>o9(c,i))):o9(f,i)}return a.length?Promise.all(a).then(()=>i):i}});
var Qz=Q("$ZodEnum",(t,e)=>{Bt.init(t,e);let n=xg(e.entries),i=new Set(n);t._zod.values=i,on(t,"pattern",r=>{let o=xg(r.def.entries).filter(a=>yb.has(typeof a));return new RegExp(o.length?`^(${o.map(a=>Ts(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,o)=>{let a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),eN=Q("$ZodLiteral",(t,e)=>{Bt.init(t,e);let n=new Set(e.values);t._zod.values=n,on(t,"pattern",i=>{let r=i.def.values;return new RegExp(r.length?`^(${r.map(o=>typeof o=="string"?Ts(o):o?Ts(o.toString()):String(o)).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(i,r)=>{let o=i.value;return n.has(o)||i.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),i}}),tN=Q("$ZodFile",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{let r=n.value;return r instanceof File||n.issues.push({expected:"file",code:"invalid_type",input:r,inst:t}),n}}),nN=Q("$ZodTransform",(t,e)=>{var n;Bt.init(t,e),t._zod.optin="optional",(n=zr.memoizer)==null||n.guard(t),t._zod.parse=(i,r)=>{if(r.direction==="backward")throw new lf(t.constructor.name);let o=e.transform(i.value,i);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(s=>(i.value=s,i));if(o instanceof Promise)throw new aa;return i.value=o,i}});
var rM=Q("$ZodOptional",(t,e)=>{Bt.init(t,e),on(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",on(t,"values",n=>{let i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),on(t,"pattern",n=>{let i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${$u(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;let r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(o=>a9(n,o)):a9(n,r)}return e.innerType._zod.run(n,i)}}),iN=Q("$ZodExactOptional",(t,e)=>{rM.init(t,e),on(t,"values",n=>n.def.innerType._zod.values),on(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),rN=Q("$ZodNullable",(t,e)=>{Bt.init(t,e),on(t,"optin",n=>n.def.innerType._zod.optin),on(t,"optout",n=>n.def.innerType._zod.optout),on(t,"pattern",n=>{let i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${$u(i.source)}|null)$`):void 0}),on(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),oN=Q("$ZodDefault",(t,e)=>{Bt.init(t,e),t._zod.optin="defaulted",on(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;let r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(o=>s9(o,e)):s9(r,e)}});
var aN=Q("$ZodPrefault",(t,e)=>{Bt.init(t,e),t._zod.optin="defaulted",on(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),sN=Q("$ZodNonOptional",(t,e)=>{Bt.init(t,e),on(t,"values",n=>{let i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{let r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(o=>l9(o,t)):l9(r,t)}});
var lN=Q("$ZodSuccess",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new lf("ZodSuccess");let r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(o=>(n.value=o.issues.length===0,n)):(n.value=r.issues.length===0,n)}});
var uN=Q("$ZodCatch",(t,e)=>{Bt.init(t,e),on(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),on(t,"optout",n=>n.def.innerType._zod.optout),on(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);let r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(o=>u9(n,o,e,i)):u9(n,r,e,i)}}),cN=Q("$ZodNaN",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>((typeof n.value!="number"||!Number.isNaN(n.value))&&n.issues.push({input:n.value,inst:t,expected:"nan",code:"invalid_type"}),n)}),oM=Q("$ZodPipe",(t,e)=>{Bt.init(t,e),on(t,"values",n=>n.def.in._zod.values),on(t,"optin",n=>n.def.in._zod.optin),on(t,"optout",n=>n.def.out._zod.optout),on(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){let o=e.out._zod.run(n,i);return o instanceof Promise?o.then(a=>BE(a,e.in,i)):BE(o,e.in,i)}let r=e.in._zod.run(n,i);return r instanceof Promise?r.then(o=>BE(o,e.out,i)):BE(r,e.out,i)}});
var $b=Q("$ZodCodec",(t,e)=>{Bt.init(t,e),on(t,"values",n=>n.def.in._zod.values),on(t,"optin",n=>n.def.in._zod.optin),on(t,"optout",n=>n.def.out._zod.optout),on(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if((i.direction||"forward")==="forward"){let o=e.in._zod.run(n,i);return o instanceof Promise?o.then(a=>HE(a,e,i)):HE(o,e,i)}else{let o=e.out._zod.run(n,i);return o instanceof Promise?o.then(a=>HE(a,e,i)):HE(o,e,i)}}});
var fN=Q("$ZodPreprocess",(t,e)=>{oM.init(t,e)}),dN=Q("$ZodReadonly",(t,e)=>{Bt.init(t,e),on(t,"propValues",n=>n.def.innerType._zod.propValues),on(t,"values",n=>n.def.innerType._zod.values),on(t,"optin",n=>{var i,r;return(r=(i=n.def.innerType)==null?void 0:i._zod)==null?void 0:r.optin}),on(t,"optout",n=>{var i,r;return(r=(i=n.def.innerType)==null?void 0:i._zod)==null?void 0:r.optout}),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);let r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(c9):c9(r)}});
var hN=Q("$ZodTemplateLiteral",(t,e)=>{Bt.init(t,e);let n=[];for(let i of e.parts)if(typeof i=="object"&&i!==null){let r=rz(i);if(!r)throw new Error(`Invalid template literal part, no pattern found: ${[...i._zod.traits].shift()}`);n.push($u(r))}else if(i===null||HD.has(typeof i))n.push(Ts(`${i}`));else throw new Error(`Invalid template literal part: ${i}`);t._zod.pattern=new RegExp(`^${n.join("")}$`),t._zod.parse=(i,r)=>{var o;return typeof i.value!="string"?(i.issues.push({input:i.value,inst:t,expected:"string",code:"invalid_type"}),i):(t._zod.pattern.lastIndex=0,t._zod.pattern.test(i.value)||i.issues.push({input:i.value,inst:t,code:"invalid_format",format:(o=e.format)!=null?o:"template_literal",pattern:t._zod.pattern.source}),i)}}),pN=Q("$ZodFunction",(t,e)=>(Bt.init(t,e),Object.defineProperty(t,"_def",{value:e}),t._zod.def=e,t.implement=n=>{if(typeof n!="function")throw new Error("implement() must be called with a function");return Object.defineProperty(function(...i){let r=t._def.input?EE(t._def.input,i):i,o=Reflect.apply(n,this,r);return t._def.output?EE(t._def.output,o):o},"_zod",{value:t._zod,enumerable:!1})},t.implementAsync=n=>{if(typeof n!="function")throw new Error("implementAsync() must be called with a function");return Object.defineProperty(async function(...i){let r=t._def.input?await ME(t._def.input,i):i,o=await Reflect.apply(n,this,r);return t._def.output?await ME(t._def.output,o):o},"_zod",{value:t._zod,enumerable:!1})},t._zod.parse=(n,i)=>typeof n.value!="function"?(n.issues.push({code:"invalid_type",expected:"function",input:n.value,inst:t}),n):(t._def.output&&t._def.output._zod.def.type==="promise"?n.value=t.implementAsync(n.value):n.value=t.implement(n.value),n),t.input=(...n)=>{let i=t.constructor;return Array.isArray(n[0])?new i({type:"function",input:new iM({type:"tuple",items:n[0],rest:n[1]}),output:t._def.output}):new i({type:"function",input:n[0],output:t._def.output})},t.output=n=>{let i=t.constructor;return new i({type:"function",input:t._def.input,output:n})},t)),mN=Q("$ZodPromise",(t,e)=>{Bt.init(t,e),t._zod.parse=(n,i)=>Promise.resolve(n.value).then(r=>e.innerType._zod.run({value:r,issues:[]},i))}),Fb=Q("$ZodLazy",(t,e)=>{Bt.init(t,e),$D(t._zod,"innerType",()=>{let n=e;return n._cachedInner||(n._cachedInner=e.getter()),n._cachedInner}),on(t,"pattern",n=>{var i,r;return(r=(i=n.innerType)==null?void 0:i._zod)==null?void 0:r.pattern}),on(t,"propValues",n=>{var i,r;return(r=(i=n.innerType)==null?void 0:i._zod)==null?void 0:r.propValues}),on(t,"optin",n=>{var i,r,o;return(o=(r=(i=n.innerType)==null?void 0:i._zod)==null?void 0:r.optin)!=null?o:void 0}),on(t,"optout",n=>{var i,r,o;return(o=(r=(i=n.innerType)==null?void 0:i._zod)==null?void 0:r.optout)!=null?o:void 0}),t._zod.parse=(n,i)=>t._zod.innerType._zod.run(n,i)}),gN=Q("$ZodCustom",(t,e)=>{Zn.init(t,e),Bt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{let i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(o=>f9(o,n,i,t));f9(r,n,i,t)}});
var uM=class extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}},yN="~memo",_9=[];
var x9=new WeakMap,Pg=0,lM=1,Bb=2;
var aM,sM=[],Tpe={alloc(t,e,n){let i=aM;if(!i)return n;aM=void 0;let r={value:n,issues:null};return i.set(e.value,r),sM.push(r),n},guard(t){var n;var e;(n=(e=t._zod).deferred)!=null||(e.deferred=[]),t._zod.deferred.push(()=>{let i=t._zod.parse,r=(o,a)=>{if(a.direction!=="backward"&&fM(a,o.value))throw new uM;return i(o,a)};t._zod.parse=r,t._zod.run===i&&(t._zod.run=r)})},attach(t){var a;var e;let n,i=!1,r,o;(a=(e=t._zod).deferred)!=null||(e.deferred=[]),t._zod.deferred.push(()=>{let s=t._zod.parse,l=(u,f)=>{var x;if(n===void 0){let T=Hb(t,new Set,!1);if(T===Pg)return t._zod.parse=s,t._zod.run===l&&(t._zod.run=s),s(u,f);T===Bb||i?n=!0:i=!0}let c=u.value;if(!b9(c))return s(u,f);let p=f[yN];p||(p={buckets:new WeakMap,backEdges:void 0},f[yN]=p);let m;r===f?m=o:(m=wpe(p,t),r=f,o=m);let g=m.get(c);if(g)return u.value=g.value,g.issues?g.issues.length&&u.issues.push(...vN(g.issues)):(u.memo=!0,(x=p.backEdges)!=null||(p.backEdges=new WeakSet),p.backEdges.add(g.value)),u;aM=m;let _=sM.length,b=s(u,f);aM=void 0;let y=sM.length>_?sM.pop():void 0;return b instanceof Promise?b.then(T=>(y&&(y.issues=T.issues.length?vN(T.issues):_9),T)):(y&&(y.issues=b.issues.length?vN(b.issues):_9),b)};t._zod.parse=l,t._zod.run===s&&(t._zod.run=l)})}};
var Sh={};
qs(Sh,{ar:()=>S9,az:()=>w9,be:()=>E9,bg:()=>M9,bn:()=>A9,ca:()=>C9,ckb:()=>R9,cs:()=>k9,da:()=>I9,de:()=>P9,el:()=>D9,en:()=>dM,eo:()=>z9,es:()=>N9,fa:()=>O9,fi:()=>U9,fr:()=>L9,frCA:()=>$9,gu:()=>F9,he:()=>B9,hi:()=>H9,hr:()=>V9,hu:()=>G9,hy:()=>W9,id:()=>Z9,is:()=>X9,it:()=>q9,ja:()=>Y9,ka:()=>K9,kh:()=>J9,km:()=>hM,kn:()=>Q9,ko:()=>e7,lt:()=>n7,mk:()=>i7,ms:()=>r7,ne:()=>o7,nl:()=>a7,nn:()=>s7,no:()=>l7,ota:()=>u7,pl:()=>f7,ps:()=>c7,pt:()=>d7,ptBR:()=>h7,ro:()=>p7,ru:()=>g7,sk:()=>v7,sl:()=>y7,sv:()=>_7,ta:()=>b7,tg:()=>x7,th:()=>S7,tk:()=>w7,tr:()=>T7,ua:()=>E7,uk:()=>pM,ur:()=>M7,uz:()=>A7,vi:()=>C7,yo:()=>I7,zhCN:()=>R7,zhTW:()=>k7});
var Epe=()=>{let t={string:{unit:"\u062D\u0631\u0641",verb:"\u0623\u0646 \u064A\u062D\u0648\u064A"},file:{unit:"\u0628\u0627\u064A\u062A",verb:"\u0623\u0646 \u064A\u062D\u0648\u064A"},array:{unit:"\u0639\u0646\u0635\u0631",verb:"\u0623\u0646 \u064A\u062D\u0648\u064A"},set:{unit:"\u0639\u0646\u0635\u0631",verb:"\u0623\u0646 \u064A\u062D\u0648\u064A"},map:{unit:"\u0639\u0646\u0635\u0631",verb:"\u0623\u0646 \u064A\u062D\u0648\u064A"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"\u0645\u062F\u062E\u0644",email:"\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",url:"\u0631\u0627\u0628\u0637",emoji:"\u0625\u064A\u0645\u0648\u062C\u064A",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",date:"\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",time:"\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",duration:"\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",ipv4:"\u0639\u0646\u0648\u0627\u0646 IPv4",ipv6:"\u0639\u0646\u0648\u0627\u0646 IPv6",mac:"\u0639\u0646\u0648\u0627\u0646 MAC",cidrv4:"\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",cidrv6:"\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",base64:"\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",base64url:"\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",json_string:"\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",e164:"\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",credit_card:"\u0631\u0642\u0645 \u0628\u0637\u0627\u0642\u0629 \u0627\u0644\u0627\u0626\u062A\u0645\u0627\u0646",currency_code:"\u0631\u0645\u0632 \u0627\u0644\u0639\u0645\u0644\u0629",iban:"IBAN",jwt:"JWT",template_literal:"\u0645\u062F\u062E\u0644"},i={nan:"NaN"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${r.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${m}`:`\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${c}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${m}`}case"invalid_value":return r.values.length===1?`\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${Ee(r.values[0])}`:`\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${te(r.values,"|")}`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin);return p?` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${(s=r.origin)!=null?s:"\u0627\u0644\u0642\u064A\u0645\u0629"} ${c} ${r.maximum.toString()} ${(l=p.unit)!=null?l:"\u0639\u0646\u0635\u0631"}`:`\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${(u=r.origin)!=null?u:"\u0627\u0644\u0642\u064A\u0645\u0629"} ${c} ${r.maximum.toString()}`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin);return p?`\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${c} ${r.minimum.toString()} ${p.unit}`:`\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${r.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${c} ${r.minimum.toString()}`}case"invalid_format":{let c=r;return c.format==="starts_with"?`\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${r.prefix}"`:c.format==="ends_with"?`\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${c.suffix}"`:c.format==="includes"?`\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${c.includes}"`:c.format==="regex"?`\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${c.pattern}`:`${(f=n[c.format])!=null?f:r.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`}case"not_multiple_of":return`\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${r.divisor}`;case"unrecognized_keys":return`\u0645\u0639\u0631\u0641${r.keys.length>1?"\u0627\u062A":""} \u063A\u0631\u064A\u0628${r.keys.length>1?"\u0629":""}: ${te(r.keys,"\u060C ")}`;case"invalid_key":return`\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;case"invalid_union":return"\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";case"invalid_element":return`\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${r.origin}`;default:return"\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644"}}};
var Mpe=()=>{let t={string:{unit:"simvol",verb:"olmal\u0131d\u0131r"},file:{unit:"bayt",verb:"olmal\u0131d\u0131r"},array:{unit:"element",verb:"olmal\u0131d\u0131r"},set:{unit:"element",verb:"olmal\u0131d\u0131r"},map:{unit:"element",verb:"olmal\u0131d\u0131r"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",credit_card:"kredit kart\u0131 n\xF6mr\u0259si",currency_code:"valyuta kodu",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${r.expected}, daxil olan ${m}`:`Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${c}, daxil olan ${m}`}case"invalid_value":return r.values.length===1?`Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${Ee(r.values[0])}`:`Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${te(r.values,"|")}`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin);return p?`\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${(s=r.origin)!=null?s:"d\u0259y\u0259r"} ${c}${r.maximum.toString()} ${(l=p.unit)!=null?l:"element"}`:`\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${(u=r.origin)!=null?u:"d\u0259y\u0259r"} ${c}${r.maximum.toString()}`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin);return p?`\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${c}${r.minimum.toString()} ${p.unit}`:`\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${r.origin} ${c}${r.minimum.toString()}`}case"invalid_format":{let c=r;return c.format==="starts_with"?`Yanl\u0131\u015F m\u0259tn: "${c.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`:c.format==="ends_with"?`Yanl\u0131\u015F m\u0259tn: "${c.suffix}" il\u0259 bitm\u0259lidir`:c.format==="includes"?`Yanl\u0131\u015F m\u0259tn: "${c.includes}" daxil olmal\u0131d\u0131r`:c.format==="regex"?`Yanl\u0131\u015F m\u0259tn: ${c.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`:`Yanl\u0131\u015F ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`Yanl\u0131\u015F \u0259d\u0259d: ${r.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;case"unrecognized_keys":return`Tan\u0131nmayan a\xE7ar${r.keys.length>1?"lar":""}: ${te(r.keys,", ")}`;case"invalid_key":return`${r.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;case"invalid_union":return"Yanl\u0131\u015F d\u0259y\u0259r";case"invalid_element":return`${r.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;default:return"Yanl\u0131\u015F d\u0259y\u0259r"}}};
var Ape=()=>{let t={string:{unit:{one:"\u0441\u0456\u043C\u0432\u0430\u043B",few:"\u0441\u0456\u043C\u0432\u0430\u043B\u044B",many:"\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"},verb:"\u043C\u0435\u0446\u044C"},array:{unit:{one:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442",few:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",many:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"},verb:"\u043C\u0435\u0446\u044C"},set:{unit:{one:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442",few:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",many:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"},verb:"\u043C\u0435\u0446\u044C"},map:{unit:{one:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442",few:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",many:"\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"},verb:"\u043C\u0435\u0446\u044C"},file:{unit:{one:"\u0431\u0430\u0439\u0442",few:"\u0431\u0430\u0439\u0442\u044B",many:"\u0431\u0430\u0439\u0442\u0430\u045E"},verb:"\u043C\u0435\u0446\u044C"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"\u0443\u0432\u043E\u0434",email:"email \u0430\u0434\u0440\u0430\u0441",url:"URL",emoji:"\u044D\u043C\u043E\u0434\u0437\u0456",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",date:"ISO \u0434\u0430\u0442\u0430",time:"ISO \u0447\u0430\u0441",duration:"ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",ipv4:"IPv4 \u0430\u0434\u0440\u0430\u0441",ipv6:"IPv6 \u0430\u0434\u0440\u0430\u0441",mac:"MAC \u0430\u0434\u0440\u0430\u0441",cidrv4:"IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",cidrv6:"IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",base64:"\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",base64url:"\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",json_string:"JSON \u0440\u0430\u0434\u043E\u043A",e164:"\u043D\u0443\u043C\u0430\u0440 E.164",credit_card:"\u043D\u0443\u043C\u0430\u0440 \u043A\u0440\u044D\u0434\u044B\u0442\u043D\u0430\u0439 \u043A\u0430\u0440\u0442\u044B",currency_code:"\u043A\u043E\u0434 \u0432\u0430\u043B\u044E\u0442\u044B",iban:"IBAN",jwt:"JWT",template_literal:"\u0443\u0432\u043E\u0434"},i={nan:"NaN",number:"\u043B\u0456\u043A",array:"\u043C\u0430\u0441\u0456\u045E"};return r=>{var o,a,s,l,u;switch(r.code){case"invalid_type":{let f=(o=i[r.expected])!=null?o:r.expected,c=Me(r.input),p=(a=i[c])!=null?a:c;return/^[A-Z]/.test(r.expected)?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${r.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${p}`:`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${f}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${p}`}case"invalid_value":return r.values.length===1?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${Ee(r.values[0])}`:`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${te(r.values,"|")}`;case"too_big":{let f=r.inclusive?"<=":"<",c=e(r.origin);if(c){let p=Number(r.maximum),m=T9(p,c.unit.one,c.unit.few,c.unit.many);return`\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${(s=r.origin)!=null?s:"\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${c.verb} ${f}${r.maximum.toString()} ${m}`}return`\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${(l=r.origin)!=null?l:"\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${f}${r.maximum.toString()}`}case"too_small":{let f=r.inclusive?">=":">",c=e(r.origin);if(c){let p=Number(r.minimum),m=T9(p,c.unit.one,c.unit.few,c.unit.many);return`\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${c.verb} ${f}${r.minimum.toString()} ${m}`}return`\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${r.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${f}${r.minimum.toString()}`}case"invalid_format":{let f=r;return f.format==="starts_with"?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${f.prefix}"`:f.format==="ends_with"?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${f.suffix}"`:f.format==="includes"?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${f.includes}"`:f.format==="regex"?`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${f.pattern}`:`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${(u=n[f.format])!=null?u:r.format}`}case"not_multiple_of":return`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${r.divisor}`;case"unrecognized_keys":return`\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${r.keys.length>1?"\u043A\u043B\u044E\u0447\u044B":"\u043A\u043B\u044E\u0447"}: ${te(r.keys,", ")}`;case"invalid_key":return`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${r.origin}`;case"invalid_union":return"\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";case"invalid_element":return`\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${r.origin}`;default:return"\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434"}}};
var Cpe=()=>{let t={string:{unit:"\u0441\u0438\u043C\u0432\u043E\u043B\u0430",verb:"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"},file:{unit:"\u0431\u0430\u0439\u0442\u0430",verb:"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"},array:{unit:"\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",verb:"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"},set:{unit:"\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",verb:"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"},map:{unit:"\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430",verb:"\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"\u0432\u0445\u043E\u0434",email:"\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",url:"URL",emoji:"\u0435\u043C\u043E\u0434\u0436\u0438",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO \u0432\u0440\u0435\u043C\u0435",date:"ISO \u0434\u0430\u0442\u0430",time:"ISO \u0432\u0440\u0435\u043C\u0435",duration:"ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",ipv4:"IPv4 \u0430\u0434\u0440\u0435\u0441",ipv6:"IPv6 \u0430\u0434\u0440\u0435\u0441",mac:"MAC \u0430\u0434\u0440\u0435\u0441",cidrv4:"IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",cidrv6:"IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",base64:"base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",base64url:"base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",json_string:"JSON \u043D\u0438\u0437",e164:"E.164 \u043D\u043E\u043C\u0435\u0440",credit_card:"\u043D\u043E\u043C\u0435\u0440 \u043D\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u043D\u0430 \u043A\u0430\u0440\u0442\u0430",currency_code:"\u043A\u043E\u0434 \u043D\u0430 \u0432\u0430\u043B\u0443\u0442\u0430",iban:"IBAN",jwt:"JWT",template_literal:"\u0432\u0445\u043E\u0434"},i={nan:"NaN",number:"\u0447\u0438\u0441\u043B\u043E",array:"\u043C\u0430\u0441\u0438\u0432"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${r.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${m}`:`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${c}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${m}`}case"invalid_value":return r.values.length===1?`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${Ee(r.values[0])}`:`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${te(r.values,"|")}`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin);return p?`\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${(s=r.origin)!=null?s:"\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${c}${r.maximum.toString()} ${(l=p.unit)!=null?l:"\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`:`\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${(u=r.origin)!=null?u:"\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${c}${r.maximum.toString()}`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin);return p?`\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${c}${r.minimum.toString()} ${p.unit}`:`\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${r.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${c}${r.minimum.toString()}`}case"invalid_format":{let c=r;if(c.format==="starts_with")return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${c.prefix}"`;if(c.format==="ends_with")return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${c.suffix}"`;if(c.format==="includes")return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${c.includes}"`;if(c.format==="regex")return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${c.pattern}`;let p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";return c.format==="emoji"&&(p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),c.format==="datetime"&&(p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),c.format==="date"&&(p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),c.format==="time"&&(p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E"),c.format==="duration"&&(p="\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430"),`${p} ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${r.divisor}`;case"unrecognized_keys":return`\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${r.keys.length>1?"\u0438":""} \u043A\u043B\u044E\u0447${r.keys.length>1?"\u043E\u0432\u0435":""}: ${te(r.keys,", ")}`;case"invalid_key":return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${r.origin}`;case"invalid_union":return"\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";case"invalid_element":return`\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${r.origin}`;default:return"\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434"}}};
var Rpe=()=>{let t={string:{unit:"\u0985\u0995\u09CD\u09B7\u09B0",verb:"\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7"},file:{unit:"\u09AC\u09BE\u0987\u099F",verb:"\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7"},array:{unit:"\u0986\u0987\u099F\u09C7\u09AE",verb:"\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7"},set:{unit:"\u0986\u0987\u099F\u09C7\u09AE",verb:"\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7"},map:{unit:"\u098F\u09A8\u09CD\u099F\u09CD\u09B0\u09BF",verb:"\u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"\u0987\u09A8\u09AA\u09C1\u099F",email:"\u0987\u09AE\u09C7\u0987\u09B2 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",url:"URL",emoji:"\u0987\u09AE\u09CB\u099C\u09BF",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO \u09A4\u09BE\u09B0\u09BF\u0996 \u0993 \u09B8\u09AE\u09AF\u09BC",date:"ISO \u09A4\u09BE\u09B0\u09BF\u0996",time:"ISO \u09B8\u09AE\u09AF\u09BC",duration:"ISO \u09B8\u09AE\u09AF\u09BC\u0995\u09BE\u09B2",ipv4:"IPv4 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",ipv6:"IPv6 \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",mac:"MAC \u09A0\u09BF\u0995\u09BE\u09A8\u09BE",cidrv4:"IPv4 \u09B0\u09C7\u099E\u09CD\u099C",cidrv6:"IPv6 \u09B0\u09C7\u099E\u09CD\u099C",base64:"base64-\u098F\u09A8\u0995\u09CB\u09A1\u09C7\u09A1 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",base64url:"base64url-\u098F\u09A8\u0995\u09CB\u09A1\u09C7\u09A1 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",json_string:"JSON \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982",e164:"E.164 \u09A8\u09AE\u09CD\u09AC\u09B0",credit_card:"\u0995\u09CD\u09B0\u09C7\u09A1\u09BF\u099F \u0995\u09BE\u09B0\u09CD\u09A1 \u09A8\u09AE\u09CD\u09AC\u09B0",currency_code:"\u09AE\u09C1\u09A6\u09CD\u09B0\u09BE \u0995\u09CB\u09A1",iban:"IBAN",jwt:"JWT",template_literal:"\u0987\u09A8\u09AA\u09C1\u099F"},i={nan:"NaN"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return`\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F: \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 ${c}, \u09AA\u09CD\u09B0\u09BE\u09AA\u09CD\u09A4 ${m}`}case"invalid_value":return r.values.length===1?`\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F: \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 ${Ee(r.values[0])}`:`\u0985\u09AC\u09C8\u09A7 \u0985\u09AA\u09B6\u09A8: ${te(r.values," | ")} \u098F\u09B0 \u09AE\u09A7\u09CD\u09AF\u09C7 \u098F\u0995\u099F\u09BF \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin);return p?`\u0985\u09A8\u09C7\u0995 \u09AC\u09A1\u09BC: ${(s=r.origin)!=null?s:"\u09AE\u09BE\u09A8"} ${c}${r.maximum.toString()} ${(l=p.unit)!=null?l:"\u098F\u09B2\u09BF\u09AE\u09C7\u09A8\u09CD\u099F"} \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`:`\u0985\u09A8\u09C7\u0995 \u09AC\u09A1\u09BC: ${(u=r.origin)!=null?u:"\u09AE\u09BE\u09A8"} ${c}${r.maximum.toString()} \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin);return p?`\u0985\u09A8\u09C7\u0995 \u099B\u09CB\u099F: ${r.origin} ${c}${r.minimum.toString()} ${p.unit} \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`:`\u0985\u09A8\u09C7\u0995 \u099B\u09CB\u099F: ${r.origin} ${c}${r.minimum.toString()} \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`}case"invalid_format":{let c=r;return c.format==="starts_with"?`\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "${c.prefix}" \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B6\u09C1\u09B0\u09C1 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`:c.format==="ends_with"?`\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "${c.suffix}" \u09A6\u09BF\u09AF\u09BC\u09C7 \u09B6\u09C7\u09B7 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`:c.format==="includes"?`\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: "${c.includes}" \u0985\u09A8\u09CD\u09A4\u09B0\u09CD\u09AD\u09C1\u0995\u09CD\u09A4 \u09A5\u09BE\u0995\u09A4\u09C7 \u09B9\u09AC\u09C7`:c.format==="regex"?`\u0985\u09AC\u09C8\u09A7 \u09B8\u09CD\u099F\u09CD\u09B0\u09BF\u0982: ${c.pattern} \u09AA\u09CD\u09AF\u09BE\u099F\u09BE\u09B0\u09CD\u09A8 \u09AE\u09BF\u09B2\u09A4\u09C7 \u09B9\u09AC\u09C7`:`\u0985\u09AC\u09C8\u09A7 ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`\u0985\u09AC\u09C8\u09A7 \u09A8\u09AE\u09CD\u09AC\u09B0: ${r.divisor} \u098F\u09B0 \u0997\u09C1\u09A3\u09BF\u09A4\u0995 \u09B9\u09A4\u09C7 \u09B9\u09AC\u09C7`;case"unrecognized_keys":return`\u0985\u099A\u09C7\u09A8\u09BE \u0995\u09C0${r.keys.length>1?"\u0997\u09C1\u09B2\u09CB":""}: ${te(r.keys,", ")}`;case"invalid_key":return`${r.origin} \u098F \u0985\u09AC\u09C8\u09A7 \u0995\u09C0`;case"invalid_union":return r.options&&Array.isArray(r.options)&&r.options.length>0?`\u0985\u09AC\u09C8\u09A7 \u09A1\u09BF\u09B8\u0995\u09CD\u09B0\u09BF\u09AE\u09BF\u09A8\u09C7\u099F\u09B0 \u09AE\u09BE\u09A8\u0964 \u09AA\u09CD\u09B0\u09A4\u09CD\u09AF\u09BE\u09B6\u09BF\u09A4 ${r.options.map(p=>`'${p}'`).join(" | ")}`:"\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F";case"invalid_element":return`${r.origin} \u098F \u0985\u09AC\u09C8\u09A7 \u09AE\u09BE\u09A8`;default:return"\u0985\u09AC\u09C8\u09A7 \u0987\u09A8\u09AA\u09C1\u099F"}}};
var kpe=()=>{let t={string:{unit:"car\xE0cters",verb:"contenir"},file:{unit:"bytes",verb:"contenir"},array:{unit:"elements",verb:"contenir"},set:{unit:"elements",verb:"contenir"},map:{unit:"elements",verb:"contenir"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"entrada",email:"adre\xE7a electr\xF2nica",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"data i hora ISO",date:"data ISO",time:"hora ISO",duration:"durada ISO",ipv4:"adre\xE7a IPv4",ipv6:"adre\xE7a IPv6",mac:"adre\xE7a MAC",cidrv4:"rang IPv4",cidrv6:"rang IPv6",base64:"cadena codificada en base64",base64url:"cadena codificada en base64url",json_string:"cadena JSON",e164:"n\xFAmero E.164",credit_card:"n\xFAmero de targeta de cr\xE8dit",currency_code:"codi de moneda",iban:"IBAN",jwt:"JWT",template_literal:"entrada"},i={nan:"NaN"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`Tipus inv\xE0lid: s'esperava instanceof ${r.expected}, s'ha rebut ${m}`:`Tipus inv\xE0lid: s'esperava ${c}, s'ha rebut ${m}`}case"invalid_value":return r.values.length===1?`Valor inv\xE0lid: s'esperava ${Ee(r.values[0])}`:`Opci\xF3 inv\xE0lida: s'esperava una de ${te(r.values," o ")}`;case"too_big":{let c=r.inclusive?"com a m\xE0xim":"menys de",p=e(r.origin);return p?`Massa gran: s'esperava que ${(s=r.origin)!=null?s:"el valor"} contingu\xE9s ${c} ${r.maximum.toString()} ${(l=p.unit)!=null?l:"elements"}`:`Massa gran: s'esperava que ${(u=r.origin)!=null?u:"el valor"} fos ${c} ${r.maximum.toString()}`}case"too_small":{let c=r.inclusive?"com a m\xEDnim":"m\xE9s de",p=e(r.origin);return p?`Massa petit: s'esperava que ${r.origin} contingu\xE9s ${c} ${r.minimum.toString()} ${p.unit}`:`Massa petit: s'esperava que ${r.origin} fos ${c} ${r.minimum.toString()}`}case"invalid_format":{let c=r;return c.format==="starts_with"?`Format inv\xE0lid: ha de comen\xE7ar amb "${c.prefix}"`:c.format==="ends_with"?`Format inv\xE0lid: ha d'acabar amb "${c.suffix}"`:c.format==="includes"?`Format inv\xE0lid: ha d'incloure "${c.includes}"`:c.format==="regex"?`Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${c.pattern}`:`Format inv\xE0lid per a ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${r.divisor}`;case"unrecognized_keys":return`Clau${r.keys.length>1?"s":""} no reconeguda${r.keys.length>1?"s":""}: ${te(r.keys,", ")}`;case"invalid_key":return`Clau inv\xE0lida a ${r.origin}`;case"invalid_union":return"Entrada inv\xE0lida";case"invalid_element":return`Element inv\xE0lid a ${r.origin}`;default:return"Entrada inv\xE0lida"}}};
var Ipe=()=>{let t={string:{unit:"\u067E\u06CC\u062A",verb:"\u0628\u06CE\u062A"},file:{unit:"\u0628\u0627\u06CC\u062A",verb:"\u0628\u06CE\u062A"},array:{unit:"\u062F\u0627\u0646\u06D5",verb:"\u0628\u06CE\u062A"},set:{unit:"\u062F\u0627\u0646\u06D5",verb:"\u0628\u06CE\u062A"},map:{unit:"\u062F\u0627\u0646\u06D5",verb:"\u0628\u06CE\u062A"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"regex",email:"\u0626\u06CC\u0645\u06D5\u06CC\u06B5",url:"\u0628\u06D5\u0633\u062A\u06D5\u0631 (URL)",emoji:"\u0626\u06CC\u0645\u06C6\u062C\u06CC",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"\u0695\u06CE\u06A9\u06D5\u0648\u062A \u0648 \u06A9\u0627\u062A",date:"\u0695\u06CE\u06A9\u06D5\u0648\u062A",time:"\u06A9\u0627\u062A",duration:"\u0645\u0627\u0648\u06D5",ipv4:"\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC IPv4",ipv6:"\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC IPv6",mac:"\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC MAC",cidrv4:"\u0645\u06D5\u0648\u062F\u0627\u06CC IPv4",cidrv6:"\u0645\u06D5\u0648\u062F\u0627\u06CC IPv6",base64:"\u062F\u06D5\u0642\u06CC base64",base64url:"\u062F\u06D5\u0642\u06CC base64url",json_string:"\u062F\u06D5\u0642\u06CC JSON",e164:"\u0698\u0645\u0627\u0631\u06D5\u06CC E.164",credit_card:"\u0698\u0645\u0627\u0631\u06D5\u06CC \u06A9\u0627\u0631\u062A\u06CC \u06A9\u0631\u06CE\u062F\u06CC\u062A",currency_code:"\u06A9\u06C6\u062F\u06CC \u062F\u0631\u0627\u0648",iban:"IBAN",jwt:"JWT",template_literal:"\u062A\u06CE\u06A9\u0631\u062F\u06D5"},i={nan:"NaN",string:"\u0646\u0648\u0648\u0633\u06CC\u0646",number:"\u0698\u0645\u0627\u0631\u06D5",boolean:"boolean",array:"array",object:"object",date:"\u0695\u06CE\u06A9\u06D5\u0648\u062A",integer:"\u0698\u0645\u0627\u0631\u06D5",float:"\u0698\u0645\u0627\u0631\u06D5",null:"null",undefined:"undefined",function:"function",symbol:"symbol",unknown:"unknown",promise:"promise",void:"void",never:"never",map:"map",set:"set"};return r=>{var o,a,s;switch(r.code){case"invalid_type":{let l=(o=i[r.expected])!=null?o:r.expected,u=Me(r.input),f=(a=i[u])!=null?a:u,c=["\u0627","\u0648","\u06C6","\u0648\u0648","\u06D5","\u06CC","\u06CE"].some(m=>f.endsWith(m))?"\u06CC\u06D5":"\u06D5",p=/^[a-zA-Z]+$/.test(f);return u==="null"||u==="undefined"?"\u062F\u0627\u0648\u0627\u06A9\u0631\u0627\u0648\u06D5":`\u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 ${l} \u0628\u06CE\u062A\u060C \u0628\u06D5\u06B5\u0627\u0645 ${f}${p?"":c}`}case"invalid_value":return r.values.length===1?`\u0628\u06D5\u0647\u0627\u06A9\u06D5 \u0646\u0627\u062F\u0631\u0648\u0648\u0633\u062A\u06D5: \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 ${Ee(r.values[0])} \u0628\u06CE\u062A`:`\u0647\u06D5\u06B5\u0628\u0698\u0627\u0631\u062F\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648\u06D5 \u06CC\u06D5\u06A9\u06CE\u06A9 \u0628\u06CE\u062A \u0644\u06D5 ${te(r.values,"|")}`;case"too_big":{let l=e(r.origin);return l?`\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u0632\u06C6\u0631\u06D5\u0648\u06D5 ${r.maximum.toString()} ${l.unit} ${l.verb}`:`\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u0632\u06C6\u0631\u06D5\u0648\u06D5 ${r.maximum.toString()} \u0628\u06CE\u062A`}case"too_small":{let l=e(r.origin);return l?`\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u06A9\u06D5\u0645\u06D5\u0648\u06D5 ${r.minimum.toString()} ${l.unit} ${l.verb}`:`\u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0628\u06D5 \u0644\u0627\u06CC\u06D5\u0646\u06CC \u06A9\u06D5\u0645\u06D5\u0648\u06D5 ${r.minimum.toString()} \u0628\u06CE\u062A`}case"invalid_format":{let l=r;return l.format==="starts_with"?`\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u062F\u06D5\u0633\u062A\u067E\u06CE\u0628\u06A9\u0627\u062A \u0628\u06D5 "${l.prefix}"`:l.format==="ends_with"?`\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u06A9\u06C6\u062A\u0627\u06CC\u06CC\u0628\u06CE\u062A \u0628\u06D5 "${l.suffix}"`:l.format==="includes"?`\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 "${l.includes}" \u0644\u06D5\u062E\u06C6\u0628\u06AF\u0631\u06CE\u062A`:l.format==="regex"?`\u062F\u06D5\u0642\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u067E\u06CE\u0648\u06CC\u0633\u062A\u06D5 \u0644\u06D5\u06AF\u06D5\u06B5 \u067E\u0627\u062A\u06CE\u0631\u0646\u06CC ${l.pattern} \u0628\u06AF\u0648\u0646\u062C\u06CE\u062A`:`\u0628\u06D5\u0647\u0627\u06CC ${(s=n[l.format])!=null?s:r.format} \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06D5`}case"not_multiple_of":return`\u0698\u0645\u0627\u0631\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A: \u062F\u06D5\u0628\u06CE\u062A \u0686\u06D5\u0646\u062F \u0647\u06CE\u0646\u062F\u06D5 \u0628\u06CE\u062A \u0628\u06C6 ${r.divisor}`;case"unrecognized_keys":return`\u06A9\u0644\u06CC\u0644\u06CC \u0646\u06D5\u0646\u0627\u0633\u0631\u0627\u0648: ${te(r.keys,", ")}`;case"invalid_key":return`\u06A9\u0644\u06CC\u0644\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A \u0644\u06D5 ${r.origin}`;case"invalid_union":return r.options&&Array.isArray(r.options)&&r.options.length>0?`\u0628\u06D5\u0647\u0627\u06CC \u0646\u06D5\u0646\u0627\u0633\u0631\u0627\u0648 \u0647\u06D5\u06CC\u06D5. \u0628\u06D5\u0647\u0627\u06CC \u0686\u0627\u0648\u06D5\u0695\u0648\u0627\u0646\u06A9\u0631\u0627\u0648: ${r.options.map(u=>`'${u}'`).join(" | ")}`:"\u06CC\u06D5\u06A9\u06AF\u0631\u062A\u0646\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A";case"invalid_element":return`${r.origin} \u0628\u06D5\u0647\u0627\u06A9\u06D5 \u0646\u0627\u062F\u0631\u0648\u0633\u062A\u06D5`;default:return"\u062A\u06CE\u06A9\u0631\u062F\u06D5\u06CC \u0646\u0627\u062F\u0631\u0648\u0633\u062A"}}};
var Ppe=()=>{let t={string:{unit:"znak\u016F",verb:"m\xEDt"},file:{unit:"bajt\u016F",verb:"m\xEDt"},array:{unit:"prvk\u016F",verb:"m\xEDt"},set:{unit:"prvk\u016F",verb:"m\xEDt"},map:{unit:"prvk\u016F",verb:"m\xEDt"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"regul\xE1rn\xED v\xFDraz",email:"e-mailov\xE1 adresa",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"datum a \u010Das ve form\xE1tu ISO",date:"datum ve form\xE1tu ISO",time:"\u010Das ve form\xE1tu ISO",duration:"doba trv\xE1n\xED ISO",ipv4:"IPv4 adresa",ipv6:"IPv6 adresa",mac:"MAC adresa",cidrv4:"rozsah IPv4",cidrv6:"rozsah IPv6",base64:"\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",base64url:"\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",json_string:"\u0159et\u011Bzec ve form\xE1tu JSON",e164:"\u010D\xEDslo E.164",credit_card:"\u010D\xEDslo kreditn\xED karty",currency_code:"k\xF3d m\u011Bny",iban:"IBAN",jwt:"JWT",template_literal:"vstup"},i={nan:"NaN",number:"\u010D\xEDslo",string:"\u0159et\u011Bzec",function:"funkce",array:"pole"};return r=>{var o,a,s,l,u,f,c,p,m;switch(r.code){case"invalid_type":{let g=(o=i[r.expected])!=null?o:r.expected,_=Me(r.input),b=(a=i[_])!=null?a:_;return/^[A-Z]/.test(r.expected)?`Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${r.expected}, obdr\u017Eeno ${b}`:`Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${g}, obdr\u017Eeno ${b}`}case"invalid_value":return r.values.length===1?`Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${Ee(r.values[0])}`:`Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${te(r.values,"|")}`;case"too_big":{let g=r.inclusive?"<=":"<",_=e(r.origin);return _?`Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${(s=r.origin)!=null?s:"hodnota"} mus\xED m\xEDt ${g}${r.maximum.toString()} ${(l=_.unit)!=null?l:"prvk\u016F"}`:`Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${(u=r.origin)!=null?u:"hodnota"} mus\xED b\xFDt ${g}${r.maximum.toString()}`}case"too_small":{let g=r.inclusive?">=":">",_=e(r.origin);return _?`Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${(f=r.origin)!=null?f:"hodnota"} mus\xED m\xEDt ${g}${r.minimum.toString()} ${(c=_.unit)!=null?c:"prvk\u016F"}`:`Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${(p=r.origin)!=null?p:"hodnota"} mus\xED b\xFDt ${g}${r.minimum.toString()}`}case"invalid_format":{let g=r;return g.format==="starts_with"?`Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${g.prefix}"`:g.format==="ends_with"?`Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${g.suffix}"`:g.format==="includes"?`Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${g.includes}"`:g.format==="regex"?`Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${g.pattern}`:`Neplatn\xFD form\xE1t ${(m=n[g.format])!=null?m:r.format}`}case"not_multiple_of":return`Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${r.divisor}`;case"unrecognized_keys":return`Nezn\xE1m\xE9 kl\xED\u010De: ${te(r.keys,", ")}`;case"invalid_key":return`Neplatn\xFD kl\xED\u010D v ${r.origin}`;case"invalid_union":return"Neplatn\xFD vstup";case"invalid_element":return`Neplatn\xE1 hodnota v ${r.origin}`;default:return"Neplatn\xFD vstup"}}};
var Dpe=()=>{let t={string:{unit:"tegn",verb:"havde"},file:{unit:"bytes",verb:"havde"},array:{unit:"elementer",verb:"indeholdt"},set:{unit:"elementer",verb:"indeholdt"},map:{unit:"elementer",verb:"indeholdt"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"input",email:"e-mailadresse",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO dato- og klokkesl\xE6t",date:"ISO-dato",time:"ISO-klokkesl\xE6t",duration:"ISO-varighed",ipv4:"IPv4-adresse",ipv6:"IPv6-adresse",mac:"MAC-adresse",cidrv4:"IPv4-spektrum",cidrv6:"IPv6-spektrum",base64:"base64-kodet streng",base64url:"base64url-kodet streng",json_string:"JSON-streng",e164:"E.164-nummer",credit_card:"kreditkortnummer",currency_code:"valutakode",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN",string:"streng",number:"tal",boolean:"boolean",array:"liste",object:"objekt",set:"s\xE6t",file:"fil"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`Ugyldigt input: forventede instanceof ${r.expected}, fik ${m}`:`Ugyldigt input: forventede ${c}, fik ${m}`}case"invalid_value":return r.values.length===1?`Ugyldig v\xE6rdi: forventede ${Ee(r.values[0])}`:`Ugyldigt valg: forventede en af f\xF8lgende ${te(r.values,"|")}`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin),m=(s=i[r.origin])!=null?s:r.origin;return p?`For stor: forventede ${m!=null?m:"value"} ${p.verb} ${c} ${r.maximum.toString()} ${(l=p.unit)!=null?l:"elementer"}`:`For stor: forventede ${m!=null?m:"value"} havde ${c} ${r.maximum.toString()}`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin),m=(u=i[r.origin])!=null?u:r.origin;return p?`For lille: forventede ${m} ${p.verb} ${c} ${r.minimum.toString()} ${p.unit}`:`For lille: forventede ${m} havde ${c} ${r.minimum.toString()}`}case"invalid_format":{let c=r;return c.format==="starts_with"?`Ugyldig streng: skal starte med "${c.prefix}"`:c.format==="ends_with"?`Ugyldig streng: skal ende med "${c.suffix}"`:c.format==="includes"?`Ugyldig streng: skal indeholde "${c.includes}"`:c.format==="regex"?`Ugyldig streng: skal matche m\xF8nsteret ${c.pattern}`:`Ugyldig ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`Ugyldigt tal: skal v\xE6re deleligt med ${r.divisor}`;case"unrecognized_keys":return`${r.keys.length>1?"Ukendte n\xF8gler":"Ukendt n\xF8gle"}: ${te(r.keys,", ")}`;case"invalid_key":return`Ugyldig n\xF8gle i ${r.origin}`;case"invalid_union":return"Ugyldigt input: matcher ingen af de tilladte typer";case"invalid_element":return`Ugyldig v\xE6rdi i ${r.origin}`;default:return"Ugyldigt input"}}};
var zpe=()=>{let t={string:{unit:"Zeichen",verb:"zu haben"},file:{unit:"Bytes",verb:"zu haben"},array:{unit:"Elemente",verb:"zu haben"},set:{unit:"Elemente",verb:"zu haben"},map:{unit:"Elemente",verb:"zu haben"}};function e(r){var o;return(o=t[r])!=null?o:null}let n={regex:"Eingabe",email:"E-Mail-Adresse",url:"URL",emoji:"Emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO-Datum und -Uhrzeit",date:"ISO-Datum",time:"ISO-Uhrzeit",duration:"ISO-Dauer",ipv4:"IPv4-Adresse",ipv6:"IPv6-Adresse",mac:"MAC-Adresse",cidrv4:"IPv4-Bereich",cidrv6:"IPv6-Bereich",base64:"Base64-codierter String",base64url:"Base64-URL-codierter String",json_string:"JSON-String",e164:"E.164-Nummer",credit_card:"Kreditkartennummer",currency_code:"W\xE4hrungscode",iban:"IBAN",jwt:"JWT",template_literal:"Eingabe"},i={nan:"NaN",number:"Zahl",array:"Array"};return r=>{var o,a,s,l,u,f;switch(r.code){case"invalid_type":{let c=(o=i[r.expected])!=null?o:r.expected,p=Me(r.input),m=(a=i[p])!=null?a:p;return/^[A-Z]/.test(r.expected)?`Ung\xFCltige Eingabe: erwartet instanceof ${r.expected}, erhalten ${m}`:`Ung\xFCltige Eingabe: erwartet ${c}, erhalten ${m}`}case"invalid_value":return r.values.length===1?`Ung\xFCltige Eingabe: erwartet ${Ee(r.values[0])}`:`Ung\xFCltige Option: erwartet eine von ${te(r.values,"|")}`;case"too_big":{let c=r.inclusive?"<=":"<",p=e(r.origin);return p?`Zu gro\xDF: erwartet, dass ${(s=r.origin)!=null?s:"Wert"} ${c}${r.maximum.toString()} ${(l=p.unit)!=null?l:"Elemente"} hat`:`Zu gro\xDF: erwartet, dass ${(u=r.origin)!=null?u:"Wert"} ${c}${r.maximum.toString()} ist`}case"too_small":{let c=r.inclusive?">=":">",p=e(r.origin);return p?`Zu klein: erwartet, dass ${r.origin} ${c}${r.minimum.toString()} ${p.unit} hat`:`Zu klein: erwartet, dass ${r.origin} ${c}${r.minimum.toString()} ist`}case"invalid_format":{let c=r;return c.format==="starts_with"?`Ung\xFCltiger String: muss mit "${c.prefix}" beginnen`:c.format==="ends_with"?`Ung\xFCltiger String: muss mit "${c.suffix}" enden`:c.format==="includes"?`Ung\xFCltiger String: muss "${c.includes}" enthalten`:c.format==="regex"?`Ung\xFCltiger String: muss dem Muster ${c.pattern} entsprechen`:`Ung\xFCltig: ${(f=n[c.format])!=null?f:r.format}`}case"not_multiple_of":return`Ung\xFCltige Zahl: muss ein Vielfaches von ${r.divisor} sein`;case"unrecognized_keys":return`${r.keys.length>1?"Unbekannte Schl\xFCssel":"Unbekannter Schl\xFCssel"}: ${te(r.keys,", ")}`;case"invalid_key":return`Ung\xFCltiger Schl\xFCssel in ${r.origin}`;case"invalid_union":return"Ung\xFCltige Eingabe";case"invalid_element":return`Ung\xFCltiger Wert in ${r.origin}`;default:return"Ung\xFCltige Eingabe"}}};
}catch(e){window.__paperLifecycle?.fatal(e)}}