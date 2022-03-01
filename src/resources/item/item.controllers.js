import { Item } from './item.model'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

const create = async () => {
  await connect(
    'mongodb+srv://tepela:ZAS0706x@cluster0.ns3va.mongodb.net/frontendmasters?retryWrites=true&w=majority'
  )
  const newItem = await Item.create({
    name: 'test',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.SchemaTypes.ObjectId()
  })
  console.log(newItem)
}

create()
// export default {}
