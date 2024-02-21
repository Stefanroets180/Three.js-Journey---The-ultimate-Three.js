varying vec2 vUv;


void main()
{
    //(vUv.x, vUv.y, vUv.z)Same is only one veror
    gl_FragColor = vec4(vUv.x, vUv.x, vUv.x, 1.0);
}