var safetee_buffer = require('../models/Safetee_Head_Buffer');

//
module.exports = safetee_buffer.safetee_base_controller.extend({
    //
    run: function(req) {
        //
        safetee_buffer.safetee['records'].find({sender:req.params.id},function(err, records) {
            //
            safetee_buffer.safetee_response.returnresponse['send'](records);
        });
        //
    }
});