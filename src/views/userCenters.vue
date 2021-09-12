<template>
    <div id="div1">

		<table align="center" >
			<tr class="firstLine">
				<td>操作</td>
				<td colspan="2"><a v-on:click="getForm" id="stylea">提交</a></td>
			</tr>  
			<tr class="firstLine">
				<td>视图类型</td>
				<td>输入数据</td>
				<td>绑定到Vue上的数值</td>
			</tr>       
			<tr>
				<td>
					单行文本
				</td>
				<td>
				<input v-on:click="getValue" v-model.lazy="dataObject.input" placeholder="输入数据">				 
				<br><input type="number" v-model="dataObject.numinput" placeholder="输入数字">
				</td>
				<td>
					<p>{{ dataObject.input }}</p>  
					<p>{{ dataObject.numinput }}</p>
				</td>
			</tr>
			<tr>
				<td>
					多行文本
				</td>
				<td>
					<textarea v-model.trim="dataObject.textarea" placeholder="输入数据"></textarea>
				</td>
				<td>
					<p>{{ dataObject.textarea }}</p>   
				</td>
			</tr>
			<tr>
				<td>
					单个复选框
				</td>
				<td>
					<input type="checkbox" id="checkbox" v-model="dataObject.checked">
				</td>
				<td>
					<p>{{ dataObject.checked }}</p>   
				</td>
			</tr>
			<tr>
				<td>
					多个复选框
				</td>
				<td>
					  <input type="checkbox" id="teemo" value="teemo" v-model="dataObject.checkedes">
					  <label for="teemo">teemo</label>
					  <input type="checkbox" id="gareen" value="gareen" v-model="dataObject.checkedes">
					  <label for="gareen">gareen</label>
					  <input type="checkbox" id="annie" value="annie" v-model="dataObject.checkedes">
					  <label for="annie">annie</label>
				</td>
				<td>
					<p>{{ dataObject.checkedes }}</p>   
				</td>
			</tr>
			<tr>
				<td>
					单选按钮
				</td>
				<td>
				  <input type="radio" id="one" value="One" v-model="dataObject.radio">
				  <label for="one">One</label>
				  <input type="radio" id="two" value="Two" v-model="dataObject.radio">
				  <label for="two">Two</label>
				</td>
				<td>
					<p>{{ dataObject.radio }}</p>   
				</td>
			</tr>
			<tr>
				<td>
					单选选择框
				</td>
				<td>
				  <select v-bind:id="dataObject.dynamicId" style="width:100px;height:88px" v-model="dataObject.selected" size="5">
					<option disabled value="">请选择</option>
					<option>AD</option>
					<option>AC</option>
					<option>ADC</option>
				  </select>
				</td>
				<td>
					<p>{{ dataObject.selected }},{{dataObject.dynamicId}}</p>   
				</td>
			</tr>
			<tr>
				<td>
					多选选择框
				</td>
				<td>
				  (通过ctrl或者shift进行多选)<br>
				  <select v-bind:class="{'textColor':isColor, 'textSize':isSize}" style="width:100px;height:88px" v-model="dataObject.selecteds" multiple size="5">
					<option disabled value="">请选择</option>
					<option>AD</option>
					<option>AC</option>
					<option>ADC</option>
				  </select>
				</td>
				<td>
					<p>{{ dataObject.selecteds }}</p>   
				</td>
			</tr>
			<tr>
				<td>
					单个复选框
				</td>
				<td>
					默认值是true或者false,自定义的值<br>
					<input type="checkbox" id="toggle" true-value="1" false-value="0" v-model="dataObject.toggle">
				</td>
				<td>
					<p>{{ dataObject.toggle }}</p>   
				</td>
			</tr>       
		</table>
	</div>
</template>

<style>
		table tr td{
			border:1px solid gray;
			padding:6px;
			white-space:nowrap; 

		}
		table{
			border-collapse:collapse;
			width:690px;
			table-layout:fixed;
		}
		tr.firstLine{
			background-color: lightGray;
		}
		.textColor{
			color:#f00;
		}
		.textSize{
			font-size:16px;
		}
		#stylea{
			cursor: pointer;
			text-decoration: none;
			font-weight: bold;
			color: red;
		}
</style>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
	  dataObject:{
		input:'',
		numinput:'',
		dynamicId:'666',
		textarea:'',
		checked:'true',
		checkedes:['teemo'],
		radio:'One',
		selected:'AD',
		selecteds:['AD'],
		toggle:'1'
	  },
	  dataObjects:{},
	  arrSource:[{numStr:"1"},{numStr:"6"},{numStr:"8"},{numStr:"9"}],
	  arrTarget:[{numStr:"6"},{numStr:"8"},{numStr:"9"}],
	  arrTargets:[{numStr:"9"}],
	  isColor:true,
      isSize:true
    }
  },
    methods:{
		getValue:function(){
			this.dataObject.input= 'test';
		},
		getForm:function(){
			// if(JSON.stringify(this.dataObjects)==="{}"){
			// 		alert("对象为空")
			// 		alert("源数据："+JSON.stringify(this.arrSource));
			// 		alert("目标数据："+JSON.stringify(this.arrTarget));
			// 		let newArr = this.arrSource.filter(item=> !this.arrTarget.some(items=> item.numStr==items.numStr));
			// 		alert("差异数据："+JSON.stringify(newArr));
			// 		alert("待合并数据："+JSON.stringify(this.arrTargets));
			// 		let newArrs = this.arrTarget.concat(this.arrTargets);
			// 		alert("合并数据："+JSON.stringify(newArrs));
			// 		let newArrss = newArrs.filter(item=> item.numStr==="9")[0];
			// 		alert("过滤数据为9："+JSON.stringify(newArrss));
			// }
			if(JSON.stringify(this.dataObject)==="{}"){
				alert("对象为空")
			}else{
				alert(JSON.stringify(this.dataObject))
			}
		},
    }
}
</script>