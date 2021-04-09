using FuzyAppRest.Domain;
using FuzyAppRest.Domain.Domain;
using FuzyAppRest.Domain.Service;
using FuzyAppRest.Entity;
using FuzyAppRest.Entity.Context;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Serilog;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FuzyAppRest.Api.Controllers
{
    [ApiVersion("1.0")]
    [Route("api/actions")]
    //[Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class ActionAsyncController : ControllerBase
    {
        private readonly ActionServiceAsync _service;
        public ActionAsyncController(ActionServiceAsync service)
        {
            _service = service;
        }


        //get all
        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<ActionViewModel>> GetAll()
        {
            var items = await _service.GetAll();
            return items;
        }

        //get one
        [Authorize]
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var item = await _service.GetOne(id);
            if (item == null)
            {
                Log.Error("GetById({ ID}) NOT FOUND", id);
                return NotFound();
            }

            return Ok(item);
        }

        //add
        [Authorize(Roles = "Administrator")]
        [HttpPost]
        public async Task<IActionResult> Create([FromBody] ActionViewModel action)
        {
            if (action == null)
                return BadRequest();

            var id = await _service.Add(action);
            return Created($"api/User/{id}", id);  //HTTP201 Resource created
        }

        //update
        [Authorize(Roles = "Administrator")]
        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ActionViewModel action)
        {
            if (action == null || action.Id != id)
                return BadRequest();

            int retVal = await _service.Update(action);
            if (retVal == 0)
                return StatusCode(304);  //Not Modified
            else if (retVal == -1)
                return StatusCode(412, "DbUpdateConcurrencyException");  //412 Precondition Failed  - concurrency
            else
                return Accepted(action);
        }

        //delete
        [Authorize(Roles = "Administrator")]
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            int retVal = await _service.Remove(id);
            if (retVal == 0)
                return NotFound();  //Not Found 404
            else if (retVal == -1)
                return StatusCode(412, "DbUpdateConcurrencyException");  //Precondition Failed  - concurrency
            else
                return NoContent();   	     //No Content 204
        }

    }

    internal class ActionServiceAsync<T1, T2>
    {
    }
}


