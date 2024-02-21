varying vec2 vUv;


void main()
{
    // Pattern 2.1
    // gl_FragColor = vec4(vUv.x, vUv.x, vUv.x, 1.0);

    // Pattern 2.2
    // gl_FragColor = vec4(vUv, 0.0, 1.0);

    // Pattern 3
    // float strength = vUv.x;

    // Pattern 4
    // float strength = vUv.y;

    // Pattern 5
    // float strength = 1.0 - vUv.y;

    // Pattern 6
    // float strength = vUv.y * 10.0;

    // Pattern 7
    // gl_FragColor = vec4(vUv, 1.0, 1.0);

    // Pattern 8
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.5, strength);

    // Pattern 9
    // float strength = mod(vUv.y * 10.0, 1.0);
    // strength = step(0.8, strength);

    // Pattern 10
    // float strength = mod(vUv.x * 10.0, 1.0);
    // strength = step(0.8, strength);

    // Pattern 11
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength += step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 12
    // float strength = step(0.8, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 13
    // float strength = step(0.4, mod(vUv.x * 10.0, 1.0));
    // strength *= step(0.8, mod(vUv.y * 10.0, 1.0));

    // Pattern 14
    // float barX = step(0.4, mod(vUv.x * 10.0, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0, 1.0));
    // float strength = barX + barY;

    // Pattern 15
    // float barX = step(0.4, mod(vUv.x * 10.0 - 0.2, 1.0)) * step(0.8, mod(vUv.y * 10.0, 1.0));
    // float barY = step(0.8, mod(vUv.x * 10.0, 1.0)) * step(0.4, mod(vUv.y * 10.0 - 0.2, 1.0));
    // float strength = barX + barY;


    // Pattern 16
    // float strength = abs(vUv.x - 0.5);

    // Pattern 17
    // float strength = min(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 18
    // float strength = max(abs(vUv.x - 0.5), abs(vUv.y - 0.5));

    // Pattern 19
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 20
    // float strength = step(0.2, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));
    // strength *= 1.0 - step(0.25, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

    // Pattern 21
    // float strength = floor(vUv.x * 10.0) / 10.0;

    // Pattern 22
    // float strength = floor(vUv.x * 10.0) / 10.0 * floor(vUv.y * 10.0) / 10.0;

    // Pattern 23
    // float random(vec2 st)
    // {
    //    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    //  }
    //
    //  void main()
    //  {

    // Pattern 24

    // Pattern 25

    // Pattern 26

    // Pattern 27

    // Pattern 28

    // Pattern 29

    // Pattern 30

    // Pattern 31

    // Pattern 32

    // Pattern 33

    // Pattern 34

    // Pattern 35

    // Pattern 36

    // Pattern 37

    // Pattern 38

    // Pattern 39

    // Pattern 40

    // Pattern 41

    // Pattern 42

    // Pattern 43

    // Pattern 44

    // Pattern 45

    // Pattern 46

    // Pattern 47

    // Pattern 48

    // Pattern 49

    // Pattern 50

    gl_FragColor = vec4(vec3(strength), 1.0);
}