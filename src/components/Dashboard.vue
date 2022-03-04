<template>
  <Header/>
<div class="px-10 py-10">
  <div v-show="modal" class="min-w-screen h-screenanimated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"   id="modal-id"><div class="absolute bg-black opacity-80 inset-0 z-0"></div>
    <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
      <!--content-->
      <div class="">
        <!--body-->
		
        <div class="text-center p-5 flex-auto justify-center">
                
				
               
                        <h2 class="text-xl font-bold py-4 ">Editar</h2>
                        <label>Nome da categoria</label>
					
        </div>
        <!--footer-->
        <div class="p-3  mt-2 text-center space-x-4 md:block">
            <button @click="this.modal = false"  class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                Cancelar
            </button>
            <button class="mb-2 md:mb-0 bg-green-600 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-700">Editar</button>
        </div>
		
      </div>
    </div>
</div>
  <div id="table" class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-screen-sm sm:text-center sm:mx-auto">
      <a href="/" aria-label="View" class="inline-block mb-5 rounded-full sm:mx-auto">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd"></path></svg>
        </div>
      </a>
      <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
        Todos os resultados encontrados
      </h2>
      <hr class="w-full my-8 border-gray-300" />
      <div class="inline-grid grid-cols-3 gap-4">
        <AppFormSelect :list="genders" :titulo="'Selecione um gênero'" v-model="genderSelected"/>
        <AppFormSelect :list="[{'value': '10', 'name': '10'}, {'value': '20', 'name': '20'}, {'value': '50', 'name': '50'}]" :titulo="'disabled?'" v-model="resultsPerPage" disabled/>
        <AppFormSelect :list="[{'value': '1', 'name': '1'}, {'value': '2', 'name': '2'}, {'value': '3', 'name': '3'}]" :titulo="'Página'" v-model="pageSelect"/>
      </div>
       
      <button @click.prevent="filter" class="mt-4 md:mb-0 bg-red-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-500">Buscar</button>
      
    </div>
  </div>
  <div class="flex flex-col">
    <div class="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      
        <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          
            <table  class="min-w-full">
                <thead>
                    <tr>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Nome</th>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Genero</th>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Nascimento</th>
                        <th
                            class="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                            Ver</th>
                        
                    </tr>
                </thead>

                <tbody class="bg-white">
                    <tr v-for="paciente in pacientes" :key="paciente.id">
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="flex items-center">
                                <div class="flex-shrink-0 w-10 h-10">
                                    <img class="w-10 h-10 rounded-full" :src="paciente.picture.large"
                                        alt="admin dashboard ui">
                                </div>

                                <div class="ml-4">
                                    <div class="text-sm font-medium leading-5 text-gray-900">
                                        {{ paciente.name.first }}
                                    </div>
                                </div>
                            </div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">{{ paciente.gender === 'male' ? 'Masculino' : 'Feminino'}}</div>
                        </td>

                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <div class="text-sm leading-5 text-gray-500">{{ new Date(paciente.dob.date).toISOString().slice(0, 10)  }}</div>
                        </td>

                        <td class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                            <a @click="getInfo(paciente.login.md5)">
                              <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            
        </div>
        
    </div>
    
</div>
</div>
</template>
<script>
import Header from './Header.vue'
import AppFormSelect from './Ui/AppFormSelect.vue'


const genders = [{
  'value': 'male',
  'name': 'Masculino'
  }, 
  {
  'value': 'female',
  'name': 'Feminino'
  }
  ]
export default {
  components: {
    Header,
    AppFormSelect,
    
  },
  data() {
    return {
      modal: false,
      idModal: '',
      genderSelected: '',
      pageSelect: '',
      genders,
    };
  },
  methods: {
    getInfo(id){
      this.modal = true;
      this.idModal = id
      console.log(id)
    },

    filter(){
      this.$store.dispatch("getPacientes", this.pageSelect, this.genderSelected)
    }
  },
  computed: {
    pacientes(){
      return this.$store.state.pacientes
    },
  },
  mounted(){
    this.$store.dispatch("getPacientes")
  },
  
};
</script>