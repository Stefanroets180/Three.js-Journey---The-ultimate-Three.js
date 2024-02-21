varying vec2 vUv;


void main()
{
    //(vUv.x, vUv.y, vUv.z)Same is only one veror
    gl_FragColor = vec4(vUv, 0.0, 1.0);
}