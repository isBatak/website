import { chakra, forwardRef } from '@chakra-ui/react';

export const GeneralSecurity = forwardRef<any, 'svg'>((props, ref) => (
  <chakra.svg ref={ref} viewBox="0 0 120px 80px" fill="#fff" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M93.23 66.151c.048-.335.382-.454 1.36-.55.74-.072 1.336-.239 1.408-.406.048-.168 0-.311-.12-.311-3.96-.144-4.127-.311-4.127-3.371 0-1.722.072-2.176.358-2.296.62-.215.716.096.716 2.152 0 1.076.071 2.08.167 2.248.119.143.763.263 1.622.239l1.432-.048v-2.32c0-2.175.023-2.343.477-2.343.453 0 .477.168.477 3.18 0 4.041-.095 4.232-2.29 4.232-1.36 0-1.551-.047-1.48-.406Zm-68.045-1.482c-.334-.096-.716-.43-.883-.742-.382-.765-.406-5.499-.048-6.312.334-.717 1.384-.932 3.794-.813 1.193.048 1.55.168 1.622.455.048.334-.286.406-2.1.502-1.192.072-2.242.215-2.338.31-.214.192-.167 5.332.048 5.548.072.071.907.143 1.837.143 1.933 0 2.124-.143 2.124-1.674v-1.028h-1.193c-1.026 0-1.193-.072-1.193-.478 0-.43.167-.478 1.67-.478h1.67l-.12 1.984c-.142 2.51-.429 2.798-2.72 2.774-.858-.024-1.836-.096-2.17-.191Zm6.919.047c-.955-.167-1.193-.717-1.193-2.82 0-2.607.238-2.846 2.744-2.703 2.028.096 2.266.263 2.266 1.65 0 1.243-.549 1.65-2.338 1.65-1.312 0-1.48-.048-1.48-.478 0-.383.192-.455 1.385-.526 1.264-.072 1.36-.12 1.36-.67 0-.574-.072-.598-1.432-.598h-1.432l-.071 1.53c-.048.838.048 1.65.167 1.77.143.143.978.263 1.86.287 1.432.024 1.623.072 1.623.502 0 .382-.19.454-1.431.478-.788.024-1.694 0-2.028-.072Zm4.7.024c-.096-.095-.167-1.386-.167-2.893v-2.702h2.1c2.886 0 2.934.048 3.053 3.037.12 2.51-.047 3.037-.787 2.439-.31-.263-.334-.646-.215-2.08.215-2.224.048-2.44-1.789-2.44h-1.384l-.071 2.32c-.072 2.128-.287 2.774-.74 2.32Zm6.99-.024c-1.073-.215-1.192-.478-1.192-2.701 0-2.63.214-2.87 2.41-2.87 1.98 0 2.6.383 2.6 1.674 0 1.22-.62 1.674-2.314 1.674-1.098 0-1.265-.072-1.265-.455 0-.406.191-.478 1.265-.55 1.145-.071 1.24-.119 1.24-.669 0-.526-.119-.598-.93-.67-.525-.047-1.193-.023-1.503.048-.501.144-.549.264-.549 1.818v1.673h1.766c1.383 0 1.789.072 1.908.383.072.215.096.478 0 .598-.119.215-2.338.239-3.435.047Zm4.7 0c-.095-.071-.166-1.147-.166-2.39 0-1.913.071-2.296.477-2.702.644-.646 1.909-.646 1.909-.024 0 .334-.191.502-.645.55l-.668.071-.071 2.344c-.048 1.697-.143 2.319-.382 2.319-.167 0-.382-.072-.453-.168Zm3.723.024c-.668-.167-.93-.502-1.122-1.458-.262-1.196.454-1.746 2.243-1.746 1.265 0 1.432.048 1.432.479 0 .43-.167.478-1.313.478-1.24 0-1.312.024-1.312.598 0 .597.024.621 1.503.55l1.48-.072.071-1.172c.143-2.152.048-2.271-1.932-2.343-1.337-.048-1.718-.143-1.718-.43 0-.287.405-.383 1.837-.43 1.622-.049 1.909 0 2.362.454.453.454.501.717.406 2.486-.024 1.1-.191 2.128-.335 2.272-.31.31-2.743.526-3.602.334Zm4.795-.167c-.047-.167-.071-1.96-.047-3.993.071-3.3.119-3.706.5-3.778.382-.071.406.24.406 3.993 0 3.515-.047 4.089-.358 4.089-.214 0-.429-.144-.5-.311Zm4.748.143c-.167-.047-.31-.263-.31-.454 0-.239.31-.335 1.17-.335.62 0 1.646-.071 2.218-.143 1.026-.143 1.098-.215 1.217-1.004.262-1.483-.072-1.722-2.219-1.722-2.362 0-2.863-.358-2.863-2.032 0-.837.143-1.243.596-1.698.55-.55.74-.574 2.744-.55 2.195.048 2.649.216 2.171.79-.19.239-.715.286-1.884.19-1.91-.119-2.673.168-2.673 1.029 0 1.22.167 1.315 2.243 1.315 1.05 0 2.076.096 2.243.191.811.526.883 3.515.12 4.16-.383.311-4.152.502-4.773.263Zm7.397 0c-1.074-.143-1.36-.789-1.36-2.917.023-2.271.381-2.654 2.576-2.654 1.91 0 2.53.407 2.53 1.65 0 1.34-.573 1.746-2.291 1.65-1.121-.048-1.408-.167-1.48-.478-.07-.359.096-.43 1.074-.43 1.337 0 1.814-.24 1.694-.861-.047-.359-.334-.479-1.36-.526-.715-.048-1.383.024-1.527.167-.238.24-.286 3.084-.047 3.324.071.071.74.119 1.503.095 1.48-.048 2.1.191 1.909.694-.144.334-1.742.478-3.221.286Zm5.535 0c-.859-.19-1.074-.789-1.074-2.845 0-2.463.263-2.726 2.696-2.726 1.432 0 1.623.048 1.551.43-.048.312-.405.431-1.622.527l-1.551.12-.072 1.53c-.047.837.024 1.625.12 1.721.119.12.763.24 1.479.31 1.312.097 1.86.383 1.598.838-.167.263-2.17.31-3.125.095Zm4.891 0c-1.002-.19-1.193-.693-1.193-3.227 0-2.176.024-2.343.477-2.343.453 0 .477.167.477 2.127 0 1.196.096 2.2.215 2.272.453.287 2.29.406 2.648.167.263-.191.358-.765.358-2.343 0-2.008.024-2.104.55-2.176.524-.071.524-.071.452 2.343-.095 2.894-.262 3.156-2.123 3.252-.692.024-1.527 0-1.861-.072Zm4.939.024c-.096-.095-.167-1.22-.167-2.51 0-2.152.047-2.367.525-2.702.286-.215.835-.383 1.193-.383.906 0 .882.67-.048.98-.692.264-.692.264-.764 2.44-.071 1.984-.286 2.63-.74 2.175Zm3.101 0c-.095-.095-.167-1.386-.167-2.893 0-2.558.024-2.702.478-2.702.477 0 .5.12.43 2.798-.073 2.582-.263 3.276-.74 2.797Zm1.91-.86c-.072-.574-.12-1.602-.12-2.296 0-.693-.143-1.41-.286-1.602-.239-.287-.239-.43.023-.74.167-.216.334-.79.334-1.316.048-1.698.836-1.554.836.167 0 .861.071 1.052.429 1.052.239 0 .501.072.596.144.263.263-.119.813-.572.813-.382 0-.453.239-.501 2.32-.048 1.505-.167 2.342-.358 2.39-.167.072-.31-.287-.382-.932Zm-2.005-5.858c-.501-.191-.358-.98.19-1.148.645-.215 1.027.167.812.813-.143.502-.43.574-1.002.335Zm-56.283-8.416c-.048-.048-.096-1.578-.096-3.372v-3.251h24.933c24.765.024 24.956.024 25.076-.455.071-.263.071-1.865.023-3.586l-.095-3.108-1.455-.072-1.48-.072v-7.627h11.93l-.048 10.783-.071 10.807-29.3.024c-16.128.024-29.37-.024-29.417-.071Z" />
    <path d="M45.322 40.759c-.048-.048-.096-4.328-.096-9.516v-9.396l15.46.047 15.437.072-.071 2.271c-.048 1.244-.12 2.296-.167 2.344-.048.071-5.583.095-12.264.071l-12.192-.024v9.469l8.9-.072c4.867-.048 9.066-.096 9.305-.072.31 0 .405-.191.405-.837v-.837H55.247v-5.26h20.757v11.836H60.711c-8.399 0-15.342-.048-15.39-.096Z" />
    <path d="M31.15 24.357V13h58.93v6.934l-24.86.048-24.885.071.024 3.945.024 3.945 1.479.12 1.48.12.047 3.777.048 3.754H31.149V24.357Z" />
  </chakra.svg>
));
