(module
  (memory $first (import "imports" "first") 0)
  (func (export "test")
    (i32.store8 $first (i32.const 0) (i32.const 0))
  )
)
