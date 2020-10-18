<template>
  <div class="flex justify-between w-4/5 my-5">
      <p class="text-teal-600 text-sm">Showing <b>{{(currentPage-1)*pageSize+1}}</b> 
      to <b>{{(totalSize>currentPage*10)?currentPage*10:totalSize}}</b> of <b>{{totalSize}}</b> Results</p>
      <div class="flex">
          <div 
            class="bg-teal-600 text-white p-2"
            :class="currentPage==1? 'opacity-50':'opacity-100'"
            :disabled="currentPage==1" 
            @click="$emit('prev')">prev</div>
          <div class="border-2 mx-2 px-3 py-1"> 
              <p>
                  <b>{{currentPage}}</b> 
                  of 
                  <b>{{Math.ceil(totalSize/pageSize)}}</b>
                </p>
          </div>
          <div
            class="bg-teal-600 text-white p-2"
            :class="currentPage==Math.ceil(totalSize/pageSize)? 'opacity-50':'opacity-100'" 
            :disabled="currentPage==Math.ceil(totalSize/pageSize)" 
            @click="$emit('next')"
            >next</div>
        </div>
  </div>
</template>

<script>
export default {
    props: ['totalSize','currentPage','pageSize'],
    emits:['next','prev']
}
</script>
