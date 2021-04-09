using AutoMapper;
using FuzyAppRest.Domain.Domain;
using FuzyAppRest.Entity.Entity;
using FuzyAppRest.Entity.UnitofWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FuzyAppRest.Domain.Service
{
    public class ActionServiceAsync : GenericServiceAsync<ActionViewModel, ActionDo>
    {
        //DI must be implemented specific service as well beside GenericAsyncService constructor
        public ActionServiceAsync(IUnitOfWork unitOfWork, IMapper mapper)
        {
            if (_unitOfWork == null)
                _unitOfWork = unitOfWork;
            if (_mapper == null)
                _mapper = mapper;
        }

        //add here any custom service method or override genericasync service method
        //...
    }
}
