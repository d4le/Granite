#version 450
precision mediump float;

#if defined(HAVE_EMISSIVE) && HAVE_EMISSIVE
layout(set = 2, binding = 0) uniform mediump samplerCube uSkybox;
#endif
layout(location = 0) in highp vec3 vDirection;

layout(location = 0) out mediump vec3 Emissive;

layout(std430, push_constant) uniform Registers
{
    vec3 color;
} registers;

void main()
{
#if defined(HAVE_EMISSIVE) && HAVE_EMISSIVE
    Emissive = texture(uSkybox, vDirection).rgb * registers.color;
#else
    Emissive = registers.color;
#endif
}
